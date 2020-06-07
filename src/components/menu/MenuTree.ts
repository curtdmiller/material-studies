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
        title: 'Ingo Offermans: Josef Albers, Interaction (Book, 2018)',
        url: '/modernist-studies/albers-interaction',
        hasChildren: false,
        children: []
      },
      {
        title: 'Josef Albers: Provocative Percussion (Record Cover, 1959)',
        url: '/modernist-studies/provocative-percussion',
        hasChildren: false,
        children: []
      },
      {
        title:
          'Josef Albers: Provocative Percussion Vol. III (Record Cover, 1961)',
        url: '/modernist-studies/provocative-percussion-vol-3',
        hasChildren: false,
        children: []
      },
      {
        title: 'Josef Albers: Pillars (Screenprint, 1970)',
        url: '/modernist-studies/albers-pillars',
        hasChildren: false,
        children: []
      },
      {
        title:
          'Alvin Lustig: The Suites for Orchestra by J.S. Bach (Record Cover, 1952)',
        url: '/modernist-studies/lustig-hewitt',
        hasChildren: false,
        children: []
      },
      {
        title: 'Norman Ives: Beethoven, Yves Nat (Record Cover, 1954)',
        url: '/modernist-studies/ives-beethoven',
        hasChildren: false,
        children: []
      }
    ]
  }
]
