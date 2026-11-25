const c={title:"기초/Separator",tags:["autodocs"],parameters:{layout:"centered"}},e={name:"Vertical — 사이즈별",render:()=>({template:`
      <div class="flex flex-col gap-8">

        <!-- sm: caption 사이즈 텍스트 옆 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">size="sm" — caption 사이즈 텍스트 옆 (12px)</p>
          <div class="flex items-center gap-2">
            <span class="caption">항목 A</span>
            <UiSeparator orientation="vertical" size="sm" />
            <span class="caption">항목 B</span>
            <UiSeparator orientation="vertical" size="sm" />
            <span class="caption">항목 C</span>
          </div>
        </div>

        <!-- md: text-sm 사이즈 텍스트 또는 아이콘 버튼 옆 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">size="md" — text-sm 텍스트 / 아이콘 버튼 옆 (16px)</p>
          <div class="flex items-center gap-2">
            <span class="text-sm">항목 A</span>
            <UiSeparator orientation="vertical" />
            <span class="text-sm">항목 B</span>
            <UiSeparator orientation="vertical" />
            <span class="text-sm">항목 C</span>
          </div>
        </div>

        <!-- 레퍼런스: Header — 아이콘 버튼 사이 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">레퍼런스 — Header 툴바 아이콘 버튼 사이</p>
          <div class="flex items-center gap-2">
            <UiButton variant="ghost" size="icon" class="text-muted">
              <LucideBell />
            </UiButton>
            <UiSeparator orientation="vertical" />
            <UiButton variant="ghost" size="icon" class="text-muted">
              <LucideSettings />
            </UiButton>
            <UiSeparator orientation="vertical" />
            <UiButton variant="ghost" size="icon" class="text-muted">
              <LucideUser />
            </UiButton>
          </div>
        </div>

        <!-- 레퍼런스: PageSearch — caption 텍스트 옆 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">레퍼런스 — PageSearch 필터 레이블 옆</p>
          <div class="rounded-md bg-surface-muted px-4 py-3 flex items-center gap-3">
            <p class="flex items-center flex-none">
              <LucideBookmark class="size-4 mr-1"/>
              <span class="caption__bold">조회 저장</span>
              <UiSeparator orientation="vertical" class="ml-3" />
            </p>
            <span class="caption text-muted">필터 항목이 여기에 표시됩니다</span>
          </div>
        </div>

      </div>
    `})},t={name:"Horizontal",render:()=>({template:`
      <div class="flex flex-col gap-8">

        <div class="flex flex-col gap-2">
          <p class="caption text-muted">orientation="horizontal" — 섹션 구분선 (h-2, bg-surface-muted)</p>
          <div class="w-80 flex flex-col gap-3">
            <p class="text-sm">섹션 A</p>
            <UiSeparator orientation="horizontal" />
            <p class="text-sm">섹션 B</p>
            <UiSeparator orientation="horizontal" />
            <p class="text-sm">섹션 C</p>
          </div>
        </div>

        <!-- 레퍼런스: Modal/Sheet 내부 섹션 구분 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">레퍼런스 — Modal/Sheet 내부 섹션 구분 (-mx-6 블리드 처리)</p>
          <div class="w-80 rounded-md border border-border p-6 flex flex-col gap-3">
            <p class="text-sm font-medium">헤더 영역</p>
            <UiSeparator orientation="horizontal" class="-mx-6" />
            <p class="text-sm text-muted">본문 내용이 들어가는 영역입니다.</p>
            <UiSeparator orientation="horizontal" class="-mx-6" />
            <p class="text-sm font-medium">푸터 영역</p>
          </div>
        </div>

      </div>
    `})};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Vertical — 사이즈별',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-8">

        <!-- sm: caption 사이즈 텍스트 옆 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">size="sm" — caption 사이즈 텍스트 옆 (12px)</p>
          <div class="flex items-center gap-2">
            <span class="caption">항목 A</span>
            <UiSeparator orientation="vertical" size="sm" />
            <span class="caption">항목 B</span>
            <UiSeparator orientation="vertical" size="sm" />
            <span class="caption">항목 C</span>
          </div>
        </div>

        <!-- md: text-sm 사이즈 텍스트 또는 아이콘 버튼 옆 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">size="md" — text-sm 텍스트 / 아이콘 버튼 옆 (16px)</p>
          <div class="flex items-center gap-2">
            <span class="text-sm">항목 A</span>
            <UiSeparator orientation="vertical" />
            <span class="text-sm">항목 B</span>
            <UiSeparator orientation="vertical" />
            <span class="text-sm">항목 C</span>
          </div>
        </div>

        <!-- 레퍼런스: Header — 아이콘 버튼 사이 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">레퍼런스 — Header 툴바 아이콘 버튼 사이</p>
          <div class="flex items-center gap-2">
            <UiButton variant="ghost" size="icon" class="text-muted">
              <LucideBell />
            </UiButton>
            <UiSeparator orientation="vertical" />
            <UiButton variant="ghost" size="icon" class="text-muted">
              <LucideSettings />
            </UiButton>
            <UiSeparator orientation="vertical" />
            <UiButton variant="ghost" size="icon" class="text-muted">
              <LucideUser />
            </UiButton>
          </div>
        </div>

        <!-- 레퍼런스: PageSearch — caption 텍스트 옆 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">레퍼런스 — PageSearch 필터 레이블 옆</p>
          <div class="rounded-md bg-surface-muted px-4 py-3 flex items-center gap-3">
            <p class="flex items-center flex-none">
              <LucideBookmark class="size-4 mr-1"/>
              <span class="caption__bold">조회 저장</span>
              <UiSeparator orientation="vertical" class="ml-3" />
            </p>
            <span class="caption text-muted">필터 항목이 여기에 표시됩니다</span>
          </div>
        </div>

      </div>
    \`
  })
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,o,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-8">

        <div class="flex flex-col gap-2">
          <p class="caption text-muted">orientation="horizontal" — 섹션 구분선 (h-2, bg-surface-muted)</p>
          <div class="w-80 flex flex-col gap-3">
            <p class="text-sm">섹션 A</p>
            <UiSeparator orientation="horizontal" />
            <p class="text-sm">섹션 B</p>
            <UiSeparator orientation="horizontal" />
            <p class="text-sm">섹션 C</p>
          </div>
        </div>

        <!-- 레퍼런스: Modal/Sheet 내부 섹션 구분 -->
        <div class="flex flex-col gap-2">
          <p class="caption text-muted">레퍼런스 — Modal/Sheet 내부 섹션 구분 (-mx-6 블리드 처리)</p>
          <div class="w-80 rounded-md border border-border p-6 flex flex-col gap-3">
            <p class="text-sm font-medium">헤더 영역</p>
            <UiSeparator orientation="horizontal" class="-mx-6" />
            <p class="text-sm text-muted">본문 내용이 들어가는 영역입니다.</p>
            <UiSeparator orientation="horizontal" class="-mx-6" />
            <p class="text-sm font-medium">푸터 영역</p>
          </div>
        </div>

      </div>
    \`
  })
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const r=["Vertical","Horizontal"];export{t as Horizontal,e as Vertical,r as __namedExportsOrder,c as default};
