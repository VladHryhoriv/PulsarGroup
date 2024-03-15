import { DasboardTemplate } from 'features/admins/dashboard/templates/dashboard-template'
import { ErrorBoundary } from 'features/common/components/error-boundary'
import { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'

export const AdminDashboard: FC<RouteConfigComponentProps> = ({ route }) => (
  <ErrorBoundary>
    <DasboardTemplate routes={route?.routes} />
  </ErrorBoundary>
)
