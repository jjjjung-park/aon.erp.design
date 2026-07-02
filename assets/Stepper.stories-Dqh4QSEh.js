const a={title:"UI 패턴/Stepper",tags:["autodocs","unused"],parameters:{layout:"centered"},argTypes:{step:{control:"radio",options:[1,2,3],description:"현재 단계"}},args:{step:2}},i=[{title:"기본 정보",description:"상품명, 카테고리"},{title:"상세 정보",description:"옵션, 가격 설정"},{title:"완료",description:"등록 확인"}],e={name:"Stepper — 단계별",render:r=>({setup(){return{args:r,steps:i}},template:`
      <UiStepper :model-value="args.step" class="flex w-80 items-start gap-2">
        <UiStepperItem
          v-for="step in steps"
          :key="step.title"
          :step="steps.indexOf(step) + 1"
          class="relative flex w-full flex-col items-center justify-center"
        >
          <UiStepperTrigger as-child>
            <UiButton
              variant="outline"
              size="icon"
              class="z-10 rounded-full shrink-0"
              :class="[
                steps.indexOf(step) + 1 < args.step ? 'bg-primary text-neutral border-primary' : '',
                steps.indexOf(step) + 1 === args.step ? 'border-primary text-primary' : '',
              ]"
            >
              <LucideCheck v-if="steps.indexOf(step) + 1 < args.step" class="size-4" />
              <span v-else>{{ steps.indexOf(step) + 1 }}</span>
            </UiButton>
          </UiStepperTrigger>
          <UiStepperSeparator
            v-if="steps.indexOf(step) !== steps.length - 1"
            class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-[2px] shrink-0 rounded-full bg-border group-data-[state=completed]:bg-primary"
          />
          <div class="mt-2 flex flex-col items-center text-center">
            <UiStepperTitle class="text-sm font-bold" :class="steps.indexOf(step) + 1 === args.step ? 'text-default' : 'text-muted'">
              {{ step.title }}
            </UiStepperTitle>
            <UiStepperDescription class="caption text-muted">{{ step.description }}</UiStepperDescription>
          </div>
        </UiStepperItem>
      </UiStepper>
    `})};var t,s,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Stepper — 단계별',
  render: args => ({
    setup() {
      return {
        args,
        steps
      };
    },
    template: \`
      <UiStepper :model-value="args.step" class="flex w-80 items-start gap-2">
        <UiStepperItem
          v-for="step in steps"
          :key="step.title"
          :step="steps.indexOf(step) + 1"
          class="relative flex w-full flex-col items-center justify-center"
        >
          <UiStepperTrigger as-child>
            <UiButton
              variant="outline"
              size="icon"
              class="z-10 rounded-full shrink-0"
              :class="[
                steps.indexOf(step) + 1 < args.step ? 'bg-primary text-neutral border-primary' : '',
                steps.indexOf(step) + 1 === args.step ? 'border-primary text-primary' : '',
              ]"
            >
              <LucideCheck v-if="steps.indexOf(step) + 1 < args.step" class="size-4" />
              <span v-else>{{ steps.indexOf(step) + 1 }}</span>
            </UiButton>
          </UiStepperTrigger>
          <UiStepperSeparator
            v-if="steps.indexOf(step) !== steps.length - 1"
            class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-[2px] shrink-0 rounded-full bg-border group-data-[state=completed]:bg-primary"
          />
          <div class="mt-2 flex flex-col items-center text-center">
            <UiStepperTitle class="text-sm font-bold" :class="steps.indexOf(step) + 1 === args.step ? 'text-default' : 'text-muted'">
              {{ step.title }}
            </UiStepperTitle>
            <UiStepperDescription class="caption text-muted">{{ step.description }}</UiStepperDescription>
          </div>
        </UiStepperItem>
      </UiStepper>
    \`
  })
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,a as default};
