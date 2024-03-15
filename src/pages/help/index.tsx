import { t, Trans } from '@lingui/macro'
import { RenderHelpItem } from 'features/help/components/helpItem'
// import { WillBeSoon } from 'entities/common/willBeSoon'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { RouteConfigComponentProps } from 'react-router-config'
import { CardTemplate } from 'shared/ui/atoms/card'
import { Title as TitleTmp } from 'shared/ui/atoms/typography/title'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { FAQItem } from 'features/help/components/faq'

// const renderWillBeSoon = (props) => {
//   return (
//     <div>
//       <WillBeSoon {...props} />
//     </div>
//   )
// }

const text_mock =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor feugiat tristique eu in morbi magna amet sit. Vitae a, quisque ornare pulvinar aliquet vitae, gravida.'
const testArray_mock = [
  {
    title: 'Шаг 1 — Lorem ipsum dolor sit amet',
    text: text_mock,
    image: '../../../assets/images/help-item-default.png',
  },
  {
    title: 'Шаг 2 — Lorem ipsum dolor sit amet',
    text: text_mock,
    image: '../../../assets/images/help-item-default.png',
  },
  {
    title: 'Шаг 3 — Lorem ipsum dolor sit amet',
    text: text_mock,
    image: '../../../assets/images/help-item-default.png',
  },
  {
    title: 'Шаг 4 — Lorem ipsum dolor sit amet',
    text: text_mock,
    image: '../../../assets/images/help-item-default.png',
  },
]
const question_mock = 'Lorem ipsum dolor sit amet consecteur elit ?'
const answer_mock =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const FAQs_mock = [
  {
    question: question_mock,
    answer: answer_mock,
  },
  {
    question: question_mock,
    answer: answer_mock,
  },
  {
    question: question_mock,
    answer: answer_mock,
  },
  {
    question: question_mock,
    answer: answer_mock,
  },
  {
    question: question_mock,
    answer: answer_mock,
  },
  {
    question: question_mock,
    answer: answer_mock,
  },
]

export const HelpPage: FC<RouteConfigComponentProps> = () => {
  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.help' })}</title>
      </Helmet>
      <Card>
        <Title level={1}>
          <Trans id="help.title" />
        </Title>
        <SubTitle>Lorem ipsum dolor sit amet consecteur elit</SubTitle>
        {testArray_mock.map((item, _index) => (
          <RenderHelpItem key={_index} {...item} isReverse={!!(_index % 2)} />
        ))}
        <VideoWrap>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=QVH5jmJItIs&ab_channel=LavaNdASs"
            className="react-player"
            width="100%"
            height="100%"
            controls
          />
        </VideoWrap>
        <FAQsWrap>
          <div className="inner_wrap inner_wrap-right">
            {FAQs_mock.map((item, _index) => (
              <FAQItem key={_index} {...item} />
            ))}
          </div>
          <div className="inner_wrap inner_wrap-left">
            {FAQs_mock.map((item, _index) => (
              <FAQItem key={_index} {...item} />
            ))}
          </div>
        </FAQsWrap>
      </Card>
    </>
  )
}

const Card = styled(CardTemplate)`
  padding: 15px 10px;

  @media screen and (min-width: 465px) {
    padding: 20px 74px;
  }
  @media screen and (min-width: 769px) {
    padding: 40px 102px;
  }
`

const Title = styled(TitleTmp)`
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  color: inherit;
  text-align: center;
  @media screen and (min-width: 465px) {
    font-size: 30px;
  }
  @media screen and (min-width: 769px) {
    font-size: 40px;
  }
`

const SubTitle = styled(TitleTmp)`
  font-size: 15px;
  color: inherit;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  @media screen and (min-width: 465px) {
    font-size: 20px;
  }
  @media screen and (min-width: 769px) {
    font-size: 25px;
  }
`

const VideoWrap = styled.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  padding-top: 54.25%;

  @media screen and (min-width: 465px) {
    padding-top: 56.25%;
    border-radius: 40px;
  }
  @media screen and (min-width: 769px) {
    padding-top: 33.25%;
  }
  @media screen and (min-width: 1400px) {
    padding-top: 25.25%;
  }
`

const FAQsWrap = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  margin-top: 30px;
  width: 100%;
  display: block;
  justify-content: space-between;

  @media screen and (min-width: 700px) {
    display: flex;
    .inner_wrap-right {
      margin-right: 15px;
    }
  }

  .inner_wrap {
    max-width: 500px;
    width: 100%;
    padding-right: 15px;
    box-sizing: border-box;
  }
`
