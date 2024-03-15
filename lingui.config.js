module.exports = {
  locales: ['en', 'ru'],
  sourceLocale: process.env.REACT_APP_DEFAULT_LOCAL,
  format: 'po',
  catalogs: [
    {
      path: './src/entities/i18n/locales/{locale}',
      include: ['./src'],
    },
  ],
}
