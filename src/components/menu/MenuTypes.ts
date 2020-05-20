export interface TreeItem {
  title: string
  url: string
  hasChildren: boolean
  children: TreeItem[]
}

export interface RenderOptions {
  tree: TreeItem[]
  level: number
  icons: boolean
}
