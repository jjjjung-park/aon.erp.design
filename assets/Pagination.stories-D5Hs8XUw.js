import{T as s}from"./TablePagination-CxulSNKp.js";import{bM as i}from"./iframe-RcI2tPm4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const c={title:"UI 패턴/Pagination",tags:["autodocs"]},a={name:"TablePagination",render:r=>({components:{TablePagination:s},setup(){const o=i(1);return{args:r,page:o}},template:'<TablePagination v-model:page="page" v-bind="args" />'})};var e,n,t;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'TablePagination',
  render: args => ({
    components: {
      TablePagination
    },
    setup() {
      const page = ref(1);
      return {
        args,
        page
      };
    },
    template: \`<TablePagination v-model:page="page" v-bind="args" />\`
  })
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const d=["Table"];export{a as Table,d as __namedExportsOrder,c as default};
