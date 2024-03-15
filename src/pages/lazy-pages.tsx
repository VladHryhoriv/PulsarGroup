import loadable from '@loadable/component'

import { Spin } from 'shared/ui/atoms/spin'
import { CenterTemplate } from 'shared/ui/templates/center-template'

const Loader = () => (
  <CenterTemplate>
    <Spin size="large" />
  </CenterTemplate>
)

//*********** FOR CUSTOMERS *************/

export const HomePage = loadable(
  () => import(/* webpackChunkName: "home-page" */ './home'),
  {
    resolveComponent: ({ HomePage }) => HomePage,
    fallback: <Loader />,
  }
)

export const MainPage = loadable(
  () => import(/* webpackChunkName: "main-page" */ './main'),
  {
    resolveComponent: ({ MainPage }) => MainPage,
    fallback: <Loader />,
  }
)

export const HistoryPage = loadable(
  () => import(/* webpackChunkName: "history-page" */ './main/history'),
  {
    resolveComponent: ({ UserHistory }) => UserHistory,
    fallback: <Loader />,
  }
)

export const ImportPage = loadable(
  () => import(/* webpackChunkName: "import-page" */ './import'),
  {
    resolveComponent: ({ ImportPage }) => ImportPage,
    fallback: <Loader />,
  }
)

export const ExportPage = loadable(
  () => import(/* webpackChunkName: "export-page" */ './export'),
  {
    resolveComponent: ({ ExportPage }) => ExportPage,
    fallback: <Loader />,
  }
)

export const ReferralPage = loadable(
  () => import(/* webpackChunkName: "referral-page" */ './referral'),
  {
    resolveComponent: ({ ReferralPage }) => ReferralPage,
    fallback: <Loader />,
  }
)

export const HelpPage = loadable(
  () => import(/* webpackChunkName: "help-page" */ './help'),
  {
    resolveComponent: ({ HelpPage }) => HelpPage,
    fallback: <Loader />,
  }
)

//*********** FOR ANONYMOUS USERS *************/

export const SingUpPage = loadable(
  () => import(/* webpackChunkName: "sign-up-page" */ './join/sign-up'),
  {
    resolveComponent: ({ SignUpPage }) => SignUpPage,
    fallback: <Loader />,
  }
)

export const SignInPage = loadable(
  () => import(/* webpackChunkName: "sign-in-page" */ './join/sign-in'),
  {
    resolveComponent: ({ SignInPage }) => SignInPage,
    fallback: <Loader />,
  }
)

export const RestorePage = loadable(
  () => import(/* webpackChunkName: "restore-page" */ './join/restore'),
  {
    resolveComponent: ({ RestorePage }) => RestorePage,
    fallback: <Loader />,
  }
)

export const ResetPage = loadable(
  () => import(/* webpackChunkName: "reset-page" */ './join/reset'),
  {
    resolveComponent: ({ ResetPage }) => ResetPage,
    fallback: <Loader />,
  }
)

export const ChangedPage = loadable(
  () => import(/* webpackChunkName: "changed-page" */ './join/changed'),
  {
    resolveComponent: ({ ChangedPage }) => ChangedPage,
    fallback: <Loader />,
  }
)

export const SendedPage = loadable(
  () => import(/* webpackChunkName: "sended-page" */ './join/sended'),
  {
    resolveComponent: ({ SendedPage }) => SendedPage,
    fallback: <Loader />,
  }
)

export const PrivacyPolicyPage = loadable(
  () => import(/* webpackChunkName: "privacy-policy" */ './privacy'),
  {
    resolveComponent: ({ Privacy }) => Privacy,
    fallback: <Loader />,
  }
)

//*********** ADMIN DASHBOARD PAGES *************/

export const DashboardPage = loadable(
  () =>
    import(/* webpackChunkName: "dashboard-page" */ './adminPages/dashboard'),
  {
    resolveComponent: ({ AdminDashboard }) => AdminDashboard,
    fallback: <Loader />,
  }
)

export const ActionsPage = loadable(
  () => import(/* webpackChunkName: "actions-page" */ './adminPages/actions'),
  {
    resolveComponent: ({ Actions }) => Actions,
    fallback: <Loader />,
  }
)

export const AdminsPage = loadable(
  () => import(/* webpackChunkName: "admins-page" */ './adminPages/admins'),
  {
    resolveComponent: ({ Admins }) => Admins,
    fallback: <Loader />,
  }
)

export const SettingsPage = loadable(
  () => import(/* webpackChunkName: "settings-page" */ './adminPages/settings'),
  {
    resolveComponent: ({ Settings }) => Settings,
    fallback: <Loader />,
  }
)

export const StatisticPage = loadable(
  () =>
    import(/* webpackChunkName: "statistic-page" */ './adminPages/statistic'),
  {
    resolveComponent: ({ Statistic }) => Statistic,
    fallback: <Loader />,
  }
)

//*********** NOT FOUND PAGE *************/

export const NotFoundPage = loadable(
  () => import(/* webpackChunkName: "not-found-page" */ './404'),
  {
    resolveComponent: ({ NotFoundPage }) => NotFoundPage,
    fallback: <Loader />,
  }
)
