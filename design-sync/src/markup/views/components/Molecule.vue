<template>
  <div class="overflow-auto p-8">
    <h1>molecule</h1>
    <section>
      <h2>input group</h2>
      <table>
        <thead class="bg-slate-300">
        <tr>
          <th class="bg-slate-300"></th>
          <th class="bg-slate-300">default:텍스트 삭제 버튼</th>
          <th class="bg-slate-300">prefix</th>
          <th class="bg-slate-300">surffix</th>
          <th class="bg-slate-300">disable</th>
          <th class="bg-slate-300">password</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="bg-slate-200">input group</th>
          <td>
            <InputBase/>
          </td>
          <td>
            <InputBase>
              <template #prefix>
                <LucideSearch class="mr-1"/>
              </template>
            </InputBase>
          </td>
          <td>
            <InputBase>
              <template #suffix>
                <UiInputGroupText>.com</UiInputGroupText>
              </template>
            </InputBase>

          </td>
          <td>
            <InputBase :disabled="true">
              <template #suffix>
                <UiInputGroupButton @click="" class="">
                  <LucideCopy/>
                </UiInputGroupButton>
              </template>
            </InputBase>
          </td>
          <td>
            <InputPassword/>
          </td>
        </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Alert</h2>
      <UiAlert class="mb-2">
        <UiAlertTitle>
          일반 alert 배너
        </UiAlertTitle>
      </UiAlert>
      <UiAlert variant="warning" class="mb-2">

        <div class="grid">
          <UiAlertTitle>
            수정이 허용되지 않는 코드가 수정되었습니다.
          </UiAlertTitle>
          <UiAlertDescription></UiAlertDescription>
        </div>

        <UiButton variant="link" size="sm" class=" ml-auto hover:text-current h-auto" @click="alertShow = true">취소</UiButton>
      </UiAlert>
      <UiAlert variant="danger" class="mb-2">
        <div class="grid">
          <UiAlertTitle>
            수정이 허용되지 않는 코드가 수정되었습니다.
          </UiAlertTitle>
        </div>
<!--        <UiButton variant="link" size="sm" class="text-default-text ml-auto h-auto">바로가기</UiButton>-->
      </UiAlert>
      <UiAlert v-if="alertShow" variant="success" class="mb-2" dismiss @close="alertShow = false">
        <UiAlertTitle>
          닫기 버튼 있는 타입
        </UiAlertTitle>
      </UiAlert>
    </section>
    <section>
      <h2>combobox</h2>
      <table>
        <thead class="bg-slate-300">
          <tr>
            <th>filter + tag로 Ui 전부 통일</th>
            <th>multiple</th>
            <th>readonly</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <ComboboxTag class="w-[200px]" single :listItem="virtualList"/>
          </td>
          <td>
            <ComboboxTag multiple class="w-fit" :list-item="normalList"/>

          </td>
          <td>
            <ComboboxDisabled multiple readonly class="w-fit" :list-item="normalList"/>

          </td>
        </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>datePicker</h2>
      <table>
        <thead>
        <tr>
          <th class="bg-slate-300">default</th>
          <th class="bg-slate-300">range</th>
          <th class="bg-slate-300">validate</th>
        </tr>
        </thead>
        <tbody>
        <tr>

          <td>
            <div>
              <DatePicker :class="'!w-50' " v-model="value" placeholder="날짜를 선택해 주세요"/>
            </div>
          </td>
          <td>
            <DateRange class="w-50" />
          </td>
          <td>
            <div>
              <FormItem label="날짜입력" required validate-text="필수 입력값입니다">
                <template #input-item>
                  <DatePicker :class="'!w-50'" :aria-invalid="true" v-model="value" placeholder="날짜를 선택해 주세요"/>
                </template>
              </FormItem>
            </div>

          </td>
        </tr>

        </tbody>
      </table>

    </section>


    <section>
      <h1>tabs</h1>
      <div class="my-5">
        <h2>line</h2>
        <LineTabs :tab-list="[{label:'tab1', value:'tab1', active:true}, {label:'tab2', value:'tab2', active:false}]" />
        <LineTabs :tab-list="[{label:'tab1', value:'tab1', active:true}, {label:'tab2', value:'tab2', active:false}]" class="data-[state=true]:after:bg-border mt-1"/>
      </div>
      <div class="my-5">
        <h2>box-tabs</h2>
        <BoxTabs/>
      </div>
      <div class="my-5">
        <h2>page-tabs</h2>
        <PageTabs/>
      </div>

    </section>

    <section class="">
      <h2>upload</h2>
      <div class="flex gap-20">
        <div>
          <h3 class="title__bold">기본</h3>
          <InputFile/>
        </div>
        <div class="w-90">
          <h3 class="title__bold">슬롯</h3>
          <InputFile>
            <p class="flex items-center gap-1 font-bold">
              <LucidePaperclip :size="16"/>
              파일 첨부
            </p>
            <p class="text-secondary caption text-center px-6">첨부할 파일을 드래그 또는 클릭하여 추가<br/>(300px, 300mb)</p>
            <span class="text-secondary caption text-center">(기존행의 내용은 수정, 신규행의 내용은 신규 등록으로 진행됩니다.)</span>
          </InputFile>
        </div>
      </div>


    </section>

    <section>
      <h2>loading</h2>
      <UiButton @click="loading=true" variant="outline">loading</UiButton>
      <LoadingFull v-if="loading">
        <template #loading-text>
          <div class="font-bold">데이터를 불러오는 중입니다</div>
          <UiButton @click="loading=false" variant="outline">닫기</UiButton>
        </template>
      </LoadingFull>
    </section>

  </div>


</template>
<script setup lang="ts">
import {InputBase, InputPassword} from "@/markup/components/inputs";
import {LineTabs,BoxTabs, PageTabs } from "@/markup/components/tabs";
import ComboboxTag from "@/markup/components/select/ComboboxTag.vue";
import DateRange from "@/markup/components/datePicker/DateRange.vue";
import DatePicker from "@/markup/components/datePicker/DatePicker.vue";
import InputFile from "@/markup/components/inputs/InputFile.vue";
import LoadingFull from "@/markup/components/loading/LoadingFull.vue";
import ComboboxDisabled from "@/markup/components/select/ComboboxDisabled.vue";
import FormItem from "@/markup/components/form/FormItem.vue";

const virtualList = Array.from({ length: 620 }, (_, i) => ({
  value: `v-${i}`,
  label: `v-${i}`,
}))
const normalList = [
  { value: 'next.js', label: 'Next.js', disabled: true },
  { value: 'sveltekit', label: 'SvelteKit', disabled: false },
  { value: 'nuxt', label: 'Nuxt', disabled: false },
  { value: 'remix', label: 'Remix', disabled: false },
  { value: 'astro', label: 'Astro', disabled: false },

]
const loading = ref<boolean>(false)
const value = ref<string>('')
const alertShow = ref<boolean>(true)
</script>
<style scoped>
table{
  width:100%
}
td{
  padding:12px;
  border:1px solid #ddd;
}
section{
  margin-bottom: 20px
}
h2{
  margin:12px 0;
}
</style>

