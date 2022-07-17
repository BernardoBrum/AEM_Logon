import React from "react";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import { FormStyled } from "./form.styled";
import Input from "../../components/Input/input";
import Title from "../../components/Title/title";
import Error from "../../components/Error/error";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = ({ text1, text2 }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [visibility, setVisibility] = useState("hidden");

  const UserValidate = () => {
    if (user === "admin" && password === "admin") {
      history.push("/content/reactapp/us/en/home.html?wcmmode=disabled");
      window.location.reload()
    } else {
      setVisibility("visible");
    }
  };

  return (
    <FormStyled>
      <div>
        <Title text1={text1} text2={text2} />
        <h2>Login</h2>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Usuário"
        >
          <AiOutlineUser />
        </Input>
        <Input
          onChange={(e) => setUser(e.target.value)}
          placeholder="Senha"
          type="password"
        >
          <BiLockAlt />
        </Input>
      </div>
      <Error visibility={visibility} />
      <button onClick={UserValidate}>Continuar</button>
    </FormStyled>
  );
};

export default MapTo("reactapp/components/content/form")(Form);
