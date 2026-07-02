import{N as c,c6 as t}from"./iframe-4xPXPRuq.js";import"./preload-helper-FI0fEOG2.js";const l={title:"UI 패턴/Toast",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["success","info","warning","error","loading"],description:"토스트 타입"}},args:{type:"success"}},s={name:"Toast",render:n=>({components:{Toaster:c},setup(){function i(){const e=n.type;e==="success"?t.success("요청이 정상 처리되었습니다."):e==="info"?t.info("참고할 정보가 있습니다."):e==="warning"?t.warning("주의가 필요합니다."):e==="error"?t.error("오류가 발생했습니다."):e==="loading"&&t.loading("처리 중입니다...")}return{show:i}},template:`
      <div>
        <Toaster :rich-colors="true" :expand="true" :close-button="true" />
        <UiButton @click="show">토스트 실행</UiButton>
      </div>
    `})};var o,r,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Toast',
  render: args => ({
    components: {
      Toaster
    },
    setup() {
      function show() {
        const type = args.type;
        if (type === 'success') toast.success('요청이 정상 처리되었습니다.');else if (type === 'info') toast.info('참고할 정보가 있습니다.');else if (type === 'warning') toast.warning('주의가 필요합니다.');else if (type === 'error') toast.error('오류가 발생했습니다.');else if (type === 'loading') toast.loading('처리 중입니다...');
      }
      return {
        show
      };
    },
    template: \`
      <div>
        <Toaster :rich-colors="true" :expand="true" :close-button="true" />
        <UiButton @click="show">토스트 실행</UiButton>
      </div>
    \`
  })
}`,...(a=(r=s.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const d=["Default"];export{s as Default,d as __namedExportsOrder,l as default};
