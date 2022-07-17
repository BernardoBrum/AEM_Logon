import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  height: 10vh;
  justify-content: flex-end;
  width: fit-content;

  @media (max-width: 900px) {
    flex-direction: row-reverse;
    width: 100%;
  }
`;

const ButtonLogout = styled.button`
  width: 130px;
  border: none;
  background: transparent;
  color: white;
  font-family: "Poppins";
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #c13216;
  }
`;

const ButtonContinue = styled.button`
  font-family: "Poppins";
  font-weight: 500;
  width: 130px;
  background-color: white;
  border: none;
  color: #c13216;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 900px) {
    width: 100%;
  }

  &:hover {
    color: #c13216;
    background-color: transparent;
  }
`;

export { ButtonContinue, ButtonLogout, ButtonDiv };
