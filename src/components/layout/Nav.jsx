import { NavLink } from "react-router-dom";
import { NavStyling } from "./Nav.styles";


function Nav() {
    return (
      <div>
         <NavStyling> 
        <ul>
          <li>
            <NavLink to="/">
              HOME
            </NavLink>
          </li>
        </ul> 
        </NavStyling>
      </div>
    );
}

export default Nav;