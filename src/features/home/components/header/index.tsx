import { Trans } from '@lingui/macro'
import { ThemeProps } from 'entities/theme/types'
import { useProfile } from 'features/profile/model/selectors'
import { paths } from 'pages/paths'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVariable } from 'shared/lib/getCssVariable'
import useMediaQuery from 'shared/lib/useMediaQuery'
import LogoMobileFilled from 'shared/ui/atoms/icon/logo-mobile-filled'
import { Title } from 'shared/ui/atoms/typography/title'
import { HeaderTemplate } from 'shared/ui/molecules/header'
import styled, { css } from 'styled-components'
import { HeaderMenu } from './menu'

export const Header: FC = () => {
  const $user = useProfile()

  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery(`(min-width: 769px)`)
  const isMobile = useMediaQuery(
    `(max-width: ${getVariable('--breakpoint-sm')})`
  )

  return (
    <HeaderTemplate>
      <Wrap>
        {!isDesktop && !open && (
          <Logo>
            <Link to={paths.home()}>
              <LogoMobileFilled className="logo" width="120px" height="50px" />
            </Link>
          </Logo>
        )}
        {!isMobile && (
          <HeadTextWrap>
            <HeadText level={3}>
              <Trans id="header.balance" />
            </HeadText>
            <HeadTextPink level={3}>
              {$user?.balance ? $user.balance.toFixed(2) : 0}$
            </HeadTextPink>
          </HeadTextWrap>
        )}
        <UserMenu open={open}>
          <HeaderMenu open={open} />
        </UserMenu>
        {isMobile && (
          <Burger open={open} onClick={() => setOpen(!open)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </Burger>
        )}
      </Wrap>
    </HeaderTemplate>
  )
}

const Wrap = styled.div`
  padding: 0.93rem 1.87rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  z-index: 1;

  @media only screen and (max-width: 426px) {
    .logo {
      width: 83px;
      height: 34px;
    }
  }
`

const HeadTextWrap = styled.div`
  display: flex;
`

const HeadTextControl = styled(Title)`
  margin: 0;

  font-size: 18px;

  @media only screen and (min-width: 485px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`

const HeadText = styled(HeadTextControl)`
  display: flex;
  font-weight: 500;
  color: ${({ theme }: ThemeProps) => theme.main.header.color};
`

const HeadTextPink = styled(HeadTextControl)`
  font-weight: 700;
  color: var(--color-dark-pink);
  margin-left: 0.4rem;
`

const UserMenu = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  /* width: 100%; */

  width: ${(props) => (props.open ? '100%' : 'auto')};
`

const Burger = styled.div<{ open: boolean }>`
  display: inline-block;
  cursor: pointer;

  div {
    width: 20px;
    height: 2px;
    border-radius: 30px;
    background-color: ${({ theme }: ThemeProps) => theme.main.header.color};
    margin: 6px 0;
    transition: 0.4s;
  }

  ${(props) =>
    props.open &&
    css`
      .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-4px, 6px);
      }
      .bar2 {
        opacity: 0;
      }
      .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-5px, -8px);
      }
    `}
`
