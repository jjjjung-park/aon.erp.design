import type { Meta, StoryObj } from '@storybook/vue3'
import { Alert, AlertTitle, AlertDescription } from '@/ui/alert'
import { LucideInfo, LucideCheck, LucideAlertTriangle, LucideCircleAlert } from 'lucide-vue-next'

const meta: Meta<typeof Alert> = {
  title: '피드백/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'info', 'warning', 'danger', 'success'],
    },
  },
  args: {
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => ({
    components: { Alert, AlertTitle, AlertDescription },
    setup() { return { args } },
    template: `
      <Alert v-bind="args">
        <template #default>
          <div>
            <AlertTitle>알림 제목</AlertTitle>
            <AlertDescription>알림 내용이 여기에 표시됩니다.</AlertDescription>
          </div>
        </template>
      </Alert>
    `,
  }),
}

export const AllVariants: Story = {
  name: '모든 Variant',
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, LucideInfo, LucideCheck, LucideAlertTriangle, LucideCircleAlert },
    template: `
      <div class="flex flex-col gap-3">
        <Alert variant="default">
          <template #default>
            <div><AlertTitle>Default</AlertTitle><AlertDescription>기본 알림 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="primary">
          <template #alert-icon><LucideInfo /></template>
          <template #default>
            <div><AlertTitle>Primary</AlertTitle><AlertDescription>안내 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="info">
          <template #alert-icon><LucideInfo /></template>
          <template #default>
            <div><AlertTitle>Info</AlertTitle><AlertDescription>정보 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="success">
          <template #alert-icon><LucideCheck /></template>
          <template #default>
            <div><AlertTitle>Success</AlertTitle><AlertDescription>성공 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="warning">
          <template #alert-icon><LucideCircleAlert /></template>
          <template #default>
            <div><AlertTitle>Warning</AlertTitle><AlertDescription>주의 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="danger">
          <template #alert-icon><LucideAlertTriangle /></template>
          <template #default>
            <div><AlertTitle>Danger</AlertTitle><AlertDescription>위험 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
      </div>
    `,
  }),
}
