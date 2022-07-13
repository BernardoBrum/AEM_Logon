import React from "react";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import { FormStyled } from "./form.styled";
import Input from "../../components/Input/input";
import Title from "../../components/Title/title";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const Form = ({ text1, text2 }) => {
  return (
    <FormStyled>
      <div>
        <Title text1={text1} text2={text2} />
        <h2>Login</h2>
        <Input placeholder="Usuário">
          <AiOutlineUser />
        </Input>
        <Input placeholder="Senha" type="password">
          <BiLockAlt />
        </Input>
      </div>
      <h3>
        Ops, usuário ou senha inválidos. <br /> Tente novamente
      </h3>
      <button>Continuar</button>
    </FormStyled>
  );
};

export default MapTo("reactapp/components/content/form")(Form);
