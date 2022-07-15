import styled from 'styled-components'

const ButtonDiv = styled.div`
display: flex;
height: 10vh;
justify-content: flex-end;
width: fit-content;
`

const ButtonLogout = styled.button`
width: 130px;
border: none;
background: transparent;
color: white;
font-family: 'Poppins';
font-weight: 500;
cursor: pointer;
transition: 0.2s;

&:hover {
color: #C13216;
}
`

const ButtonContinue = styled.button`
font-family: 'Poppins';
font-weight: 500;
width: 130px;
background-color: white;
border: none;
color: #C13216;
align-items: center;
cursor: pointer;
transition: 0.2s;

&:hover {
    color: #C13216;
    background-color: transparent;
}
`

export { ButtonContinue, ButtonLogout, ButtonDiv }