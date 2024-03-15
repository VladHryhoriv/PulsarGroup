import { ThemeProps } from 'entities/theme/types'
import styled from 'styled-components'

interface BodyProps<T> {
  objects: T[]
  properties: {
    key: keyof T
    title: string
  }[]
}

interface RowProps<T> {
  object: T
  properties: {
    key: keyof T
    title: string
  }[]
}

const Row = <T,>(props: RowProps<T>): JSX.Element => {
  const { object, properties } = props

  return (
    <RowStyles>
      {properties.map((property) => (
        <RowProperty key={String(property.key)}>
          {object[property.key]}
        </RowProperty>
      ))}
    </RowStyles>
  )
}

const RowStyles = styled.tr`
  td:first-child {
    border-left: ${({ theme }: ThemeProps) =>
      `1px solid ${theme.main.table.borderColor}`};
  }

  td:last-child {
    border-right: ${({ theme }: ThemeProps) =>
      `1px solid ${theme.main.table.borderColor}`};
  }

  &:last-child {
    td:first-child {
      border-bottom-left-radius: 10px;
    }

    td:last-child {
      border-bottom-right-radius: 10px;
    }
  }
`

const RowProperty = styled.td`
  color: ${({ theme }: ThemeProps) => theme.main.table.color};
  text-align: center;
  border-bottom: ${({ theme }: ThemeProps) =>
    `1px solid ${theme.main.table.borderColor}`};

  padding: 10px 0;

  @media only screen and (min-width: 321px) {
    padding: 15px 0;
  }
`

export const TableBody = <T extends { id?: number | string }>(
  props: BodyProps<T>
): JSX.Element => {
  const { objects, properties } = props

  return (
    <tbody>
      {objects.map((object) => (
        <Row key={object.id} object={object} properties={properties} />
      ))}
    </tbody>
  )
}
