import styled from "styled-components";

const ContentStyled = styled.section`
  display: flex;
  height: 80vh;
  justify-content: space-between;
  max-height: 900px;

  div {
    display: flex;
    align-items: flex-end;
    margin-right: 1%;

    @media (max-width: 900px) {
      margin-right: 5%;
    }
  }

  @media (max-width: 1520px) {
    img {
      height: 50vh;
    }
  }

  @media (max-width: 900px) {
    img {
      max-width: 100%;
    }
  }
`;

export { ContentStyled };