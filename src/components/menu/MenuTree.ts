import { TreeItem } from './MenuTypes'

export const menuTree: TreeItem[] = [
  {
    title: 'Sol Lewitt Studies',
    url: '/lewitt-studies',
    hasChildren: true,
    children: [
      {
        title: 'Open Cubes',
        url: '/lewitt-studies/open-cubes',
        hasChildren: false,
        children: []
      },
      {
        title: 'Wall Drawing 391',
        url: '/lewitt-studies/wall-drawing-391',
        hasChildren: false,
        children: []
      },
      {
        title: 'Wall Drawing 335',
        url: '/lewitt-studies/wall-drawing-335',
        hasChildren: false,
        children: []
      },
      {
        title: 'Wall Drawing 462',
        url: '/lewitt-studies/wall-drawing-462',
        hasChildren: false,
        children: []
      },
      {
        title: 'Wall Drawing 631',
        url: '/lewitt-studies/wall-drawing-631',
        hasChildren: false,
        children: []
      },
      {
        title: 'Wall Drawing 1180',
        url: '/lewitt-studies/wall-drawing-1180',
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    title: 'Modernist Print Material Studies',
    url: '/modernist-studies',
    hasChildren: true,
    children: [
      {
        title: 'Albers, Interaction',
        url: '/modernist-studies/albers-interaction',
        hasChildren: false,
        children: []
      }
    ]
  }
]
