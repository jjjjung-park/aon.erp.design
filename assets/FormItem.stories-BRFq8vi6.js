import{bn as $,bQ as S,bK as _,bd as V,cc as l,bc as e,bi as t,c1 as c,z as g,A as d,bh as o,bf as R,F as D,bO as O,x as M,aa as j,by as E,bM as v}from"./iframe-RcI2tPm4.js";import{_ as G}from"./ComboboxTag-D3Kuh4rs.js";import{_ as z}from"./DatePicker-LW2os617.js";import{_ as K}from"./ModalBase-zATy2rHv.js";import{T as Q}from"./TablePagination-CxulSNKp.js";import"./preload-helper-FI0fEOG2.js";import"./EmptyData-CpBZOKlK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const H={class:"sticky top-0 pb-6 bg-background -mx-6 px-6"},J={class:""},W={class:"addr-list"},X={class:"border-b-1 border-border mx-6 pt-4 pb-6 grid gap-3"},Y={class:"grid gap-2"},Z={class:"flex items-start gap-3"},ee={class:"addr-list__type"},ae={class:"flex items-start gap-3"},te={class:"addr-list__type"},se={class:"addr-list"},le={class:"border-b-1 border-border mx-6 pt-4 pb-6 grid gap-3"},re={class:"grid gap-2"},oe={class:"flex items-start gap-3"},de={class:"addr-list__type"},ie={class:"flex items-start gap-3"},ne={class:"addr-list__type"},u=$({__name:"AddrModal",setup(s){return(f,a)=>{const x=S("LucideSearchIcon");return _(),V(K,{title:"주소 검색",class:"min-h-120",footer:!1},{body:l(()=>[e("div",H,[t(c(g),{class:"gap-1",placeholder:"지번, 도로명, 건물명 입력 후 엔터"},{prefix:l(()=>[t(x)]),_:1})]),e("div",J,[a[10]||(a[10]=e("p",{class:"font-bold"},"총 100건",-1)),e("ul",null,[e("li",W,[e("div",X,[a[4]||(a[4]=e("p",{class:"title__bold text-primary"},"04778",-1)),e("div",Y,[e("dl",Z,[e("dt",ee,[t(d,{variant:"outline"},{default:l(()=>[...a[0]||(a[0]=[o("도로명",-1)])]),_:1})]),a[1]||(a[1]=e("dd",{class:""},[e("ul",null,[e("li",{class:"addr-list__item"}," 서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학) ")]),e("p")],-1))]),e("dl",ae,[e("dt",te,[t(d,{variant:"outline"},{default:l(()=>[...a[2]||(a[2]=[o("지번",-1)])]),_:1})]),a[3]||(a[3]=e("dd",{class:""},[e("p",{class:"caption text-muted mb-2"},[o("아래 목록에서 정확한 지번 주소를 선택 해 주세요."),e("br"),o(" 잘 모르시는 경우 ‘선택 안함'을 클릭 해 주세요.")]),e("ul",{class:"grid gap-2"},[e("li",{class:"addr-list__item"}," 지번 주소 선택 안함 "),e("li",{class:"addr-list__item"}," 서울특별시 성동구 성수동 1가 000-000 "),e("li",{class:"addr-list__item"}," 서울특별시 성동구 성수동 1가 000-000 ")])],-1))])])])]),(_(),R(D,null,O(10,r=>e("li",se,[e("div",le,[a[9]||(a[9]=e("p",{class:"title__bold text-primary"},"04778",-1)),e("div",re,[e("dl",oe,[e("dt",de,[t(d,{variant:"outline"},{default:l(()=>[...a[5]||(a[5]=[o("도로명",-1)])]),_:1})]),a[6]||(a[6]=e("dd",{class:""},[e("ul",null,[e("li",{class:"addr-list__item"}," 서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학) ")]),e("p")],-1))]),e("dl",ie,[e("dt",ne,[t(d,{variant:"outline"},{default:l(()=>[...a[7]||(a[7]=[o("지번",-1)])]),_:1})]),a[8]||(a[8]=e("dd",{class:""},[e("ul",{class:"grid gap-2"},[e("li",{class:"addr-list__item"}," 서울특별시 성동구 성수동 1가 000-000 ")])],-1))])])])])),64))]),t(Q,{class:"py-3 sticky bottom-0 bg-background"})])]),_:1})}}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"AddrModal",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/modal/AddrModal.vue"]});const me={class:"grid gap-1"},pe={class:"flex gap-2"},b=$({__name:"FormAddr",props:{label:{default:"주소"},required:{type:Boolean,default:!1},validateText:{}},emits:["open"],setup(s,{emit:f}){const a=v(!1);return(x,r)=>{const P=M;return _(),R(D,null,[t(j,{class:"col-span-full h-27",required:s.required,label:s.label,"validate-text":s.validateText},{"input-item":l(()=>[e("div",me,[e("div",pe,[t(c(g),{readonly:"",placeholder:"주소를 입력해 주세요"}),t(P,{variant:"secondary",onClick:r[0]||(r[0]=y=>a.value=!0)},{default:l(()=>[...r[2]||(r[2]=[o("검색",-1)])]),_:1})]),t(c(g),{placeholder:"상세주소를 입력해 주세요",class:""})])]),_:1},8,["required","label","validate-text"]),t(u,{open:c(a),"onUpdate:open":r[1]||(r[1]=y=>E(a)?a.value=y:null)},null,8,["open"])],64)}}});b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"FormAddr",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'주소'"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validateText",required:!1,type:{name:"string"}}],events:[{name:"open"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/form/FormAddr.vue"]});const N=[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 3",value:"3"},{label:"옵션 4",value:"4"}],ye={title:"UI 패턴/FormItem",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"라벨 텍스트"},showLabel:{control:"boolean",description:"라벨 표시"},required:{control:"boolean",description:"필수 표시 (*)"},placeholder:{control:"text",description:"플레이스홀더"},validateText:{control:"text",description:"안내/오류 메시지"},ariaInvalid:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화"},readonly:{control:"boolean",description:"읽기 전용"},type:{control:"select",options:["text","comboboxTag","Checkbox","RadioGroup","DatePicker"],description:"입력 컴포넌트 타입"}},args:{label:"항목명",showLabel:!0,required:!1,placeholder:"내용을 입력해 주세요",validateText:"",ariaInvalid:!1,disabled:!1,readonly:!1,type:"text"}},i={name:"기본",render:s=>({components:{ComboboxTag:G,DatePicker:z},setup(){const f=v("");return{args:s,value:f,sampleItems:N}},template:`
      <div class="w-80">
        <FormItem
          v-if="args.type === 'text'"
          v-model="value"
          :label="args.showLabel ? args.label : undefined"
          :required="args.required"
          :placeholder="args.placeholder"
          :validate-text="args.validateText"
          :aria-invalid="args.ariaInvalid"
          :disabled="args.disabled"
          :readonly="args.readonly"
        />
        <FormItem
          v-else
          :label="args.showLabel ? args.label : undefined"
          :required="args.required"
          :validate-text="args.validateText"
          :aria-invalid="args.ariaInvalid"
        >
          <template #input-item>
            <ComboboxTag
              v-if="args.type === 'comboboxTag'"
              :list-item="sampleItems"
              :placeholder="args.placeholder"
              :disabled="args.disabled"
            />
            <UiCheckbox
              v-else-if="args.type === 'Checkbox'"
              :disabled="args.disabled"
            />
            <UiRadioGroup
              v-else-if="args.type === 'RadioGroup'"
              class="flex flex-col gap-2"
              :disabled="args.disabled"
            >
              <div v-for="item in sampleItems" :key="item.value" class="flex items-center gap-2">
                <UiRadioGroupItem :id="'r' + item.value" :value="item.value" />
                <UiLabel :for="'r' + item.value">{{ item.label }}</UiLabel>
              </div>
            </UiRadioGroup>
            <DatePicker
              v-else-if="args.type === 'DatePicker'"
              :placeholder="args.placeholder"
              :disabled="args.disabled"
            />
          </template>
        </FormItem>
      </div>
    `})},n={name:"콤보박스",render:()=>({components:{ComboboxTag:G},setup(){const s=v("");return{sampleItems:N,category:s}},template:`
      <div class="w-80">
        <FormItem label="콤보박스">
          <template #input-item>
            <ComboboxTag :list-item="sampleItems" placeholder="옵션을 선택하세요" v-model:selectValueSingle="category" />
          </template>
        </FormItem>
      </div>
    `})},m={name:"주소검색",render:()=>({components:{FormAddr:b},template:`
      <div class="w-160">
        <FormAddr />
      </div>
    `})},p={name:"인풋+버튼형",render:()=>({components:{InputBase:g},setup(){return{userId:v("")}},template:`
      <div class="w-80">
        <FormItem label="인풋+버튼형">
          <template #input-item>
            <div class="flex gap-2">
              <InputBase v-model="userId" placeholder="아이디를 입력해 주세요" />
              <UiButton variant="secondary">중복확인</UiButton>
            </div>
          </template>
        </FormItem>
      </div>
    `})};var I,h,F;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '기본',
  render: args => ({
    components: {
      ComboboxTag,
      DatePicker
    },
    setup() {
      const value = ref('');
      return {
        args,
        value,
        sampleItems
      };
    },
    template: \`
      <div class="w-80">
        <FormItem
          v-if="args.type === 'text'"
          v-model="value"
          :label="args.showLabel ? args.label : undefined"
          :required="args.required"
          :placeholder="args.placeholder"
          :validate-text="args.validateText"
          :aria-invalid="args.ariaInvalid"
          :disabled="args.disabled"
          :readonly="args.readonly"
        />
        <FormItem
          v-else
          :label="args.showLabel ? args.label : undefined"
          :required="args.required"
          :validate-text="args.validateText"
          :aria-invalid="args.ariaInvalid"
        >
          <template #input-item>
            <ComboboxTag
              v-if="args.type === 'comboboxTag'"
              :list-item="sampleItems"
              :placeholder="args.placeholder"
              :disabled="args.disabled"
            />
            <UiCheckbox
              v-else-if="args.type === 'Checkbox'"
              :disabled="args.disabled"
            />
            <UiRadioGroup
              v-else-if="args.type === 'RadioGroup'"
              class="flex flex-col gap-2"
              :disabled="args.disabled"
            >
              <div v-for="item in sampleItems" :key="item.value" class="flex items-center gap-2">
                <UiRadioGroupItem :id="'r' + item.value" :value="item.value" />
                <UiLabel :for="'r' + item.value">{{ item.label }}</UiLabel>
              </div>
            </UiRadioGroup>
            <DatePicker
              v-else-if="args.type === 'DatePicker'"
              :placeholder="args.placeholder"
              :disabled="args.disabled"
            />
          </template>
        </FormItem>
      </div>
    \`
  })
}`,...(F=(h=i.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var k,q,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '콤보박스',
  render: () => ({
    components: {
      ComboboxTag
    },
    setup() {
      const category = ref('');
      return {
        sampleItems,
        category
      };
    },
    template: \`
      <div class="w-80">
        <FormItem label="콤보박스">
          <template #input-item>
            <ComboboxTag :list-item="sampleItems" placeholder="옵션을 선택하세요" v-model:selectValueSingle="category" />
          </template>
        </FormItem>
      </div>
    \`
  })
}`,...(T=(q=n.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var C,U,w;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '주소검색',
  render: () => ({
    components: {
      FormAddr
    },
    template: \`
      <div class="w-160">
        <FormAddr />
      </div>
    \`
  })
}`,...(w=(U=m.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var B,A,L;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '인풋+버튼형',
  render: () => ({
    components: {
      InputBase
    },
    setup() {
      const userId = ref('');
      return {
        userId
      };
    },
    template: \`
      <div class="w-80">
        <FormItem label="인풋+버튼형">
          <template #input-item>
            <div class="flex gap-2">
              <InputBase v-model="userId" placeholder="아이디를 입력해 주세요" />
              <UiButton variant="secondary">중복확인</UiButton>
            </div>
          </template>
        </FormItem>
      </div>
    \`
  })
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const Ie=["Default","FrequentCombobox","FrequentAddress","FrequentInputButton"];export{i as Default,m as FrequentAddress,n as FrequentCombobox,p as FrequentInputButton,Ie as __namedExportsOrder,ye as default};
