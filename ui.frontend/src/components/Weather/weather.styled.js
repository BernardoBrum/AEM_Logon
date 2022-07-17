import styled from "styled-components";

const WeatherStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 48px;
    color: #222222;
    margin: 0;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    color: #222222;
    margin: 0;
  }
`;

export { WeatherStyled };
