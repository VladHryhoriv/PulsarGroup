const admin = {
  admin: true,
  balance: 8999,
  email: 'test2@gmail.test',
  language: 'ru' as TLocale,
  name: 'New Test',
  theme: 'light' as TTheme,
  _id: '10',
}

const user = {
  admin: false,
  balance: 8999,
  email: 'test2@gmail.test',
  language: 'ru' as TLocale,
  name: 'New Test',
  theme: 'light' as TTheme,
  _id: '10',
}

export const profile = {
  admin,
  user,
}
