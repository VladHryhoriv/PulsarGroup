import { CardTemplate } from 'shared/ui/atoms/card'
import styled from 'styled-components'

export const TableCardTemplate = styled(CardTemplate)`
  max-height: 530px;
  overflow: auto;
  padding: 0 10px;
  position: relative;

  max-width: 1255px;
  width: 100%;
  margin: 0 auto;

  box-sizing: border-box;

  margin-top: 30px;

  &::before {
    left: 0;
    right: 0;
    top: 0;
  }
  &::after {
    left: 0;
    right: 0;
    bottom: -1px;
  }

  &::after,
  &::before {
    content: '';
    position: sticky;
    height: 15px;
    display: block;
    background-color: inherit;
    z-index: 1;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 321px) {
    padding: 0 20px;
    &::after,
    &::before {
      height: 20px;
    }
  }

  @media only screen and (min-width: 769px) {
    padding: 0 91px;
    &::after,
    &::before {
      height: 52px;
    }
  }
`
