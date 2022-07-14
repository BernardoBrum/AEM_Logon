import styled from "styled-components";

const TextStyled = styled.section`
margin-top: 6%;
margin-right: 6%;
`;

const Title = styled.h1`
font-size: ${props => props.size};
line-height: ${props => props.height};
font-weight: 700;
text-align: right;
color: #C12D18;
margin: 0;
`

const Paragraph = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 36px;
text-align: right;
color: #222222;
margin: 0;
`

export { TextStyled, Paragraph, Title };
