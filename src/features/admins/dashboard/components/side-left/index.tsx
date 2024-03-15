import { Trans } from '@lingui/macro'
import { paths } from 'pages/paths'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useKeyMenu } from 'shared/lib/useKeyMenu'
import ExportOutlined from 'shared/ui/atoms/icon/export-outlined'
import ImportOutlined from 'shared/ui/atoms/icon/import-outlined'
import PartnershipOutlined from 'shared/ui/atoms/icon/partnership-outlined'
import WindowOutlined from 'shared/ui/atoms/icon/window-outlined'
import { SideNav } from 'shared/ui/molecules/sidenav'
import styled from 'styled-components'

export const SideLeft: FC = () => {
  const key = useKeyMenu('statistic', 1)

  return (
    <SideLeftControl selectedKey={key}>
      <SideNav.Item
        key="statistic"
        component={<Link to={paths.statistic()} />}
        icon={<WindowOutlined />}
        label={<Trans id="side-link.statistic" />}
      />
      <SideNav.Item
        key="management"
        component={<Link to={paths.management()} />}
        icon={<ImportOutlined />}
        label={<Trans id="side-link.management" />}
      />
      <SideNav.Item
        key="admins"
        component={<Link to={paths.admins()} />}
        icon={<ExportOutlined />}
        label={<Trans id="side-link.admins" />}
      />
      <SideNav.Item
        key="actions"
        component={<Link to={paths.actions()} />}
        icon={<PartnershipOutlined />}
        label={<Trans id="side-link.actions" />}
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
