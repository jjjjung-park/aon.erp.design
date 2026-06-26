import{bq as E,bQ as a,$ as P,c7 as Q,bj as p,ce as h,bU as R,bO as u,bg as Z,cf as m,bl as o,aj as G,bI as x,c5 as r,bd as H,bf as D,bi as v,F as g,bk as k,b_ as U,bZ as V,z as J,ak as K,al as ee,be as w,am as ae,a as O,b as T,c6 as te}from"./iframe-CGZVOpYz.js";import{_ as re}from"./DatePicker-C0wyGiLx.js";import"./preload-helper-FI0fEOG2.js";const se={class:"flex gap-2 justify-between items-center border-1 border-border rounded-sm h-8 min-w-60 pl-2"},y=E({__name:"DateRange",props:{class:{type:[Boolean,null,String,Object,Array]},ariaInvalid:{type:Boolean},min:{},max:{}},setup(l){const{format:d}=te(),s=l,e=a({start:new P(2022,1,20),end:new P(2022,1,20).add({days:20})}),n=a("ko"),b=Q(n.value),i=a(e.value.start),c=a(e.value.end),B=a(p({dateObj:i.value,locale:n.value,fixedWeeks:!0,weekStartsOn:0})),j=a(p({dateObj:c.value,locale:n.value,fixedWeeks:!0,weekStartsOn:0})),L=w(()=>s.min?O(d(s.min,"YYYY-MM-DD")):null),S=w(()=>s.max?O(d(s.max,"YYYY-MM-DD")):null),Y=t=>{t.start&&t.end&&(open.value=!1)};return h(i,t=>{B.value=p({dateObj:t,weekStartsOn:0,fixedWeeks:!1,locale:n.value}),T(c.value,t)&&(c.value=c.value.add({months:1}))}),h(c,t=>{j.value=p({dateObj:t,weekStartsOn:0,fixedWeeks:!1,locale:n.value}),T(t,i.value)&&(i.value=i.value.subtract({months:1}))}),(t,_)=>{const I=R("LucideCalendar"),M=R("LucideX"),N=J,X=G,q=ee,F=K,W=ae;return u(),Z(W,null,{default:m(()=>[o(X,{"as-child":"",class:x(r(H)({"border-danger":l.ariaInvalid},s.class)),"aria-invalid":l.ariaInvalid},{default:m(()=>[D("div",se,[D("p",{class:x(["flex items-center gap-2",!e.value&&"text-disabled-text"])},[o(I,{class:"size-4 text-muted"}),e.value.start?(u(),v(g,{key:0},[e.value.end?(u(),v(g,{key:0},[k(U(r(b).custom(r(V)(e.value.start),{dateStyle:"medium"}))+" - "+U(r(b).custom(r(V)(e.value.end),{dateStyle:"medium"})),1)],64)):(u(),v(g,{key:1},[k(U(r(b).custom(r(V)(e.value.start),{dateStyle:"medium"})),1)],64))],64)):(u(),v(g,{key:1},[k(" 날짜를 선택해 주세요 ")],64))],2),o(N,{variant:"ghost",class:"hover:bg-transparent",size:"icon-sm"},{default:m(()=>[o(M,{class:x(["size-4",e.value?"text-muted":"text-transparent"])},null,8,["class"])]),_:1})])]),_:1},8,["class","aria-invalid"]),o(F,{class:"w-auto p-0"},{default:m(()=>[o(q,{locale:"ko",modelValue:e.value,"onUpdate:modelValue":[_[0]||(_[0]=A=>e.value=A),Y],class:"p-3","number-of-months":2,"week-starts-on":0,"disable-days-outside-current-view":"","min-value":r(L),"max-value":r(S)},null,8,["modelValue","min-value","max-value"])]),_:1})]),_:1})}}});y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:"default",displayName:"DateRange",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"ariaInvalid",required:!1,type:{name:"boolean"}},{name:"min",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Date"}]}},{name:"max",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Date"}]}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/datePicker/DateRange.vue"]});const ie={title:"데이터 입력/DatePicker",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{pickerType:{control:"radio",options:["년도","년도 범위","날짜","날짜 범위"],description:"선택 타입"}},args:{pickerType:"날짜"}},f={name:"DatePicker",render:l=>({components:{DatePicker:re,DateRange:y},setup(){const d=a(!1),s=a(null),e=a(!1),n=a({start:null,end:null});return{args:l,yearOpen:d,yearValue:s,yearRangeOpen:e,yearRangeValue:n}},template:`
      <div class="w-60">
        <!-- 날짜 -->
        <DatePicker
          v-if="args.pickerType === '날짜'"
          placeholder="날짜를 선택해 주세요"
        />

        <!-- 날짜 범위 -->
        <DateRange
          v-else-if="args.pickerType === '날짜 범위'"
        />

        <!-- 년도 -->
        <UiPopover v-else-if="args.pickerType === '년도'" v-model:open="yearOpen">
          <UiPopoverTrigger as-child>
            <div class="flex gap-2 justify-between items-center border border-border rounded-sm h-8 px-3 bg-background w-full cursor-pointer hover:border-primary transition-colors">
              <p class="flex items-center gap-2" :class="!yearValue ? 'text-disabled-text' : 'text-default'">
                <LucideCalendar class="size-4 text-muted flex-none" />
                {{ yearValue ? yearValue.year + '년' : '년도를 선택해 주세요' }}
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm" @click.prevent.stop="yearValue = null">
                <LucideX class="size-4" :class="!yearValue ? 'text-transparent' : 'text-muted'" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <UiDatePicker v-model="yearValue" @update:model-value="yearOpen = false" />
          </UiPopoverContent>
        </UiPopover>

        <!-- 년도 범위 -->
        <UiPopover v-else-if="args.pickerType === '년도 범위'" v-model:open="yearRangeOpen">
          <UiPopoverTrigger as-child>
            <div class="flex gap-2 justify-between items-center border border-border rounded-sm h-8 px-3 bg-background w-full cursor-pointer hover:border-primary transition-colors">
              <p class="flex items-center gap-2" :class="!yearRangeValue.start ? 'text-disabled-text' : 'text-default'">
                <LucideCalendar class="size-4 text-muted flex-none" />
                <template v-if="yearRangeValue.start">
                  {{ yearRangeValue.start.year }}년
                  <template v-if="yearRangeValue.end"> - {{ yearRangeValue.end.year }}년</template>
                </template>
                <template v-else>년도 범위를 선택해 주세요</template>
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm" @click.prevent.stop="yearRangeValue = { start: null, end: null }">
                <LucideX class="size-4" :class="!yearRangeValue.start ? 'text-transparent' : 'text-muted'" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <UiYearRange v-model="yearRangeValue" @update:model-value="val => { if (val.start && val.end) yearRangeOpen = false }" />
          </UiPopoverContent>
        </UiPopover>
      </div>
    `})};var C,z,$;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'DatePicker',
  render: args => ({
    components: {
      DatePicker,
      DateRange
    },
    setup() {
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
          placeholder="날짜를 선택해 주세요"
        />

        <!-- 날짜 범위 -->
        <DateRange
          v-else-if="args.pickerType === '날짜 범위'"
        />

        <!-- 년도 -->
        <UiPopover v-else-if="args.pickerType === '년도'" v-model:open="yearOpen">
          <UiPopoverTrigger as-child>
            <div class="flex gap-2 justify-between items-center border border-border rounded-sm h-8 px-3 bg-background w-full cursor-pointer hover:border-primary transition-colors">
              <p class="flex items-center gap-2" :class="!yearValue ? 'text-disabled-text' : 'text-default'">
                <LucideCalendar class="size-4 text-muted flex-none" />
                {{ yearValue ? yearValue.year + '년' : '년도를 선택해 주세요' }}
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm" @click.prevent.stop="yearValue = null">
                <LucideX class="size-4" :class="!yearValue ? 'text-transparent' : 'text-muted'" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <UiDatePicker v-model="yearValue" @update:model-value="yearOpen = false" />
          </UiPopoverContent>
        </UiPopover>

        <!-- 년도 범위 -->
        <UiPopover v-else-if="args.pickerType === '년도 범위'" v-model:open="yearRangeOpen">
          <UiPopoverTrigger as-child>
            <div class="flex gap-2 justify-between items-center border border-border rounded-sm h-8 px-3 bg-background w-full cursor-pointer hover:border-primary transition-colors">
              <p class="flex items-center gap-2" :class="!yearRangeValue.start ? 'text-disabled-text' : 'text-default'">
                <LucideCalendar class="size-4 text-muted flex-none" />
                <template v-if="yearRangeValue.start">
                  {{ yearRangeValue.start.year }}년
                  <template v-if="yearRangeValue.end"> - {{ yearRangeValue.end.year }}년</template>
                </template>
                <template v-else>년도 범위를 선택해 주세요</template>
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm" @click.prevent.stop="yearRangeValue = { start: null, end: null }">
                <LucideX class="size-4" :class="!yearRangeValue.start ? 'text-transparent' : 'text-muted'" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <UiYearRange v-model="yearRangeValue" @update:model-value="val => { if (val.start && val.end) yearRangeOpen = false }" />
          </UiPopoverContent>
        </UiPopover>
      </div>
    \`
  })
}`,...($=(z=f.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const ce=["Default"];export{f as Default,ce as __namedExportsOrder,ie as default};
