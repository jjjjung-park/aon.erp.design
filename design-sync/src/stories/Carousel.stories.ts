import type { Meta, StoryObj } from '@storybook/vue3'
import type { CarouselApi } from '@/ui/carousel'
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'

const meta: Meta = {
  title: 'UI 패턴/Carousel',
  tags: ['autodocs', 'done'],
  parameters: { layout: 'centered' },
  argTypes: {
    thumbnail: { control: 'boolean', description: '썸네일 연동 표시' },
  },
  args: {
    thumbnail: false,
  },
}
export default meta
type Story = StoryObj<{ thumbnail: boolean }>

export const Default: Story = {
  name: 'Carousel — 인터랙티브',
  render: (args) => ({
    setup() {
      const emblaMainApi = ref<CarouselApi>()
      const emblaThumbnailApi = ref<CarouselApi>()
      const selectedIndex = ref(0)
      const imagesList = ref<string[]>([1, 2, 3, 4, 5])

      function onSelect() {
        if (!emblaMainApi.value || !emblaThumbnailApi.value) return
        selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
        emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
      }

      function onThumbClick(index: number) {
        if (!emblaMainApi.value) return
        emblaMainApi.value.scrollTo(index)
      }

      watchOnce(emblaMainApi, (api) => {
        if (!api) return
        onSelect()
        api.on('select', onSelect)
        api.on('reInit', onSelect)
      })

      return { args, emblaMainApi, emblaThumbnailApi, selectedIndex, imagesList, onThumbClick }
    },
    template: `
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
    `,
  }),
}
