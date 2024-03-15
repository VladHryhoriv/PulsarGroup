import { retoast } from 'features/common/lib/retoast'
import { forward } from 'effector'
import { dropSession } from 'entities/auth/model/model'
import {
  sendEmailStatusRequestFx,
  sendEmailStatus,
  updateProfileName,
  updateProfileNameRequestFx,
  deleteAccountRequestFx,
  deleteAccount,
  updateProfileLanguageRequestFx,
  changeLocale,
  updateProfileThemeRequestFx,
  updateProfileTheme,
} from '.'
import './model'
import { t } from '@lingui/macro'
import { changeThemeFx } from 'entities/theme/model'

forward({
  from: updateProfileNameRequestFx.doneData.map(({ user }) => user.name),
  to: updateProfileName,
})

forward({
  from: updateProfileLanguageRequestFx.doneData.map(
    ({ user }) => user.language
  ),
  to: changeLocale,
})

retoast({
  effect: updateProfileNameRequestFx,
  fail: () => t({ id: 'error.fail_update_profile' }),
})

retoast({
  effect: updateProfileNameRequestFx,
  success: () => t({ id: 'error.success_update_profile' }),
})

forward({
  from: updateProfileThemeRequestFx.doneData.map(({ user }) => user.theme),
  to: [updateProfileTheme, changeThemeFx],
})

retoast({
  effect: updateProfileThemeRequestFx,
  fail: () => t({ id: 'error.fail_update_profile' }),
})

retoast({
  effect: updateProfileThemeRequestFx,
  success: () => t({ id: 'error.success_update_profile' }),
})

forward({
  from: sendEmailStatusRequestFx.doneData.map(({ success }) => success),
  to: sendEmailStatus,
})

forward({
  from: sendEmailStatusRequestFx.fail.map(() => false),
  to: sendEmailStatus,
})

retoast({
  effect: sendEmailStatusRequestFx,
  fail: () => t({ id: 'error.fail_send_email' }),
})

forward({
  from: deleteAccountRequestFx.doneData.map(({ success }) => success),
  to: deleteAccount,
})

forward({
  from: deleteAccountRequestFx.doneData,
  to: dropSession,
})

retoast({
  effect: deleteAccountRequestFx,
  fail: () => t({ id: 'error.fail_delete_account' }),
})
