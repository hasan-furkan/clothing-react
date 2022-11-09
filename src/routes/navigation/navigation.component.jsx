import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";

import "./navigation.styles.scss"

import {ReactComponent as Crwnlogo} from "../../assets/crown.svg";

const Navigation = () => {
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
                    <Link to="/sign-in" className="nav-link">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation