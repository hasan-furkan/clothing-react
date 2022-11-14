import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import "./navigation.styles.scss";

import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Crwnlogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
