const x={title:"Foundation/Color",tags:["autodocs","done"],parameters:{layout:"padded"}},e={name:"Surface — 배경색",render:()=>({template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">neutral</p>
          <div class="flex gap-3">
            <div v-for="item in neutral" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border border-border" :style="'background: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">system</p>
          <div class="grid grid-cols-4 gap-3">
            <div v-for="item in system" :key="item.token" class="flex flex-col gap-1">
              <div class="h-16 rounded-sm border border-border" :style="'background: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
      </div>
    `,setup(){return{neutral:[{label:"neutral",token:"--surface-neutral",hex:"#FFFFFF"},{label:"muted",token:"--surface-muted",hex:"#FAFAFA"},{label:"disabled",token:"--surface-disabled",hex:"#EBECEE"}],system:[{label:"brand",token:"--surface-brand",hex:"#007BFF"},{label:"brand-subtle",token:"--surface-brand-subtle",hex:"#EFF7FF"},{label:"danger",token:"--surface-danger",hex:"#F13C31"},{label:"danger-subtle",token:"--surface-danger-subtle",hex:"#FFEFEF"},{label:"success",token:"--surface-success",hex:"#00A035"},{label:"success-subtle",token:"--surface-success-subtle",hex:"#F0FFEF"},{label:"warning",token:"--surface-warning",hex:"#F36D00"},{label:"warning-subtle",token:"--surface-warning-subtle",hex:"#FFF6E8"}]}}})},t={name:"Text — 텍스트색",render:()=>({template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">neutral</p>
          <div class="flex gap-3">
            <div v-for="item in neutral" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border border-border flex items-center justify-center"
                :style="item.bg ? 'background:' + item.bg : 'background: var(--surface-muted)'">
                <span class="text-2xl font-bold" :style="'color: var(' + item.token + ')'">Aa</span>
              </div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">system</p>
          <div class="grid grid-cols-4 gap-3">
            <div v-for="item in system" :key="item.token" class="flex flex-col gap-1">
              <div class="h-16 rounded-sm border border-border bg-surface-muted flex items-center justify-center">
                <span class="text-2xl font-bold" :style="'color: var(' + item.token + ')'">Aa</span>
              </div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
      </div>
    `,setup(){return{neutral:[{label:"default",token:"--text-default",hex:"#192030"},{label:"muted",token:"--text-muted",hex:"#798089"},{label:"disabled",token:"--text-disabled",hex:"#BBC0C7"},{label:"neutral",token:"--text-neutral",hex:"#FFFFFF",bg:"var(--text-default)"}],system:[{label:"brand",token:"--text-brand",hex:"#007BFF"},{label:"danger",token:"--text-danger",hex:"#F13C31"},{label:"success",token:"--text-success",hex:"#00A035"},{label:"warning",token:"--text-warning",hex:"#F36D00"}]}}})},a={name:"Border — 테두리색",render:()=>({template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">neutral</p>
          <div class="flex gap-3">
            <div v-for="item in neutral" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border-2" :style="'border-color: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">system</p>
          <div class="flex gap-3">
            <div v-for="item in system" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border-2" :style="'border-color: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
      </div>
    `,setup(){return{neutral:[{label:"default",token:"--border-default",hex:"#DBDDE0"},{label:"strong",token:"--border-strong",hex:"#192030"},{label:"muted",token:"--border-muted",hex:"#798089"}],system:[{label:"brand",token:"--border-brand",hex:"#007BFF"},{label:"brand-subtle",token:"--border-brand-subtle",hex:"#EFF7FF"},{label:"danger",token:"--border-danger",hex:"#F13C31"},{label:"success",token:"--border-success",hex:"#00A035"},{label:"warning",token:"--border-warning",hex:"#F36D00"}]}}})};var l,s,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Surface — 배경색',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">neutral</p>
          <div class="flex gap-3">
            <div v-for="item in neutral" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border border-border" :style="'background: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">system</p>
          <div class="grid grid-cols-4 gap-3">
            <div v-for="item in system" :key="item.token" class="flex flex-col gap-1">
              <div class="h-16 rounded-sm border border-border" :style="'background: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
      </div>
    \`,
    setup() {
      return {
        neutral: [{
          label: 'neutral',
          token: '--surface-neutral',
          hex: '#FFFFFF'
        }, {
          label: 'muted',
          token: '--surface-muted',
          hex: '#FAFAFA'
        }, {
          label: 'disabled',
          token: '--surface-disabled',
          hex: '#EBECEE'
        }],
        system: [{
          label: 'brand',
          token: '--surface-brand',
          hex: '#007BFF'
        }, {
          label: 'brand-subtle',
          token: '--surface-brand-subtle',
          hex: '#EFF7FF'
        }, {
          label: 'danger',
          token: '--surface-danger',
          hex: '#F13C31'
        }, {
          label: 'danger-subtle',
          token: '--surface-danger-subtle',
          hex: '#FFEFEF'
        }, {
          label: 'success',
          token: '--surface-success',
          hex: '#00A035'
        }, {
          label: 'success-subtle',
          token: '--surface-success-subtle',
          hex: '#F0FFEF'
        }, {
          label: 'warning',
          token: '--surface-warning',
          hex: '#F36D00'
        }, {
          label: 'warning-subtle',
          token: '--surface-warning-subtle',
          hex: '#FFF6E8'
        }]
      };
    }
  })
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var d,o,n;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Text — 텍스트색',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">neutral</p>
          <div class="flex gap-3">
            <div v-for="item in neutral" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border border-border flex items-center justify-center"
                :style="item.bg ? 'background:' + item.bg : 'background: var(--surface-muted)'">
                <span class="text-2xl font-bold" :style="'color: var(' + item.token + ')'">Aa</span>
              </div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">system</p>
          <div class="grid grid-cols-4 gap-3">
            <div v-for="item in system" :key="item.token" class="flex flex-col gap-1">
              <div class="h-16 rounded-sm border border-border bg-surface-muted flex items-center justify-center">
                <span class="text-2xl font-bold" :style="'color: var(' + item.token + ')'">Aa</span>
              </div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
      </div>
    \`,
    setup() {
      return {
        neutral: [{
          label: 'default',
          token: '--text-default',
          hex: '#192030'
        }, {
          label: 'muted',
          token: '--text-muted',
          hex: '#798089'
        }, {
          label: 'disabled',
          token: '--text-disabled',
          hex: '#BBC0C7'
        }, {
          label: 'neutral',
          token: '--text-neutral',
          hex: '#FFFFFF',
          bg: 'var(--text-default)'
        }],
        system: [{
          label: 'brand',
          token: '--text-brand',
          hex: '#007BFF'
        }, {
          label: 'danger',
          token: '--text-danger',
          hex: '#F13C31'
        }, {
          label: 'success',
          token: '--text-success',
          hex: '#00A035'
        }, {
          label: 'warning',
          token: '--text-warning',
          hex: '#F36D00'
        }]
      };
    }
  })
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Border — 테두리색',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">neutral</p>
          <div class="flex gap-3">
            <div v-for="item in neutral" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border-2" :style="'border-color: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="caption text-muted font-bold uppercase tracking-wide">system</p>
          <div class="flex gap-3">
            <div v-for="item in system" :key="item.token" class="flex flex-col gap-1 flex-1">
              <div class="h-16 rounded-sm border-2" :style="'border-color: var(' + item.token + ')'"></div>
              <p class="text-sm font-bold">{{ item.label }}</p>
              <p class="caption text-muted">{{ item.token }}</p>
              <p class="caption text-muted">{{ item.hex }}</p>
            </div>
          </div>
        </div>
      </div>
    \`,
    setup() {
      return {
        neutral: [{
          label: 'default',
          token: '--border-default',
          hex: '#DBDDE0'
        }, {
          label: 'strong',
          token: '--border-strong',
          hex: '#192030'
        }, {
          label: 'muted',
          token: '--border-muted',
          hex: '#798089'
        }],
        system: [{
          label: 'brand',
          token: '--border-brand',
          hex: '#007BFF'
        }, {
          label: 'brand-subtle',
          token: '--border-brand-subtle',
          hex: '#EFF7FF'
        }, {
          label: 'danger',
          token: '--border-danger',
          hex: '#F13C31'
        }, {
          label: 'success',
          token: '--border-success',
          hex: '#00A035'
        }, {
          label: 'warning',
          token: '--border-warning',
          hex: '#F36D00'
        }]
      };
    }
  })
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const u=["Surface","Text","Border"];export{a as Border,e as Surface,t as Text,u as __namedExportsOrder,x as default};
