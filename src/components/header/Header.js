import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo flex-center">Xpense tracker</div>
      <div className="header-logo-icon flex-center">
        <i className="fi fi-rr-credit-card"></i>
      </div>
    </div>
  );
};

export default Header;
