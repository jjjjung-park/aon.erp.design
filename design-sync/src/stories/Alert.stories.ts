import type { Meta, StoryObj } from '@storybook/vue3'
import { Alert, AlertTitle } from '@/ui/alert'
import { LucideInfo, LucideCheck, LucideAlertTriangle, LucideCircleAlert } from 'lucide-vue-next'

const meta: Meta<typeof Alert> = {
  title: 'UI 패턴/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'info', 'warning', 'danger', 'success'],
    },
    dismiss: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    dismiss: false,
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => ({
    components: { Alert, AlertTitle },
    setup() { return { args } },
    template: `
      <Alert v-bind="args">
        <template #default>
          <AlertTitle>알림 제목</AlertTitle>
        </template>
      </Alert>
    `,
  }),
}

export const AllVariants: Story = {
  name: '모든 Variant',
  render: () => ({
    components: { Alert, AlertTitle, LucideInfo, LucideCheck, LucideAlertTriangle, LucideCircleAlert },
    template: `
      <div class="flex flex-col gap-3">
        <Alert variant="default">
          <template #default><AlertTitle>Default</AlertTitle></template>
        </Alert>
        <Alert variant="primary">
          <template #alert-icon><LucideInfo /></template>
          <template #default><AlertTitle>Primary</AlertTitle></template>
        </Alert>
        <Alert variant="info">
          <template #alert-icon><LucideInfo /></template>
          <template #default><AlertTitle>Info</AlertTitle></template>
        </Alert>
        <Alert variant="success">
          <template #alert-icon><LucideCheck /></template>
          <template #default><AlertTitle>Success</AlertTitle></template>
        </Alert>
        <Alert variant="warning">
          <template #alert-icon><LucideCircleAlert /></template>
          <template #default><AlertTitle>Warning</AlertTitle></template>
        </Alert>
        <Alert variant="danger">
          <template #alert-icon><LucideAlertTriangle /></template>
          <template #default><AlertTitle>Danger</AlertTitle></template>
        </Alert>
      </div>
    `,
  }),
}
