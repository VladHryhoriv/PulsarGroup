import { ThemeProps } from 'entities/theme/types'
import { Header } from 'features/home/components/header'
import { ChangeLocalModal } from 'features/home/components/header/local'
import { SettingsModal } from 'features/home/components/header/settings'
import { FC } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import styled from 'styled-components'
import { SideLeft } from '../components/side-left'

interface DashboardProps {
  routes: RouteConfig[] | undefined
}

export const DasboardTemplate: FC<DashboardProps> = ({ routes }) => {
  return (
    <Wrap>
      <SideLeft />
      <Content>
        <Header />
        <RoutesWrap>{renderRoutes(routes)}</RoutesWrap>
      </Content>
      <ChangeLocalModal />
      <SettingsModal />
    </Wrap>
  )
}

const Wrap = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${(props: ThemeProps) => props.theme.sideNav.background};
`

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  flex: 1;
`

const RoutesWrap = styled.div`
  padding: 15px 10px;
  background-color: ${({ theme }: ThemeProps) => theme.main.background};
  flex: 1;
  overflow: auto;
  padding-bottom: 106px;

  @media only screen and (min-width: 461px) {
    padding-bottom: 126px;
  }

  @media only screen and (min-width: 769px) {
    padding: 30px;
  }
`
