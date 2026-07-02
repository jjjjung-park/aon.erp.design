<template>
<div class="overflow-auto p-8">
  <h1>atomic : 단일 element</h1>
  <section>
    <h1>progress</h1>
    <UiProgress :model-value="progress" class=""/>
  </section>
  <section>
    <h2>button</h2>
    <table class="w-full">
      <thead class="bg-slate-300">
      <tr>
        <th></th>
        <th>sm size</th>
        <th>default size</th>
        <th>lg size</th>
        <th>icon size</th>
        <th>icon-sm size</th>
        <th>icon-lg size</th>
        <th>disabled</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="bg-slate-100">primary:level1 버튼</th>
        <td>
          <UiButton size="sm">default</UiButton>
          <UiButton size="sm">
            <LucidePlus/>
            default
          </UiButton>
        </td>
        <td>
          <UiButton>default</UiButton>
          <UiButton>
            <LucidePlus/>
            default
          </UiButton>
        </td>
        <td>
          <UiButton size="lg">default</UiButton>
          <UiButton size="lg">
            <LucidePlus/>
            default
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-sm">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-lg">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton disabled>disabled</UiButton>
        </td>
      </tr>
      <tr>
        <th class="bg-slate-100">secondary:level2 버튼</th>
        <td>
          <UiButton size="sm" variant="secondary">secondary</UiButton>
          <UiButton size="sm" variant="secondary">
            <LucidePlus/>
            secondary
          </UiButton>
        </td>
        <td>
          <UiButton variant="secondary">secondary</UiButton>
          <UiButton variant="secondary">
            <LucidePlus/>
            default
          </UiButton>
        </td>
        <td>
          <UiButton size="lg" variant="secondary">default</UiButton>
          <UiButton size="lg" variant="secondary">
            <LucidePlus/>
            default
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-sm" variant="secondary">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon" variant="secondary">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-lg" variant="secondary">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton variant="secondary" disabled>disabled</UiButton>
        </td>
      </tr>

      <tr>
        <th class="bg-slate-100">outline:level3</th>
        <td>
          <UiButton size="sm" variant="outline">outline</UiButton>
        </td>
        <td>
          <UiButton variant="outline">outline</UiButton>
        </td>
        <td>
          <UiButton size="lg" variant="outline">outline</UiButton>
          <UiButton size="lg" variant="outline">
            <LucideSearch/>
            outline
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-sm" variant="outline">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon" variant="outline">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-lg" variant="outline">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton variant="outline" disabled>disabled</UiButton>
        </td>
      </tr>
      <tr>
        <th class="bg-slate-100">ghost:아이콘 버튼</th>
        <td>
          <UiButton size="sm" variant="ghost">ghost</UiButton>
        </td>
        <td>
          <UiButton variant="ghost">ghost</UiButton>
        </td>
        <td>
          <UiButton size="lg" variant="ghost">ghost</UiButton>
          <UiButton size="lg" variant="ghost">
            <LucideSearch/>
            ghost
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-sm" variant="ghost">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon" variant="ghost">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-lg" variant="ghost">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton variant="ghost" disabled>default</UiButton>
        </td>
      </tr>
      <tr>
        <th class="bg-slate-100">link:글자 버튼(링크)</th>
        <td>
          <UiButton size="sm" variant="link">link</UiButton>
        </td>
        <td>
          <UiButton variant="link">link</UiButton>
        </td>
        <td>
          <UiButton size="lg" variant="link">link</UiButton>
          <UiButton size="lg" variant="link">
            <LucideSearch/>
            link
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-sm" variant="link">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon" variant="link">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-lg" variant="link">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton variant="link" disabled>disabled</UiButton>
        </td>
      </tr>
      <tr>
        <th class="bg-slate-100">destructive:삭제 버튼</th>
        <td>
          <UiButton size="sm" variant="destructive">destructive</UiButton>
        </td>
        <td>
          <UiButton variant="destructive">destructive</UiButton>
        </td>
        <td>
          <UiButton size="lg" variant="destructive">destructive</UiButton>
          <UiButton size="lg" variant="destructive">
            <LucideSearch/>
            destructive
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-sm" variant="destructive">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon" variant="destructive">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton size="icon-lg" variant="destructive">
            <LucideSearch/>
          </UiButton>
        </td>
        <td>
          <UiButton variant="destructive" disabled>disabled</UiButton>
        </td>
      </tr>

      </tbody>
    </table>
  </section>

  <section>
    <h1>input</h1>
    <table class="w-full">
      <thead class="bg-slate-300">
      <tr>
        <th>xs</th>
        <th>sm</th>
        <th>md</th>
        <th>error</th>
        <th>disabled</th>
        <th>textarea</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <UiInput placeholder="placeholder"/>
        </td>
        <td>
          <UiInput placeholder="placeholder"/>
        </td>
        <td>
          <UiInput placeholder="placeholder"/>
        </td>
        <td>
          <UiInput placeholder="error input" aria-invalid="true"/>
        </td>
        <td>
          <UiInput placeholder="disabled" disabled/>
        </td>
        <td>
          <UiTextarea placeholder="placeholder"/>
        </td>
      </tr>
      <tr>
        <th class="bg-slate-300" colspan="5">label</th>
      </tr>
      <tr>
        <th class="bg-slate-100" colspan="2">vertical</th>
        <th class="bg-slate-100" colspan="3">horizontal</th>
      </tr>
      <tr>
        <td colspan="2">
          <div class="flex flex-col gap-1">
            <UiLabel class="text-xs" for="email-1">Email</UiLabel>
            <UiInput placeholder="placeholder" id="email-1"/>
          </div>
        </td>
        <td colspan="3">
          <div class="flex gap-2">
            <UiLabel class="text-xs" for="email-1">Email</UiLabel>
            <UiInput placeholder="placeholder" id="email-1"/>
          </div>
        </td>
      </tr>
      <tr>
        <th class="bg-slate-300" colspan="5">validation</th>
      </tr>
      <tr>
        <th class="bg-slate-100" colspan="2">default</th>
        <th class="bg-slate-100" colspan="3">error</th>
      </tr>
      <tr>
        <td class="" colspan="2">
          <div class="flex flex-col text-left gap-1">
            <UiInput placeholder="placeholder" id="비밀번호를 입력해 주세요"
                     aria-invalid="false"></UiInput>
            <p class="text-xs text-muted">대문자,숫자,특수문자 조합 6자리</p>
          </div>
        </td>
        <td class="" colspan="3">
          <div class="flex flex-col text-left gap-1">
            <UiInput placeholder="placeholder" id="비밀번호를 입력해 주세요" aria-invalid="true"></UiInput>
            <p class="text-xs text-danger">대문자,숫자,특수문자 조합 6자리</p>
          </div>
        </td>
      </tr>
      <tr>
        <th></th>
        <th class="bg-slate-300" colspan="2">text button</th>
        <th class="bg-slate-300" colspan="2">icon button</th>
      </tr>
      <tr>
        <th class="bg-slate-200">input+button</th>
        <td colspan="2">
          <div class="flex gap-1.5">
            <UiInput placeholder="placeholder" id="email-1"/>
            <UiButton>button</UiButton>
          </div>
        </td>
        <td colspan="2">
          <div class="flex gap-1.5">
            <UiInput placeholder="placeholder" id="email-1"/>
            <UiButton size="icon">
              <LucideSearch/>
            </UiButton>
          </div>
        </td>

      </tr>

      </tbody>
    </table>
  </section>
  <section>
    <h1>체크박스, 라디오</h1>
    <table class="w-full">
      <thead class="bg-slate-300">
      <tr>
        <th>checkbox</th>
        <th>radio</th>
        <th>switch</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <div class="flex items-center space-x-2">
            <div class="h-10 flex items-center space-x-2">
                <UiCheckbox id="terms" v-model="checked"/>
                <UiLabel for="terms">
                  Accept terms and conditions
              </UiLabel>
            </div>
            <UiCheckbox id="terms" disabled v-model="checked"/>
            <UiLabel for="terms">
              Accept terms and conditions
            </UiLabel>

          </div>
        </td>
        <td>
          <UiRadioGroup default-value="checked">
            <div class="flex items-center space-x-2">
              <UiRadioGroupItem id="r1" value="disabled" disabled/>
              <UiLabel for="r1">disabled</UiLabel>
            </div>
            <div class="flex items-center space-x-2">
              <UiRadioGroupItem id="r2" value="checked"/>
              <UiLabel for="r2">checked</UiLabel>
            </div>
            <div class="flex items-center space-x-2">
              <UiRadioGroupItem id="r3" value="default"/>
              <UiLabel for="r3">default</UiLabel>
            </div>
          </UiRadioGroup>
        </td>
        <td>
          <UiSwitch id="airplane-mode"/>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h1>image</h1>
    <table class="w-full">
      <thead class="bg-slate-300">
      <tr>
        <th></th>
        <th>16:9</th>
        <th>4:5</th>
        <th>5:4</th>
        <th>1:1</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="bg-slate-100">square</th>
        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="w-24 object-cover border-1 border-pink-400 aspect-video"/>
        </td>

        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="w-24 aspect-[4/5] object-cover border-1 border-pink-400"/>
        </td>
        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="w-24 aspect-[5/4] object-cover border-1 border-pink-400"/>
        </td>
        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="w-24 aspect-square object-cover border-1 border-pink-400"/>
        </td>
      </tr>
      <tr>
        <th class="bg-slate-100">circle</th>
        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="rounded-full size-20 object-cover border-1 border-pink-400"/>
        </td>
        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="rounded-full size-10 object-cover border-1 border-pink-400"/>
        </td>
        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="rounded-full size-8 object-cover border-1 border-pink-400"/>
        </td>
        <td>
          <img src="@/assets/images/logo.svg" alt="logo"
               class="rounded-full size-6 object-cover border-1 border-pink-400"/>
        </td>
      </tr>

      </tbody>
    </table>
  </section>
  <section>
    <h1>badge</h1>
    <table class="w-full">
      <thead class="bg-slate-300">
      <tr>
        <th></th>
        <th>default</th>
        <th>secondary</th>
        <th>outline</th>
        <th>destructive</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="bg-slate-100">기본</th>
        <td>
          <UiBadge>default</UiBadge>
        </td>
        <td>
          <UiBadge variant="secondary" class="font-">secondary</UiBadge>
        </td>
        <td>
          <UiBadge variant="outline">outline</UiBadge>
        </td>
        <td>

        </td>
      </tr>
      <tr class="bg-slate-300">
        <th></th>
        <th>progress</th>
        <th>accept</th>
        <th>reject</th>
        <th>hold</th>
        <th>info</th>
      </tr>
      <tr>
        <th class="bg-slate-100">status</th>
        <td>
          <UiBadge variant="process">진행</UiBadge>
        </td>
        <td>
          <UiBadge variant="accept">승인</UiBadge>
        </td>
        <td>
          <UiBadge variant="reject">반려</UiBadge>
        </td>
        <td>
          <UiBadge variant="hold">대기</UiBadge>
        </td>
        <td>
          <UiBadge variant="info">정보</UiBadge>
        </td>
      </tr>
      <tr class="bg-slate-300">
        <th></th>
        <th>1자리</th>
        <th>3자리이상</th>
        <th>알림</th>
        <th>small</th>
      </tr>
      <tr>
        <th class="bg-slate-100">count</th>
        <td>
          <UiBadge variant="count" tone="default" size="sm">1</UiBadge>
        </td>
        <td>
          <UiBadge variant="count" tone="important" size="sm"><LucideThumbsDown/>999+</UiBadge>
        </td>
        <td>
          <UiBadge variant="destructive" size="dot"></UiBadge>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h1>tag</h1>
    <table class="w-full">
      <thead class="bg-slate-300">
      <tr>
        <th></th>
        <th>default</th>
        <th>secondary</th>
        <th>outline</th>
        <th>info</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="bg-slate-100">tag</th>
        <td>
          <Tags>default</Tags>
        </td>
        <td>
          <Tags variant="secondary">secondary</Tags>
        </td>
        <td>
          <Tags variant="outline">outline</Tags>
        </td>
        <td>
          <Tags variant="info">outline</Tags>

        </td>
      </tr>
      <tr>
        <th class="bg-slate-100">chips</th>
        <td>
          <Tags type="chip" closeable>default</Tags>
        </td>
        <td>
          <Tags type="chip" variant="secondary" closeable>secondary</Tags>
        </td>
        <td>
          <Tags type="chip" variant="outline" closeable>outline</Tags>
        </td>
        <td>
          <Tags type="chip" variant="info" closeable>outline</Tags>

        </td>
      </tr>

      </tbody>
    </table>
  </section>


</div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import Tags from "@/markup/components/tag/Tags.vue";

const checked = ref<boolean>(true);

const progress = ref(13)
onMounted(() => {
  const timer = setTimeout(() => {
    progress.value = 100
  }, 1000)
  return () => clearTimeout(timer)
})
</script>
<style scoped>
table{
  width:100%;
}
td{
  padding: 10px;
  border: 1px solid #ccc;
}
section{
  margin-bottom: 20px;
}
</style>

