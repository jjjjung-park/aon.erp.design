import{bZ as u,bS as b,bh as f,co as g,bY as _,bg as a,bn as n,bm as o,X as x,Y as h}from"./iframe-4xPXPRuq.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const r={},v={class:"flex items-center gap-1 font-bold"};function F(s,e){const i=u("LucidePaperclip"),d=x,m=h;return b(),f(m,{for:"file",class:"flex flex-col gap-2 items-center justify-center h-full w-full cursor-pointer"},{default:g(()=>[_(s.$slots,"default",{},()=>[a("p",v,[n(i,{size:16}),e[0]||(e[0]=o(" 이미지 등록 ",-1))]),e[1]||(e[1]=a("p",{class:"text-muted caption text-center px-6"},[o("첨부할 파일을 드래그 또는 클릭하여 추가"),a("br"),o("(5mb 이하의 이미지)")],-1))]),n(d,{type:"file",id:"file",multiple:"",class:"sr-only"})]),_:3})}const I=y(r,[["render",F]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{displayName:"InputFile",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/inputs/InputFile.vue"]});const L={title:"UI 패턴/FileDropZone",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{dragging:{control:"boolean",description:"드래그 오버 상태"}},args:{dragging:!1}},t={name:"FileDropZone — 기본",render:s=>({components:{InputFile:I},setup(){return{args:s}},template:`
      <div class="w-80 h-32 rounded-sm border-subtle border-dashed border transition-colors hover:border-primary hover:bg-surface-brand-subtle"
        :class="args.dragging ? 'border-primary bg-surface-brand-subtle' : 'bg-surface-muted'">
        <InputFile>
          <template #default>
            <p class="flex items-center gap-1 font-bold text-sm">
              <LucidePaperclip class="size-4" style="stroke-width: var(--shape-stroke-sm)" />
              파일 첨부
            </p>
            <p class="caption text-muted text-center px-4">드래그 또는 클릭하여 업로드<br/>(10mb 이하)</p>
          </template>
        </InputFile>
      </div>
    `})};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'FileDropZone — 기본',
  render: args => ({
    components: {
      InputFile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-80 h-32 rounded-sm border-subtle border-dashed border transition-colors hover:border-primary hover:bg-surface-brand-subtle"
        :class="args.dragging ? 'border-primary bg-surface-brand-subtle' : 'bg-surface-muted'">
        <InputFile>
          <template #default>
            <p class="flex items-center gap-1 font-bold text-sm">
              <LucidePaperclip class="size-4" style="stroke-width: var(--shape-stroke-sm)" />
              파일 첨부
            </p>
            <p class="caption text-muted text-center px-4">드래그 또는 클릭하여 업로드<br/>(10mb 이하)</p>
          </template>
        </InputFile>
      </div>
    \`
  })
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,L as default};
