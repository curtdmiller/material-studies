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
      }
    ]
  },
  {
    title: 'Modernist Studies',
    url: '/modernist-studies',
    hasChildren: true,
    children: []
  }
]
