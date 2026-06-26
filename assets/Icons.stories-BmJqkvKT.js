const t=["LucidePlus","LucideTrash2","LucideCircleAlert","LucideSearch","LucideSquarePen","LucideCalendar","LucideEqual","LucideInfo","LucideCheck","LucideDownload","LucideEye","LucidePaperclip","LucideChevronDown","LucidePin","LucideSettings"],n={"size-3":3,"size-3.5":2,"size-4":2,"size-5":2,"size-6":2},c={title:"기초/Icons",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{icon:{control:"select",options:t,description:"아이콘"},size:{control:"radio",options:Object.keys(n),description:"사이즈"}},args:{icon:"LucidePlus",size:"size-4"}},e={name:"Icons",render:o=>({setup(){return{args:o,sizeStrokeMap:n}},template:'<component :is="args.icon" :class="args.size" :stroke-width="sizeStrokeMap[args.size]" />'})};var s,i,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Icons',
  render: args => ({
    setup() {
      return {
        args,
        sizeStrokeMap
      };
    },
    template: \`<component :is="args.icon" :class="args.size" :stroke-width="sizeStrokeMap[args.size]" />\`
  })
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const a=["Default"];export{e as Default,a as __namedExportsOrder,c as default};
