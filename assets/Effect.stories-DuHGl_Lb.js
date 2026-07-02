const c={title:"Foundation/Effect",tags:["autodocs","done"],parameters:{layout:"padded"}},e={name:"Border — 테두리 두께",render:()=>({template:`
      <div class="flex gap-6">
        <div v-for="item in items" :key="item.token" class="flex flex-col gap-2 flex-1">
          <div
            class="h-16 rounded-sm bg-surface-muted"
            :style="'border: var(' + item.token + ') solid var(--border-default)'"
          ></div>
          <p class="text-sm font-bold">{{ item.label }}</p>
          <p class="caption text-muted">{{ item.token }}</p>
          <p class="caption text-muted">{{ item.value }}</p>
        </div>
      </div>
    `,setup(){return{items:[{label:"default",token:"--shape-border-default",value:"1px"},{label:"strong",token:"--shape-border-strong",value:"2px"}]}}})},t={name:"Shadow — 그림자",render:()=>({template:`
      <div class="flex gap-10">
        <div v-for="item in items" :key="item.label" class="flex flex-col gap-2 flex-1">
          <div
            class="h-24 rounded-sm bg-surface-neutral"
            :class="item.cls"
          ></div>
          <p class="text-sm font-bold">{{ item.label }}</p>
          <p class="caption text-muted">{{ item.token }}</p>
          <p class="caption text-muted">{{ item.desc }}</p>
        </div>
      </div>
    `,setup(){return{items:[{label:"left",cls:"shadow-left",token:"--effects-shadow-left",desc:"x:-4 y:0 blur:4 #BBC0C7 20%"},{label:"bottom",cls:"shadow-bottom",token:"--effects-shadow-bottom",desc:"x:0 y:6 blur:12 #DCE0E5 50%"}]}}})};var s,a,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Border — 테두리 두께',
  render: () => ({
    template: \`
      <div class="flex gap-6">
        <div v-for="item in items" :key="item.token" class="flex flex-col gap-2 flex-1">
          <div
            class="h-16 rounded-sm bg-surface-muted"
            :style="'border: var(' + item.token + ') solid var(--border-default)'"
          ></div>
          <p class="text-sm font-bold">{{ item.label }}</p>
          <p class="caption text-muted">{{ item.token }}</p>
          <p class="caption text-muted">{{ item.value }}</p>
        </div>
      </div>
    \`,
    setup() {
      return {
        items: [{
          label: 'default',
          token: '--shape-border-default',
          value: '1px'
        }, {
          label: 'strong',
          token: '--shape-border-strong',
          value: '2px'
        }]
      };
    }
  })
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var o,d,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Shadow — 그림자',
  render: () => ({
    template: \`
      <div class="flex gap-10">
        <div v-for="item in items" :key="item.label" class="flex flex-col gap-2 flex-1">
          <div
            class="h-24 rounded-sm bg-surface-neutral"
            :class="item.cls"
          ></div>
          <p class="text-sm font-bold">{{ item.label }}</p>
          <p class="caption text-muted">{{ item.token }}</p>
          <p class="caption text-muted">{{ item.desc }}</p>
        </div>
      </div>
    \`,
    setup() {
      return {
        items: [{
          label: 'left',
          cls: 'shadow-left',
          token: '--effects-shadow-left',
          desc: 'x:-4 y:0 blur:4 #BBC0C7 20%'
        }, {
          label: 'bottom',
          cls: 'shadow-bottom',
          token: '--effects-shadow-bottom',
          desc: 'x:0 y:6 blur:12 #DCE0E5 50%'
        }]
      };
    }
  })
}`,...(r=(d=t.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const i=["Border","Shadow"];export{e as Border,t as Shadow,i as __namedExportsOrder,c as default};
