import{F as l}from"./FileDropzone-BTWDkGnu.js";import"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"UI 패턴/upload/이미지 업로드",tags:["autodocs"],parameters:{layout:"centered"}},e={name:"추가",render:()=>({components:{FileDropzone:l},template:`
      <div class="w-80 flex flex-col gap-2">
        <!-- 미리보기: 이미지 없음 -->
        <div class="bg-surface-muted aspect-video flex items-center justify-center rounded-sm">
          <LucideImages class="size-12 text-subtle-text" />
        </div>
        <UiSeparator orientation="horizontal" class="-mx-0" />
        <div class="flex justify-between items-center">
          <p class="caption__bold">첨부된 파일 (0/5)</p>
          <span class="caption text-muted">최대 5개 | 총 25MB 이하</span>
        </div>
        <!-- 드롭존 -->
        <div class="bg-surface-muted border-muted border-dashed border-1 h-28 cursor-pointer hover:border-primary hover:bg-primary-light">
          <FileDropzone>
            <LucideImages class="size-6 text-subtle-text" />
            <p class="caption text-muted text-center px-6">파일을 끌어올리거나, 클릭해서 추가해 주세요.</p>
            <span class="caption text-muted text-center px-6">jpg, png / 파일당 5MB 이하 / 전체 25MB 이하</span>
          </FileDropzone>
        </div>
      </div>
    `})},s={name:"썸네일 상태별",render:()=>({template:`
      <div class="w-200 flex flex-col gap-2">
        <div class="caption__bold">썸네일 상태</div>
        <div class="p-2 bg-surface-muted border-muted border-dashed border-1 flex gap-2">

          <!-- 삭제됨 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full bg-subtle-text/20 opacity-50" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideCircleMinus class="size-4 text-muted" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideUndo2 />
                </UiButton>
              </div>
            </div>
          </div>

          <!-- 저장 완료 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideCheckCheck class="size-4 text-success" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideDownload />
                </UiButton>
              </div>
            </div>
          </div>

          <!-- 에러 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideAlertTriangle class="size-4 text-danger" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideTrash2 />
                </UiButton>
              </div>
            </div>
          </div>

          <!-- 저장 전 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideCheck class="size-4 text-success" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideTrash2 />
                </UiButton>
              </div>
            </div>
          </div>

        </div>
        <div class="flex gap-4 caption text-muted">
          <span class="flex items-center gap-1"><LucideCircleMinus class="size-3" /> 삭제됨</span>
          <span class="flex items-center gap-1"><LucideCheckCheck class="size-3 text-success" /> 저장완료</span>
          <span class="flex items-center gap-1"><LucideAlertTriangle class="size-3 text-danger" /> 에러</span>
          <span class="flex items-center gap-1"><LucideCheck class="size-3 text-success" /> 저장전</span>
        </div>
      </div>
    `})};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '추가',
  render: () => ({
    components: {
      FileDropzone
    },
    template: \`
      <div class="w-80 flex flex-col gap-2">
        <!-- 미리보기: 이미지 없음 -->
        <div class="bg-surface-muted aspect-video flex items-center justify-center rounded-sm">
          <LucideImages class="size-12 text-subtle-text" />
        </div>
        <UiSeparator orientation="horizontal" class="-mx-0" />
        <div class="flex justify-between items-center">
          <p class="caption__bold">첨부된 파일 (0/5)</p>
          <span class="caption text-muted">최대 5개 | 총 25MB 이하</span>
        </div>
        <!-- 드롭존 -->
        <div class="bg-surface-muted border-muted border-dashed border-1 h-28 cursor-pointer hover:border-primary hover:bg-primary-light">
          <FileDropzone>
            <LucideImages class="size-6 text-subtle-text" />
            <p class="caption text-muted text-center px-6">파일을 끌어올리거나, 클릭해서 추가해 주세요.</p>
            <span class="caption text-muted text-center px-6">jpg, png / 파일당 5MB 이하 / 전체 25MB 이하</span>
          </FileDropzone>
        </div>
      </div>
    \`
  })
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var n,a,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '썸네일 상태별',
  render: () => ({
    template: \`
      <div class="w-200 flex flex-col gap-2">
        <div class="caption__bold">썸네일 상태</div>
        <div class="p-2 bg-surface-muted border-muted border-dashed border-1 flex gap-2">

          <!-- 삭제됨 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full bg-subtle-text/20 opacity-50" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideCircleMinus class="size-4 text-muted" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideUndo2 />
                </UiButton>
              </div>
            </div>
          </div>

          <!-- 저장 완료 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideCheckCheck class="size-4 text-success" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideDownload />
                </UiButton>
              </div>
            </div>
          </div>

          <!-- 에러 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideAlertTriangle class="size-4 text-danger" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideTrash2 />
                </UiButton>
              </div>
            </div>
          </div>

          <!-- 저장 전 -->
          <div class="basis-1/4 aspect-video border-border border-1 flex items-center justify-center overflow-hidden rounded-sm relative group cursor-pointer">
            <div class="w-full h-full" />
            <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
              <LucideCheck class="size-4 text-success" />
            </div>
            <div class="bg-default/75 size-full absolute inset-0 hidden group-hover:flex items-end p-1">
              <div class="absolute right-1 top-1">
                <UiButton variant="ghost" size="icon" class="text-neutral hover:bg-transparent">
                  <LucideTrash2 />
                </UiButton>
              </div>
            </div>
          </div>

        </div>
        <div class="flex gap-4 caption text-muted">
          <span class="flex items-center gap-1"><LucideCircleMinus class="size-3" /> 삭제됨</span>
          <span class="flex items-center gap-1"><LucideCheckCheck class="size-3 text-success" /> 저장완료</span>
          <span class="flex items-center gap-1"><LucideAlertTriangle class="size-3 text-danger" /> 에러</span>
          <span class="flex items-center gap-1"><LucideCheck class="size-3 text-success" /> 저장전</span>
        </div>
      </div>
    \`
  })
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const b=["Add","Thumbnail"];export{e as Add,s as Thumbnail,b as __namedExportsOrder,v as default};
