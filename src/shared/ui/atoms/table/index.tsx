import { Trans } from '@lingui/macro'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { TableBody } from './body'
import { TableHead } from './head'

interface Props<T> {
  properties: {
    key: keyof T
    title: string
  }[]
  objects: T[] | null
}

export const TableTemplate = <T extends { id?: number | string }>(
  props: PropsWithChildren<Props<T>>
): JSX.Element => {
  const { properties, objects } = props

  return (
    <>
      <TableStyles>
        <TableHead properties={properties} />
        {objects?.length && (
          <TableBody<T> properties={properties} objects={objects} />
        )}
      </TableStyles>
      {!objects?.length && (
        <NoData>
          <Trans id="table.empty" />
        </NoData>
      )}
    </>
  )
}

const NoData = styled.div`
  color: var(--color-semi-gray);

  font-size: 15px;
  margin: 15px 0;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin: 30px 0;
  }
`

const TableStyles = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`
