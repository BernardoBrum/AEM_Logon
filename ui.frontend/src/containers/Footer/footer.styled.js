import styled from "styled-components";

const FooterStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  height: 10vh;
  width: 100%;
  bottom: 0;

  .left {
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
  }

  .right {
    display: flex;
    align-items: center;
    border-left: 1px solid white;
    box-sizing: border-box;
    padding-left: 8%;
    width: 40%;

    @media (max-width: 1500px) {
      padding-left: 2%;
    }

    @media (max-width: 900px) {
      display: none;
    }
    padding-right: 5%;
    padding-left: 5%;
  }

  p {
    text-align: right;
    font-size: 12px;
    color: white;
    font-weight: 300;
    margin: 0;
    margin-right: 4%;
    width: 56%;

    @media (max-width: 1500px) {
      width: 90%;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  span {
    font-size: 14px;
    font-weight: 300;
    margin: 0;
    color: white;
    text-align: right;
  }
`;
export { FooterStyled };
