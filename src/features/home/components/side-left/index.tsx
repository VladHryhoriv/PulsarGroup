import { Trans } from '@lingui/macro'
import { paths } from 'pages/paths'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useKeyMenu } from 'shared/lib/useKeyMenu'
import ExportOutlined from 'shared/ui/atoms/icon/export-outlined'
import HelpOutlined from 'shared/ui/atoms/icon/help-outlined'
import ImportOutlined from 'shared/ui/atoms/icon/import-outlined'
import PartnershipOutlined from 'shared/ui/atoms/icon/partnership-outlined'
import WindowOutlined from 'shared/ui/atoms/icon/window-outlined'
import { SideNav } from 'shared/ui/molecules/sidenav'
import styled from 'styled-components'

export const SideLeft: FC = () => {
  const key = useKeyMenu('main', 1)

  return (
    <SideLeftControl selectedKey={key}>
      <SideNav.Item
        key="main"
        component={<Link to={paths.main()} />}
        icon={<WindowOutlined />}
        label={<Trans id="side-link.main" />}
      />
      <SideNav.Item
        key="import"
        component={<Link to={paths.import()} />}
        icon={<ImportOutlined />}
        label={<Trans id="side-link.import" />}
      />
      <SideNav.Item
        key="export"
        component={<Link to={paths.export()} />}
        icon={<ExportOutlined />}
        label={<Trans id="side-link.export" />}
      />
      <SideNav.Item
        key="referral"
        component={<Link to={paths.referral()} />}
        icon={<PartnershipOutlined />}
        label={<Trans id="side-link.referral" />}
      />
      <SideNav.Item
        key="help"
        component={<Link to={paths.help()} />}
        icon={<HelpOutlined />}
        label={<Trans id="side-link.help" />}
      />
    </SideLeftControl>
  )
}

const SideLeftControl = styled(SideNav)`
  min-width: 285px;
  transition: all 0.7s;

  @media screen and (min-width: 769px) {
    &[data-collapsed='true'] {
      min-width: 100px;
    }
  }
`
