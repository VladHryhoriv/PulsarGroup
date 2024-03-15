import { ThemeProps } from 'entities/theme/types'
import { FC, useState } from 'react'
import styled from 'styled-components'

interface IProps {
  question: string
  answer: string
}

export const FAQItem: FC<IProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  const handleSetOpen = () => setOpen(!open)

  return (
    <>
      <Item open={open} onClick={handleSetOpen}>
        <div>{question}</div>
      </Item>
      <Ansewr open={open}>{answer}</Ansewr>
    </>
  )
}

const Item = styled.div<{ open: boolean }>`
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.buttons.ghostG.background};
  position: relative;
  color: inherit;
  cursor: pointer;
  height: 2rem;
  border-radius: 2rem;
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  font-size: 13px;
  // -------
  // gradient border
  box-shadow: 0 0 6px 0 rgba(141, 171, 185, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, rgba(141, 171, 185, 0.5), rgba(67, 45, 98, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;

  color: ${(props: ThemeProps) => props.theme.colors.buttons.ghostG.text};
  box-shadow: ${(props: ThemeProps) =>
    `2px 1000px 1px ${props.theme.colors.buttons.ghostG.background} inset`};
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    top: -10px;
    right: 0;
    border: 2px solid var(--color-dark-pink);
    border-radius: 30px;
    background: ${(props: ThemeProps & { open: boolean }) =>
      props.open
        ? 'var(--color-dark-pink)'
        : props.theme.colors.buttons.ghostG.background};
  }
`

const Ansewr = styled.p<{ open: boolean }>`
  max-height: ${(props) => (props.open ? '1000px' : 0)};
  transition: max-height
    ${(props) => (props.open ? '0.55s ease-in' : '0.35s ease-out')};
  color: inherit;
  overflow: hidden;
  padding-left: 10px;
  font-size: 12px;
  margin-bottom: 10px;
`
