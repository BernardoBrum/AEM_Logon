import { FooterStyled } from "./footer.styled";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import Button from "../../components/Button/button";
import Counter from "../../components/Counter/counter";
import { useHistory } from "react-router-dom";

const Footer = ({ text }) => {
  const history = useHistory();

  const Reset = () => {
    localStorage.setItem("Name", "reset")
  }

  const Logout = () => {
    history.push("/content/reactapp/us/en/login.html?wcmmode=disabled");
    window.location.reload()
    localStorage.clear()
  };

  return (
    <FooterStyled>
      <div className="left">
        <p>{text}</p>
      </div>
      <div className="right">
        <span>
          Application
          <br />
          refresh in
        </span>
        <Counter />
      </div>
      <Button reset={Reset} logout={Logout} />
    </FooterStyled>
  );
};

export default MapTo("reactapp/components/content/footer")(Footer);
