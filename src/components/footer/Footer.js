import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="img-copyright flex-center">
        <i className="fi fi-rr-copyright"></i>
      </div>
      <div className="footer-logo flex-center">Xpense tracker</div>
      <div className="footer-logo-icon flex-center">
        <i className="fi fi-rr-credit-card"></i>
      </div>
    </div>
  );
};

export default Footer;
