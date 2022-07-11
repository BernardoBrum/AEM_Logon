import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  color: #e0e0e0;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #e0e0e0;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 2px #e0e0e0;
  border-radius: 30px;
  margin-bottom: 6%;
  padding: 4%;
`;
export { InputStyled, InputDiv };
