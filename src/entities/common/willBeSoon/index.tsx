import { ThemeProps } from 'entities/theme/types'
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { GhostGradientButton } from 'shared/ui/atoms/button'
import styled from 'styled-components'

export const WillBeSoon: FC<RouteComponentProps> = ({ history }) => {
  return (
    <Wrap className="w-100 ">
      <HeadText>This page will be soon</HeadText>
      <Button onClick={() => history.goBack()}>Go back !</Button>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const HeadText = styled.h1`
  text-align: center;
  color: ${(props: ThemeProps) => props.theme.colors.modal.color};

  font-size: 24px;

  @media only screen and (min-width: 769px) {
    font-size: 32px;
  }
`

const Button = styled(GhostGradientButton)`
  box-shadow: 2px 1000px 1px
    ${(props: ThemeProps) => props.theme.main.background} inset !important;
`
