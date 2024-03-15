import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import LogoFilled from '../atoms/icon/logo-filled'
import { CenterTemplate } from './center-template'

interface Props {
  children: ReactNode
}

const Header = () => (
  <CenterTemplate>
    <Logo />
  </CenterTemplate>
)
const Footer = () => (
  <CenterTemplate>
    <BlueTopography>Pulsar Group</BlueTopography> (C) 2022. All Rights Reserved
  </CenterTemplate>
)

export const AuthTemplate: FC<Props> = ({ children }) => {
  return (
    <>
      <HeaderWrap>
        <Header />
      </HeaderWrap>
      {children}
      <FooterWrap>
        <Footer />
      </FooterWrap>
    </>
  )
}

const HeaderWrap = styled.nav`
  position: sticky;
  top: 0;
  display: block;
  z-index: 6000;
  height: 4rem;
  a {
    color: var(--color-dark-gray);
  }

  padding-top: 23px;

  @media only screen and (min-width: 321px) {
    padding-top: 3%;
  }
`

const Logo = styled(LogoFilled)`
  height: 44px;
  width: 106px;

  @media only screen and (min-width: 321px) {
    height: 66px;
    width: 158px;
  }
`

const FooterWrap = styled.footer`
  position: sticky;
  bottom: 0;
  display: block;
  z-index: 6000;
  height: 2rem;

  font-size: 0.68rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.06rem;
  }
`

const BlueTopography = styled.span`
  color: var(--color-blue);
  font-weight: bold;
`
