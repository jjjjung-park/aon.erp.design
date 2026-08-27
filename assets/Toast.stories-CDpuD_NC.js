import{Q as c,bY as e}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";const u={title:"UI 패턴/Toast",tags:["autodocs"],argTypes:{type:{control:"select",options:["success","info","warning","error","loading"],description:"토스트 타입"}},args:{type:"success"}},s={name:"기본",render:n=>({components:{Toaster:c},setup(){function a(){const t=n.type;t==="success"?e.success("요청이 정상 처리되었습니다."):t==="info"?e.info("참고할 정보가 있습니다."):t==="warning"?e.warning("주의가 필요합니다."):t==="error"?e.error("오류가 발생했습니다."):t==="loading"&&e.loading("처리 중입니다...")}return{show:a}},template:`
      <div>
        <Toaster  :expand="false"
                  :visibleToasts="1"
                  richColors
                  :closeButton="true"
                  closeButtonPosition="top-right"
                  position="top-right" />
        <UiButton @click="show">토스트 실행</UiButton>
      </div>
    `})};var o,r,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '기본',
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
        <Toaster  :expand="false"
                  :visibleToasts="1"
                  richColors
                  :closeButton="true"
                  closeButtonPosition="top-right"
                  position="top-right" />
        <UiButton @click="show">토스트 실행</UiButton>
      </div>
    \`
  })
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const f=["Default"];export{s as Default,f as __namedExportsOrder,u as default};
