import { LargeAvatar } from './components/large'
import { MediumAvatar } from './components/medium'
import { SmallAvatar } from './components/small'

type AvatarProps = {
  Large: typeof LargeAvatar
  Medium: typeof MediumAvatar
  Small: typeof SmallAvatar
}

LargeAvatar.displayName = 'LargeAvatar'
MediumAvatar.displayName = 'LargeAvatar'
SmallAvatar.displayName = 'SmallAvatar'

export const Avatar: AvatarProps = {
  Large: LargeAvatar,
  Medium: MediumAvatar,
  Small: SmallAvatar,
}
