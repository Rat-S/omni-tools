import { defineTool } from '@tools/defineTool';
import { lazy } from 'react';

export const tool = defineTool('image-generic', {
  i18n: {
    name: 'image:schoolLabels.title',
    description: 'image:schoolLabels.description',
    shortDescription: 'image:schoolLabels.shortDescription'
  },

  path: 'school-labels',
  icon: 'mdi:tag-multiple',
  keywords: [
    'label',
    'school',
    'sticker',
    'print',
    'tags',
    'kids',
    'name',
    'address',
    'iraivi'
  ],
  component: lazy(() => import('./index'))
});
