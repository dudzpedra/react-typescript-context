import logo from "../../../assets/logo.png";
import Title from "../Title";
import UIButton from "../UIButton";
import UIModal from "../UIModal";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo Typescript" />
      <Title title="Typescript and Context API App" />
      <UIModal>
          <UIButton label="Home" />
          <UIButton label="About" />
          <UIButton label="Contact" />
      </UIModal>
    </div>
  );
};

export default Header;
