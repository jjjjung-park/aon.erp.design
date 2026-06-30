import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'
import React from 'react'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'AON ERP Design System v0.0.5',
    brandUrl: '/',
  }),
  sidebar: {
    renderLabel: ({ name, tags, type }: { name: string; tags?: string[]; type?: string }) => {
      if (tags?.includes('done') && type === 'component') {
        return React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '6px' } }, [
          React.createElement('span', { key: 'name' }, name),
          React.createElement('span', {
            key: 'badge',
            style: {
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22c55e',
              flexShrink: 0,
              display: 'inline-block',
            }
          })
        ])
      }
      return name
    }
  }
})
