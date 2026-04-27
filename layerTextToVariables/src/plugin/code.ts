declare const __html__: string

function toCamelCase(str: string): string {
  if (!str) return 'var_' + Math.random().toString(36).substr(2, 5)
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter((w) => w.length > 0)
    .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join('')
}

figma.showUI(__html__, { width: 400, height: 650, themeColors: true })

type UiMessage =
  | { type: 'get-collections' }
  | { type: 'extract-text' }
  | {
      type: 'register-variables'
      data: { header: string; body: string; english: string }[]
      collectionId: string | null
      newCollectionName: string
      prefix: string
    }

figma.ui.onmessage = async (msg: UiMessage) => {
  // [1] 콜렉션 목록 조회
  if (msg.type === 'get-collections') {
    try {
      const collections = await figma.variables.getLocalVariableCollectionsAsync()
      const list = collections.map((c) => ({ id: c.id, name: c.name }))
      figma.ui.postMessage({ type: 'collections-list', data: list })
    } catch (e) {
      console.error(e)
    }
    return
  }

  // [2] 텍스트 추출
  if (msg.type === 'extract-text') {
    const selection = figma.currentPage.selection
    if (selection.length === 0) {
      figma.notify('❌ 프레임을 선택해주세요.')
      return
    }
    const resultMap = new Map<string, { header: string; body: string }>()

    selection.forEach((root) => {
      if (root.removed) return

      const findNodes = (name: string): SceneNode[] => {
        try {
          return 'findAll' in root
            ? root.findAll((n) => !n.removed && !!n.name && n.name.toLowerCase().includes(name))
            : []
        } catch (_e) {
          return []
        }
      }

      const headers = findNodes('cell-header')
      const bodies = findNodes('cell-body')

      headers.forEach((hNode, index) => {
        try {
          const getTxt = (n: SceneNode): string => {
            if (!n || n.removed) return ''
            if (n.type === 'TEXT') return n.characters
            const found =
              'findAll' in n ? n.findAll((x) => !x.removed && x.type === 'TEXT') : []
            return found.length > 0 && found[0].type === 'TEXT' ? found[0].characters : ''
          }
          const hText = getTxt(hNode).trim()
          if (hText) {
            const bText = bodies[index] ? getTxt(bodies[index]).trim() : ''
            resultMap.set(hText, { header: hText, body: bText })
          }
        } catch (_e) {
          // skip
        }
      })
    })

    figma.ui.postMessage({ type: 'text-extracted', pairs: Array.from(resultMap.values()) })
    return
  }

  // [3] 변수 등록 및 레이어 연결
  if (msg.type === 'register-variables') {
    const { data, collectionId, newCollectionName, prefix } = msg
    try {
      const collections = await figma.variables.getLocalVariableCollectionsAsync()
      let col: VariableCollection | undefined =
        collectionId && collectionId !== 'new'
          ? collections.find((c) => c.id === collectionId)
          : collections.find(
              (c) => c.name === (newCollectionName || 'Translations').trim(),
            )

      if (!col) col = figma.variables.createVariableCollection((newCollectionName || 'Translations').trim())

      if (col.modes.length < 2) {
        if (col.modes[0].name !== 'title') col.renameMode(col.modes[0].modeId, 'title')
        col.addMode('contents')
      }
      const modeTitleId = col.modes[0].modeId
      const modeContentsId = col.modes[1].modeId

      const currentSelection = figma.currentPage.selection
      let boundCount = 0

      for (const root of currentSelection) {
        if (root.removed) continue
        const targets: SceneNode[] =
          'findAll' in root
            ? root.findAll((n) => {
                try {
                  return (
                    !n.removed &&
                    !!n.name &&
                    (n.name.toLowerCase().includes('cell-header') ||
                      n.name.toLowerCase().includes('cell-body'))
                  )
                } catch (_e) {
                  return false
                }
              })
            : []

        for (const node of targets) {
          try {
            const tNode: TextNode | null =
              node.type === 'TEXT'
                ? node
                : 'findAll' in node
                  ? (node.findAll((n) => !n.removed && n.type === 'TEXT')[0] as TextNode | undefined) ?? null
                  : null

            if (!tNode || tNode.removed) continue

            // 라이브러리 변수 보호
            const currentBound = tNode.boundVariables
            if (currentBound && currentBound.characters) {
              const v = await figma.variables.getVariableByIdAsync(
                (currentBound.characters as VariableAlias).id,
              )
              if (v && v.remote) continue
            }

            const isHeader = node.name.toLowerCase().includes('cell-header')
            const nodeText = tNode.characters.trim()
            const matchData = data.find(
              (item) => (isHeader ? item.header : item.body).trim() === nodeText,
            )

            if (matchData) {
              const varName = toCamelCase(matchData.english)
              const basePath = prefix ? `${prefix}/${varName}` : varName

              const latestVars = await figma.variables.getLocalVariablesAsync('STRING')
              const colVars = latestVars.filter((v) => v.variableCollectionId === col!.id)
              const existingNames = new Set(colVars.map((v) => v.name))

              let uniquePath = basePath
              let index = 2
              while (existingNames.has(uniquePath)) {
                uniquePath = `${basePath}_${index}`
                index++
              }

              const targetVar = figma.variables.createVariable(uniquePath, col!, 'STRING')

              targetVar.setValueForMode(modeTitleId, String(matchData.header || '').trim())
              targetVar.setValueForMode(modeContentsId, String(matchData.body || '').trim())

              const targetModeId = isHeader ? modeTitleId : modeContentsId
              if ('setExplicitVariableModeForCollection' in node) {
                node.setExplicitVariableModeForCollection(col!, targetModeId)
              }
              if ('setExplicitVariableModeForCollection' in tNode) {
                tNode.setExplicitVariableModeForCollection(col!, targetModeId)
              }

              tNode.setBoundVariable('characters', targetVar)
              boundCount++
            }
          } catch (_err) {
            continue
          }
        }
      }

      figma.notify(`✅ ${boundCount}개 연결 완료`)
    } catch (error) {
      figma.notify('❌ 오류: ' + (error instanceof Error ? error.message : String(error)))
    }
  }
}
