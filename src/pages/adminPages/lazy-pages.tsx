import loadable from '@loadable/component'

import { Spin } from 'shared/ui/atoms/spin'
import { CenterTemplate } from 'shared/ui/templates/center-template'

const Loader = () => (
  <CenterTemplate>
    <Spin size="large" />
  </CenterTemplate>
)

//*********** ADMIN DASHBOARD PAGES *************/

export const DashboardPage = loadable(
  () => import(/* webpackChunkName: "dashboard-page" */ './dashboard'),
  {
    resolveComponent: ({ AdminDashboard }) => AdminDashboard,
    fallback: <Loader />,
  }
)

export const ActionsPage = loadable(
  () => import(/* webpackChunkName: "actions-page" */ './actions'),
  {
    resolveComponent: ({ Actions }) => Actions,
    fallback: <Loader />,
  }
)

export const AdminsPage = loadable(
  () => import(/* webpackChunkName: "admins-page" */ './admins'),
  {
    resolveComponent: ({ Admins }) => Admins,
    fallback: <Loader />,
  }
)

export const SettingsPage = loadable(
  () => import(/* webpackChunkName: "settings-page" */ './settings'),
  {
    resolveComponent: ({ Settings }) => Settings,
    fallback: <Loader />,
  }
)

export const StatisticPage = loadable(
  () => import(/* webpackChunkName: "statistic-page" */ './statistic'),
  {
    resolveComponent: ({ Statistic }) => Statistic,
    fallback: <Loader />,
  }
)
