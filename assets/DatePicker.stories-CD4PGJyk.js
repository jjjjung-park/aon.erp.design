import{bn as G,bM as a,c4 as H,$ as J,bg as g,ca as h,bQ as w,bK as p,bd as Z,cc as f,bi as i,ai as ee,bE as y,c1 as s,ba as ae,bc as D,bf as b,F as x,bh as U,bW as P,bV as O,x as te,ce as ne,ap as re,aN as se,bb as T,ar as le,a as C,b as $,c3 as oe,aO as ie,aP as de}from"./iframe-RcI2tPm4.js";import{_ as ue}from"./DatePicker-LW2os617.js";import"./preload-helper-FI0fEOG2.js";const k=G({__name:"DateRange",props:{forceOpen:{type:Boolean,default:!1},class:{type:[Boolean,null,String,Object,Array]},ariaInvalid:{type:Boolean,default:!1},min:{},max:{}},setup(d){const{format:m}=oe(),t=d,n=a(t.forceOpen),e=a({start:void 0,end:void 0}),l=a("ko"),R=H(l.value),_=new J(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()),u=a(_),c=a(_.add({months:1})),j=a(g({dateObj:u.value,locale:l.value,fixedWeeks:!0,weekStartsOn:0})),z=a(g({dateObj:c.value,locale:l.value,fixedWeeks:!0,weekStartsOn:0})),S=T(()=>t.min?C(m(t.min,"YYYY-MM-DD")):null),M=T(()=>t.max?C(m(t.max,"YYYY-MM-DD")):null),I=()=>{t.forceOpen&&(n.value=!0)},N=r=>{r.start&&r.end&&(n.value=!1)},X=()=>{e.value={start:void 0,end:void 0},!t.forceOpen&&n.value&&(n.value=!1)};return h(u,r=>{j.value=g({dateObj:r,weekStartsOn:0,fixedWeeks:!1,locale:l.value}),$(c.value,r)&&(c.value=c.value.add({months:1}))}),h(c,r=>{z.value=g({dateObj:r,weekStartsOn:0,fixedWeeks:!1,locale:l.value}),$(r,u.value)&&(u.value=u.value.subtract({months:1}))}),(r,o)=>{const q=w("LucideCalendar"),F=w("LucideX"),W=te,E=ee,A=se,K=re,Q=le;return p(),Z(Q,{open:n.value,"onUpdate:open":[o[1]||(o[1]=v=>n.value=v),o[2]||(o[2]=v=>I())],"default-open":t.forceOpen},{default:f(()=>[i(E,{"as-child":"",class:y(s(ae)({"border-danger":d.ariaInvalid},t.class)),"aria-invalid":d.ariaInvalid},{default:f(()=>[D("div",{tabindex:"0",class:y(["flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:ring-ring/50",n.value?"border-primary":"border-border"])},[D("p",{class:y(["flex items-center gap-1",{"text-disabled-text":!e.value.start&&!e.value.end}])},[i(q,{class:"size-4 text-muted"}),e.value.start?(p(),b(x,{key:0},[e.value.end?(p(),b(x,{key:0},[U(P(s(R).custom(s(O)(e.value.start),{dateStyle:"medium"}))+" - "+P(s(R).custom(s(O)(e.value.end),{dateStyle:"medium"})),1)],64)):(p(),b(x,{key:1},[U(P(s(R).custom(s(O)(e.value.start),{dateStyle:"medium"})),1)],64))],64)):(p(),b(x,{key:1},[U(" 날짜를 선택해 주세요 ")],64))],2),i(W,{variant:"ghost",class:"hover:bg-transparent",size:"inline-icon",onClick:ne(X,["prevent","stop"])},{default:f(()=>[i(F,{class:y(e.value?"text-muted":"text-transparent")},null,8,["class"])]),_:1})],2)]),_:1},8,["class","aria-invalid"]),i(K,{class:"w-auto p-0"},{default:f(()=>[i(A,{locale:"ko",modelValue:e.value,"onUpdate:modelValue":[o[0]||(o[0]=v=>e.value=v),N],class:"p-3","number-of-months":2,"week-starts-on":0,"disable-days-outside-current-view":"","min-value":s(S),"max-value":s(M),"initial-focus":""},null,8,["modelValue","min-value","max-value"])]),_:1})]),_:1},8,["open","default-open"])}}});k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:"default",displayName:"DateRange",description:"",tags:{},props:[{name:"forceOpen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"ariaInvalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Date"}]}},{name:"max",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Date"}]}},{name:"placeholder",defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/datePicker/DateRange.vue"]});const ve={title:"UI 패턴/DatePicker",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{pickerType:{control:"radio",options:["년도","년도 범위","날짜","날짜 범위"],description:"선택 타입"}},args:{pickerType:"날짜"}},V={name:"기본",render:d=>({components:{DatePicker:ue,DateRange:k,YearPicker:de,YearRange:ie},setup(){const m=a(""),t=a(!1),n=a(null),e=a(!1),l=a({start:null,end:null});return{args:d,dateValue:m,yearOpen:t,yearValue:n,yearRangeOpen:e,yearRangeValue:l}},template:`
      <div class="w-60">
        <!-- 날짜 -->
        <DatePicker
          v-if="args.pickerType === '날짜'"
          v-model="dateValue"
          placeholder="날짜를 선택해 주세요"
        />

        <!-- 날짜 범위 -->
        <DateRange
          v-else-if="args.pickerType === '날짜 범위'"
        />

        <!-- 년도 -->
        <UiPopover v-else-if="args.pickerType === '년도'" v-model:open="yearOpen">
          <UiPopoverTrigger as-child>
            <div tabindex="0"
                :class="['flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:ring-ring/50',
                yearOpen ? 'border-primary' : 'border-border']">
              <p :class="['flex items-center gap-1', !yearValue ? 'text-disabled-text' : '']">
                <LucideCalendar class="size-4 text-muted flex-none" />
                {{ yearValue ? yearValue.year + '년' : '년도를 선택해 주세요' }}
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="inline-icon" @click.prevent.stop="yearValue = null" :disabled="!yearValue">
                <LucideX :class="[!yearValue ? 'text-transparent' : 'text-muted']" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <YearPicker v-model="yearValue" @update:model-value="yearOpen = false" />
          </UiPopoverContent>
        </UiPopover>

        <!-- 년도 범위 -->
        <UiPopover v-else-if="args.pickerType === '년도 범위'" v-model:open="yearRangeOpen">
          <UiPopoverTrigger as-child>
            <div tabindex="0"
                :class="['flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:ring-ring/50',
                yearRangeOpen ? 'border-primary' : 'border-border']">
              <p :class="['flex items-center gap-1', !yearRangeValue.start ? 'text-disabled-text' : '']">
                <LucideCalendar class="size-4 text-muted flex-none" />
                <template v-if="yearRangeValue.start">
                  {{ yearRangeValue.start.year }}년
                  <template v-if="yearRangeValue.end"> - {{ yearRangeValue.end.year }}년</template>
                </template>
                <template v-else>년도 범위를 선택해 주세요</template>
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="inline-icon" @click.prevent.stop="yearRangeValue = { start: null, end: null }" :disabled="!yearRangeValue.start && !yearRangeValue.end">
                <LucideX :class="[(!yearRangeValue.start && !yearRangeValue.end) ? 'text-transparent' : 'text-muted']" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <YearRange v-model="yearRangeValue" @update:model-value="val => { if (val.start && val.end) yearRangeOpen = false }" />
          </UiPopoverContent>
        </UiPopover>
      </div>
    `})};var Y,B,L;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '기본',
  render: args => ({
    components: {
      DatePicker,
      DateRange,
      YearPicker,
      YearRange
    },
    setup() {
      const dateValue = ref('');
      const yearOpen = ref(false);
      const yearValue = ref<any>(null);
      const yearRangeOpen = ref(false);
      const yearRangeValue = ref<{
        start: any;
        end: any;
      }>({
        start: null,
        end: null
      });
      return {
        args,
        dateValue,
        yearOpen,
        yearValue,
        yearRangeOpen,
        yearRangeValue
      };
    },
    template: \`
      <div class="w-60">
        <!-- 날짜 -->
        <DatePicker
          v-if="args.pickerType === '날짜'"
          v-model="dateValue"
          placeholder="날짜를 선택해 주세요"
        />

        <!-- 날짜 범위 -->
        <DateRange
          v-else-if="args.pickerType === '날짜 범위'"
        />

        <!-- 년도 -->
        <UiPopover v-else-if="args.pickerType === '년도'" v-model:open="yearOpen">
          <UiPopoverTrigger as-child>
            <div tabindex="0"
                :class="['flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:ring-ring/50',
                yearOpen ? 'border-primary' : 'border-border']">
              <p :class="['flex items-center gap-1', !yearValue ? 'text-disabled-text' : '']">
                <LucideCalendar class="size-4 text-muted flex-none" />
                {{ yearValue ? yearValue.year + '년' : '년도를 선택해 주세요' }}
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="inline-icon" @click.prevent.stop="yearValue = null" :disabled="!yearValue">
                <LucideX :class="[!yearValue ? 'text-transparent' : 'text-muted']" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <YearPicker v-model="yearValue" @update:model-value="yearOpen = false" />
          </UiPopoverContent>
        </UiPopover>

        <!-- 년도 범위 -->
        <UiPopover v-else-if="args.pickerType === '년도 범위'" v-model:open="yearRangeOpen">
          <UiPopoverTrigger as-child>
            <div tabindex="0"
                :class="['flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:ring-ring/50',
                yearRangeOpen ? 'border-primary' : 'border-border']">
              <p :class="['flex items-center gap-1', !yearRangeValue.start ? 'text-disabled-text' : '']">
                <LucideCalendar class="size-4 text-muted flex-none" />
                <template v-if="yearRangeValue.start">
                  {{ yearRangeValue.start.year }}년
                  <template v-if="yearRangeValue.end"> - {{ yearRangeValue.end.year }}년</template>
                </template>
                <template v-else>년도 범위를 선택해 주세요</template>
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="inline-icon" @click.prevent.stop="yearRangeValue = { start: null, end: null }" :disabled="!yearRangeValue.start && !yearRangeValue.end">
                <LucideX :class="[(!yearRangeValue.start && !yearRangeValue.end) ? 'text-transparent' : 'text-muted']" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <YearRange v-model="yearRangeValue" @update:model-value="val => { if (val.start && val.end) yearRangeOpen = false }" />
          </UiPopoverContent>
        </UiPopover>
      </div>
    \`
  })
}`,...(L=(B=V.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const ge=["Default"];export{V as Default,ge as __namedExportsOrder,ve as default};
