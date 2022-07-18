import styled from "styled-components";

const HeaderStyled = styled.section`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1% 2%;

  @media (max-width: 768px) {
    img {
      height: 7vh;
    }
  }
`;

export { HeaderStyled };
