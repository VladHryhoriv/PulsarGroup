import { Redirect } from 'react-router-dom'
import { FC } from 'react'

import { onlyAuth, onlyAnon, onlyUser, onlyAdmin } from 'features/common/guards'
import { paths } from './paths'
import {
  HomePage,
  SignInPage,
  SingUpPage,
  NotFoundPage,
  RestorePage,
  PrivacyPolicyPage,
  ResetPage,
  ChangedPage,
  SendedPage,
  ImportPage,
  ExportPage,
  ReferralPage,
  HelpPage,
  MainPage,
  HistoryPage,
  ActionsPage,
  AdminsPage,
  SettingsPage,
  StatisticPage,
  DashboardPage,
} from './lazy-pages'
import { Frok } from './fork'
import { RouteConfig } from 'react-router-config'

const DefaultHomePage: FC = () => <Redirect to={paths.main()} />
const DefaultAdminPage: FC = () => <Redirect to={paths.statistic()} />

export const routes: RouteConfig[] = [
  {
    component: Frok,
    path: '/',
    exact: true,
  },
  {
    component: HomePage,
    guards: [onlyUser(), onlyAuth()],
    path: paths.home(),
    routes: [
      {
        component: HistoryPage,
        path: paths.history_1(),
        exact: true,
      },
      {
        component: MainPage,
        path: paths.main(),
        exact: true,
      },
      {
        component: ImportPage,
        path: paths.import(),
        exact: true,
      },
      {
        component: ExportPage,
        path: paths.export(),
        exact: true,
      },
      {
        component: ReferralPage,
        path: paths.referral(),
        exact: true,
      },
      {
        component: HelpPage,
        path: paths.help(),
        exact: true,
      },
      {
        component: DefaultHomePage,
        path: paths.home(),
        exact: true,
      },
    ],
  },
  {
    component: DashboardPage,
    guards: [onlyAdmin(), onlyAuth()],
    path: paths.dashboard(),
    routes: [
      {
        component: ActionsPage,
        path: paths.actions(),
        exact: true,
      },
      {
        component: AdminsPage,
        path: paths.admins(),
        exact: true,
      },
      {
        component: SettingsPage,
        path: paths.management(),
        exact: true,
      },
      {
        component: StatisticPage,
        path: paths.statistic(),
        exact: true,
      },
      {
        component: DefaultAdminPage,
        path: paths.dashboard(),
        exact: true,
      },
    ],
  },
  {
    component: SignInPage,
    exact: true,
    guards: [onlyAnon()],
    path: paths.login(),
  },
  {
    component: SingUpPage,
    exact: true,
    guards: [onlyAnon()],
    path: paths.signup(),
  },
  {
    component: RestorePage,
    exact: true,
    guards: [onlyAnon()],
    path: paths.restore(),
  },
  {
    component: ResetPage,
    exact: true,
    guards: [onlyAnon()],
    path: paths.reset(),
  },
  {
    component: ChangedPage,
    exact: true,
    guards: [onlyAnon()],
    path: paths.changed(),
  },
  {
    component: SendedPage,
    exact: true,
    guards: [onlyAnon()],
    path: paths.sended(),
  },
  {
    component: PrivacyPolicyPage,
    exact: true,
    path: paths.privacy(),
  },
  {
    component: NotFoundPage,
    exact: true,
  },
]
