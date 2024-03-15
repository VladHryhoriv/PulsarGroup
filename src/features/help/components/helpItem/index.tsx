import { FC } from 'react'
import styled from 'styled-components'

type IItemProps = {
  image: string
  title: string
  text: string
  isReverse?: boolean
}

export const RenderHelpItem: FC<IItemProps> = (props) => {
  return (
    <ItemWrap reverse={!!props?.isReverse}>
      <ImageWrap reverse={!!props?.isReverse}>
        <img src={props.image} />
      </ImageWrap>
      <div>
        <ItemTitle>{props.title}</ItemTitle>
        <ItemText>{props.text}</ItemText>
      </div>
    </ItemWrap>
  )
}

const ItemWrap = styled.div<{ reverse?: boolean }>`
  width: 100%;
  display: block;
  justify-content: space-between;
  align-item: center;

  flex-direction: ${(props) => (props?.reverse ? 'row-reverse' : 'row')};

  margin-bottom: 15px;

  @media screen and (min-width: 450px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 769px) {
    margin-bottom: 35px;
    display: flex;
  }
  /* @media screen and (min-width: 1600) {
    display: flex;
  } */
`

const ImageWrap = styled.div<{ reverse: boolean }>`
  max-height: 180px;
  width: 100%;
  height: 100%;
  display: contents;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  margin-bottom: 10px;

  @media screen and (min-width: 450px) {
    margin-bottom: 15px;
    max-height: 250px;
  }
  @media screen and (min-width: 769px) {
    margin-bottom: 0;
    margin-right: ${(props) => (!props.reverse ? '45px' : 0)};
    margin-left: ${(props) => (props.reverse ? '45px' : 0)};
    max-width: 435px;
    display: flex;
  }
`

const ItemTitle = styled.h3`
  color: inherit;

  font-size: 16px;
  margin-bottom: 5px;

  @media screen and (min-width: 450px) {
    font-size: 22px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 769px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`

const ItemText = styled.p`
  color: inherit;

  font-size: 13px;

  @media screen and (min-width: 450px) {
    font-size: 16px;
  }
  @media screen and (min-width: 769px) {
    font-size: 22px;
  }
`
