import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/images/logo-icon.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
