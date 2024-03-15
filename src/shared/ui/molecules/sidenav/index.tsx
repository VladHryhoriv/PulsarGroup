import { SideNav as SideNavBase, SideNavProps } from './sidenav'
import { SideNavItem } from './sidenav-item'

export type Props = typeof SideNavBase & {
  Item: typeof SideNavItem
}

const SideNav = SideNavBase as Props

SideNav.Item = SideNavItem

export { SideNav }
export type { SideNavProps }
