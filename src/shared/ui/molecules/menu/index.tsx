import { Menu as MenuBase, MenuProps } from './menu'
import { Item } from './item'

export type SelectProps = typeof MenuBase & {
  Item: typeof Item
}

const Menu = MenuBase as SelectProps

Item.displayName = 'Item'
Menu.displayName = 'Menu'

Menu.Item = Item

export { Menu }
export type { MenuProps }
