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
    renderLabel: ({ name, tags }: { name: string; tags?: string[] }) => {
      if (tags?.includes('done')) {
        return React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '6px' } }, [
          React.createElement('span', { key: 'name' }, name),
          React.createElement('span', {
            key: 'badge',
            style: {
              fontSize: '10px',
              background: '#dcfce7',
              color: '#15803d',
              padding: '1px 7px',
              borderRadius: '999px',
              fontWeight: 700,
              lineHeight: '1.6',
              flexShrink: 0,
            }
          }, '완료')
        ])
      }
      return name
    }
  }
})
