import styled from "styled-components";

const CounterStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
  width: 20%;

  h1 {
    font-size: 48px;
    font-weight: 600;
    color: white;
    margin: 0;
    line-height: 44px;
  }

  span {
    font-size: 14px;
    font-weight: 300;
    margin: 0;
    color: white;
    text-align: right;
    line-height: 14px;
  }
`;

export { CounterStyled };
