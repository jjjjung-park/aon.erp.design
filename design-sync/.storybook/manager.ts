import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'AON ERP Design System v0.0.4',
    brandUrl: '/',
  }),
})
