<template>
  <ModalBase title="주소 검색" class="min-h-120" :footer="false">
    <template #body>
    <!-- 클래스 추가 :  sticky top-0 pb-6 bg-background -mx-6 px-6    -->
      <div class="sticky top-0 pb-6 bg-background -mx-6 px-6">
        <InputBase class="gap-1" placeholder="지번, 도로명, 건물명 입력 후 엔터">
          <template #prefix>
            <LucideSearchIcon/>
          </template>
        </InputBase>
      </div>
      <!--   검색전   -->
<!--      <div class="grid gap-1 ">
        <p class="title__bold flex items-center gap-2"><LucideSearchCheck class="size-4 text-primary"/>아래와 같은 방법으로 입력하여 주세요.</p>
        <ul class="p-2 list-disc grid gap-1">
          <li class="ml-6 pl-1 h-6">도로명 + 건물번호<span class="caption text-primary ml-1">예) 판교역로 166, 제주 첨단로 242</span></li>
          <li class="ml-6 pl-1 h-6">지역명(동/리) + 번지<span class="caption text-primary ml-1">예) 등촌동 639-11</span></li>
          <li class="ml-6 pl-1 h-6">지역명(동/리) + 건물명(아파트명)<span class="caption text-primary ml-1">예) 역삼동 래미안 아파트</span></li>
        </ul>
      </div>-->
      <!--   검색 결과 없음  -->
<!--      <div class="grid gap-1">
        <p class="title__bold flex items-center gap-2"><LucideSearchAlert class="size-4 text-primary"/>검색 결과가 없습니다.</p>
        <span class="text-muted">정확한 주소를 입력해 주세요.</span>
        <ul class="p-2 list-disc grid gap-1">
           <li class="ml-6 pl-1 h-6">도로명 + 건물번호<span class="caption text-primary ml-1">예) 판교역로 166, 제주 첨단로 242</span></li>
          <li class="ml-6 pl-1 h-6">지역명(동/리) + 번지<span class="caption text-primary ml-1">예) 등촌동 639-11</span></li>
          <li class="ml-6 pl-1 h-6">지역명(동/리) + 건물명(아파트명)<span class="caption text-primary ml-1">예) 역삼동 래미안 아파트</span></li>
        </ul>
      </div>-->

    <!--  검색 결과    -->
      <!--   결과 너무 많음     -->
<!--      <div class="grid gap-1">
        <p class="title__bold flex items-center gap-2"><LucideSearchAlert class="size-4 text-primary"/>검색 결과가 많습니다.</p>
        <span class="text-muted ">정확한 결과를 보려면 도로명+건물번호, 지역명+지번, 지역명+건물명(아파트명)을 검색해 주세요</span>
      </div>
      <UiSeparator orientation="horizontal" />-->
      <!--  // 결과 너무 많음     -->


      <!--  검색 결과 : 정상   -->
      <!--  클래스 제거 : my-6   -->
      <div class="">
        <p class="font-bold">총 100건</p>
        <ul>
          <li class="addr-list">
            <div class="border-b-1 border-border mx-6 pt-4 pb-6  grid gap-3 ">
              <p class="title__bold text-primary">04778</p>
              <div class="grid gap-2">
                <dl class="flex items-start gap-3">
                  <!--   도로명, 지번 구분 badge -> tags로 컴포넌트 변경     -->
                  <dt class="addr-list__type"><Tags variant="outline">도로명</Tags></dt>
                  <dd class="">
                    <ul>
                      <li class="addr-list__item ">
                        서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학)
                      </li>
                    </ul>
                    <p></p>
                  </dd>
                </dl>
                <dl class="flex items-start gap-3">
                  <dt class="addr-list__type"><Tags variant="outline">지번</Tags></dt>
                  <dd class="">
                    <p class="caption text-muted mb-2">아래 목록에서 정확한 지번 주소를 선택 해 주세요.<br>
                      잘 모르시는 경우 ‘선택 안함'을 클릭 해 주세요.</p>
                    <ul class="grid gap-2">
                      <li class="addr-list__item">
                        지번 주소 선택 안함
                      </li>
                      <li class="addr-list__item">
                        서울특별시 성동구 성수동 1가 000-000
                      </li>
                      <li class="addr-list__item">
                        서울특별시 성동구 성수동 1가 000-000
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
          <li class="addr-list" v-for="i in 10">
            <div class="border-b-1 border-border mx-6 pt-4 pb-6  grid gap-3 ">
              <p class="title__bold text-primary">04778</p>
              <div class="grid gap-2">
                <dl class="flex items-start gap-3">
                  <dt class="addr-list__type"><Tags variant="outline">도로명</Tags></dt>
                  <dd class="">
                    <ul>
                      <li class="addr-list__item">
                        서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학)
                      </li>
                    </ul>
                    <p></p>
                  </dd>
                </dl>
                <dl class="flex items-start gap-3">
                  <dt class="addr-list__type"><Tags variant="outline">지번</Tags></dt>
                  <dd class="">
                    <ul class="grid gap-2">
                      <li class="addr-list__item">
                        서울특별시 성동구 성수동 1가 000-000
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </li>

        </ul>
        <!--   클래스 추가 : sticky bottom-0 bg-background    -->
        <TablePagination class="py-3 sticky bottom-0 bg-background"/>
      </div>


        <!--   스켈레톤   -->
<!--      <div>
        <ul class="">
          <li class="addr-list" v-for="i in 3">
            <div class="border-b-1 border-border mx-6 pt-4 pb-6  grid gap-3">
              <UiSkeleton class="h-5 w-20" />
              <UiSkeleton class="h-5 w-full" />
              <UiSkeleton class="h-5 w-2/3" />
            </div>
          </li>
        </ul>
      </div>-->
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from "@/markup/components/modal/ModalBase.vue";
import {InputBase} from "@/markup/components/inputs";
import TablePagination from "@/markup/components/pagination/TablePagination.vue";
import Tags from "@/markup/components/tag/Tags.vue";


</script>

<style scoped>

</style>
