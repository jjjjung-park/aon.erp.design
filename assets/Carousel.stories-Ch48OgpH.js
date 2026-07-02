import{cn as p,bV as l}from"./iframe-4xPXPRuq.js";import"./preload-helper-FI0fEOG2.js";const f={title:"UI 패턴/Carousel",tags:["autodocs","done"],parameters:{layout:"centered"},argTypes:{thumbnail:{control:"boolean",description:"썸네일 연동 표시"}},args:{thumbnail:!1}},i={name:"Carousel — 인터랙티브",render:c=>({setup(){const e=l(),s=l(),t=l(0),d=l([1,2,3,4,5]);function r(){!e.value||!s.value||(t.value=e.value.selectedScrollSnap(),s.value.scrollTo(e.value.selectedScrollSnap()))}function m(a){e.value&&e.value.scrollTo(a)}return p(e,a=>{a&&(r(),a.on("select",r),a.on("reInit",r))}),{args:c,emblaMainApi:e,emblaThumbnailApi:s,selectedIndex:t,imagesList:d,onThumbClick:m}},template:`
      <div class="w-80 flex flex-col gap-2">
        <!-- 메인 뷰 -->
        <UiCarousel class="relative w-full" @init-api="(val) => emblaMainApi = val">
          <UiCarouselContent>
            <UiCarouselItem v-for="(val, index) in imagesList" :key="index">
              <div class="aspect-video bg-surface-muted flex items-center justify-center rounded-sm">
                <span class="text-2xl font-bold text-muted">{{ index + 1 }}</span>
              </div>
            </UiCarouselItem>
          </UiCarouselContent>
          <UiCarouselPrevious variant="ghost" size="icon-lg" class="absolute top-1/2 -translate-y-1/2 left-3 bg-surface-neutral/50" />
          <UiCarouselNext variant="ghost" size="icon-lg" class="absolute top-1/2 -translate-y-1/2 right-3 bg-surface-neutral/50" />
        </UiCarousel>

        <!-- 썸네일 스트립 -->
        <div v-if="args.thumbnail" class="p-2 bg-surface-muted border border-border border-dashed rounded-sm relative">
          <UiCarousel class="relative w-full" @init-api="(val) => emblaThumbnailApi = val">
            <UiCarouselContent class="flex gap-1 ml-0">
              <UiCarouselItem
                v-for="(val, index) in imagesList"
                :key="index"
                class="p-1 basis-1/4 cursor-pointer"
                @click="onThumbClick(index)"
              >
                <div :class="['aspect-video border border-border flex items-center justify-center overflow-hidden rounded-sm bg-surface-neutral',
                              index === selectedIndex ? 'ring-1 ring-primary !border-primary' : '']">
                  <span class="text-xs text-muted">{{ index + 1 }}</span>
                </div>
              </UiCarouselItem>
            </UiCarouselContent>
          </UiCarousel>
        </div>
      </div>
    `})};var n,o,u;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Carousel — 인터랙티브',
  render: args => ({
    setup() {
      const emblaMainApi = ref<CarouselApi>();
      const emblaThumbnailApi = ref<CarouselApi>();
      const selectedIndex = ref(0);
      const imagesList = ref<string[]>([1, 2, 3, 4, 5]);
      function onSelect() {
        if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
        selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
        emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
      }
      function onThumbClick(index: number) {
        if (!emblaMainApi.value) return;
        emblaMainApi.value.scrollTo(index);
      }
      watchOnce(emblaMainApi, api => {
        if (!api) return;
        onSelect();
        api.on('select', onSelect);
        api.on('reInit', onSelect);
      });
      return {
        args,
        emblaMainApi,
        emblaThumbnailApi,
        selectedIndex,
        imagesList,
        onThumbClick
      };
    },
    template: \`
      <div class="w-80 flex flex-col gap-2">
        <!-- 메인 뷰 -->
        <UiCarousel class="relative w-full" @init-api="(val) => emblaMainApi = val">
          <UiCarouselContent>
            <UiCarouselItem v-for="(val, index) in imagesList" :key="index">
              <div class="aspect-video bg-surface-muted flex items-center justify-center rounded-sm">
                <span class="text-2xl font-bold text-muted">{{ index + 1 }}</span>
              </div>
            </UiCarouselItem>
          </UiCarouselContent>
          <UiCarouselPrevious variant="ghost" size="icon-lg" class="absolute top-1/2 -translate-y-1/2 left-3 bg-surface-neutral/50" />
          <UiCarouselNext variant="ghost" size="icon-lg" class="absolute top-1/2 -translate-y-1/2 right-3 bg-surface-neutral/50" />
        </UiCarousel>

        <!-- 썸네일 스트립 -->
        <div v-if="args.thumbnail" class="p-2 bg-surface-muted border border-border border-dashed rounded-sm relative">
          <UiCarousel class="relative w-full" @init-api="(val) => emblaThumbnailApi = val">
            <UiCarouselContent class="flex gap-1 ml-0">
              <UiCarouselItem
                v-for="(val, index) in imagesList"
                :key="index"
                class="p-1 basis-1/4 cursor-pointer"
                @click="onThumbClick(index)"
              >
                <div :class="['aspect-video border border-border flex items-center justify-center overflow-hidden rounded-sm bg-surface-neutral',
                              index === selectedIndex ? 'ring-1 ring-primary !border-primary' : '']">
                  <span class="text-xs text-muted">{{ index + 1 }}</span>
                </div>
              </UiCarouselItem>
            </UiCarouselContent>
          </UiCarousel>
        </div>
      </div>
    \`
  })
}`,...(u=(o=i.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const x=["Default"];export{i as Default,x as __namedExportsOrder,f as default};
