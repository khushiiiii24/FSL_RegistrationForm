import fsl_logo from "../assets/fsl_logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-section">
        <img src={fsl_logo} alt="FSL Logo" className="fsl-logo" />
      </div>
      <nav className="nav-section">
        <span>Home</span>
        <span>About</span>
        <span>Blog</span>
        <span>Contact Us</span>
        <button className="login-button">Login</button>
      </nav>
    </header>
  );
}

export default Header;
