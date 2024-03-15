import { ErrorBoundary } from 'features/common/components/error-boundary'
import { MainTemplate } from 'features/home/templates/main-template'
import { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'

export const HomePage: FC<RouteConfigComponentProps> = ({ route }) => (
  <ErrorBoundary>
    <MainTemplate routes={route?.routes} />
  </ErrorBoundary>
)
