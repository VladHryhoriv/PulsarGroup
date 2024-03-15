import { ThemeProps } from 'entities/theme/types'
import { ExportModal } from 'features/export/components/modal'
import { ImportModal } from 'features/import/components/modal'
import { FC } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import styled from 'styled-components'
import { Header } from '../components/header'
import { ChangeLocalModal } from '../components/header/local'
import { SettingsModal } from '../components/header/settings'
import { SideLeft } from '../components/side-left'

interface MainProps {
  routes: RouteConfig[] | undefined
}

export const MainTemplate: FC<MainProps> = ({ routes }) => {
  return (
    <Wrap>
      <SideLeft />
      <Content>
        <Header />
        <RoutesWrap>{renderRoutes(routes)}</RoutesWrap>
      </Content>
      <ChangeLocalModal />
      <SettingsModal />
      <ImportModal />
      <ExportModal />
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
