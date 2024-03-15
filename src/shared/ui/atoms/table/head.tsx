import { Trans } from '@lingui/macro'
import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  properties: {
    key: number | symbol | string
    title: string
  }[]
}

export const TableHead: FC<Props> = (props) => {
  const { properties } = props

  return (
    <thead>
      <HeadRow>
        {properties.map((property) => (
          <HeadProperty key={String(property.key)}>
            <Trans id={property.title} />
          </HeadProperty>
        ))}
      </HeadRow>
    </thead>
  )
}

const HeadRow = styled.tr`
  background: linear-gradient(180deg, #010101 0%, #0b111b 100%);
  color: var(--color-elems-white);
`

const HeadProperty = styled.th`
  &:first-child {
    border-radius: 10px 0 0 0;
  }
  &:last-child {
    border-radius: 0 10px 0 0;
  }
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin: 0;
  padding: 0;
  border: 0;

  padding: 12px 0;
  font-size: 13px;

  @media only screen and (min-width: 321px) {
    padding: 16px 0;
    font-size: 20px;
  }
`
