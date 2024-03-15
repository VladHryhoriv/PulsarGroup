import { FC } from 'react'
import { GhostGradientButton } from 'shared/ui/atoms/button'
import { CardTemplate } from 'shared/ui/atoms/card'
import { Title as TitleTmp } from 'shared/ui/atoms/typography/title'
import styled from 'styled-components'

export const ImportTitleCard = styled(CardTemplate)`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  max-width: 1255px;
  margin: 0 auto;
`

export const ImportTitle = styled(TitleTmp)`
  color: inherit;
  margin: 0;

  font-size: 18px;

  @media only screen and (min-width: 321px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 40px;
  }
`

export const ImportSubTitle = styled(TitleTmp)`
  color: inherit;
  margin: 0;
  margin-top: 5px;

  font-size: 15px;
  font-weight: 400;

  @media only screen and (min-width: 321px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 25px;
  }
`

export const ImportWrap = styled.div`
  max-width: 839px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 1181px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 1600px) {
    max-width: 1255px;
  }
`

export const ImportCard = styled(CardTemplate)`
  width: 100%;
  max-width: 398px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  padding: 15px 20px;

  @media only screen and (min-width: 321px) {
    padding: 20px 40px;
  }

  @media only screen and (min-width: 769px) {
    margin: 30px 10px 0 10px;
    padding: 30px 50px;
  }
`

export const ImportPaymentImgWrap = styled.div`
  max-width: 300px;
  max-height: 200px;
  border-radius: 20px;
  overflow: hidden;
`

export const ImportPaymentImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  @media only screen and (max-width: 450px) {
    width: 250px;
    height: 160px;
  }
`

export const ImportGhostButton = styled(GhostGradientButton)`
  margin-top: 15px;
  width: 144px;

  @media only screen and (min-width: 321px) {
    margin-top: 20px;
    width: 170px;
  }

  @media only screen and (min-width: 769px) {
    margin-top: 30px;
  }
`
