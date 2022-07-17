import styled from "styled-components";

const TextStyled = styled.section`
  margin-top: 6%;
  margin-right: 6%;
`;

const Title = styled.h1`
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.height};
  font-weight: 700;
  text-align: right;
  color: #c12d18;
  margin: 0;

  @media (max-width: 1520px) {
    font-size: 40px;
    line-height: 60px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: right;
  color: #222222;
  margin: 0;

  @media (max-width: 1520px) {
    font-size: 20px;
    line-height: 20px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export { TextStyled, Paragraph, Title };
