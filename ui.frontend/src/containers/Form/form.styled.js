import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-height: 1080px;

  svg {
    color: white;
    font-size: 20px;
  }

  h2 {
    font-weight: 400;
    font-size: 30px;
    color: #e0e0e0;
    margin-top: 25%;
  }

  h3 {
    color: #e9b425;
    text-align: center;
    visibility: hidden;
    font-size: 16px;
  }

  button {
    background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    margin-top: 5%;
    width: 100%;
    color: white;
    font-size: 18px;
    font-weight: 400;
    border: 0;
    height: 65px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
      border: #ff2d04 solid 1px;
      background: transparent;
      color: #ff2d04;
    }
  }
`;

export { FormStyled };
