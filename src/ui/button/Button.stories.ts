import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '.'
import { LucidePlus, LucideTrash2, LucideSearch } from 'lucide-vue-next'
import { h } from 'vue'

const meta: Meta<typeof Button> = {
  title: '코어/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'icon-sm', 'icon', 'icon-lg'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => ({
    components: { Button },
    setup() { return { args } },
    template: `<Button v-bind="args">버튼</Button>`,
  }),
}

export const AllVariants: Story = {
  name: '모든 Variant',
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    `,
  }),
}

export const AllSizes: Story = {
  name: '모든 Size',
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-3 items-end">
        <Button size="lg">Large</Button>
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
      </div>
    `,
  }),
}

export const IconButtons: Story = {
  name: '아이콘 버튼',
  render: () => ({
    components: { Button, LucidePlus, LucideTrash2, LucideSearch },
    template: `
      <div class="flex flex-wrap gap-3 items-end">
        <Button size="icon-lg" variant="outline"><LucidePlus /></Button>
        <Button size="icon" variant="outline"><LucideSearch /></Button>
        <Button size="icon-sm" variant="outline"><LucideTrash2 /></Button>
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  name: '텍스트 + 아이콘',
  render: () => ({
    components: { Button, LucidePlus, LucideTrash2 },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default"><LucidePlus />추가</Button>
        <Button variant="outline"><LucidePlus />추가</Button>
        <Button variant="destructive"><LucideTrash2 />삭제</Button>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  name: 'Disabled 상태',
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default" disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </div>
    `,
  }),
}
