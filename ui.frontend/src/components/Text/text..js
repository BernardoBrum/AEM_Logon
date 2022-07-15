import React from 'react'
import { TextStyled, Paragraph, Title } from './text.styled'

const Text = ({text1, text2, text3, text4, p1, p2, p3, p4}) => {
  return (
    <TextStyled>
    <Title size="36px" height="36px">{text1}</Title>
    <Paragraph>{p1}</Paragraph>
    <Title size="64px" height="60px">{text2}</Title>
    <Paragraph>{p2}</Paragraph>
    <Title size="64px" height="80px">{text3}</Title>
    <Paragraph>{p3}</Paragraph>
    <Title size="64px" height="90px">{text4}</Title>
    <Paragraph>{p4}</Paragraph>
    </TextStyled>
  )
}

export default Text