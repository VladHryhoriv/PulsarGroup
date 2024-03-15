import { FC } from 'react'
import styled from 'styled-components'

export interface ImageProps extends Partial<HTMLImageElement> {
  src: string
  className?: string
  alt: string
}

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
` as FC<ImageProps>
