import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import cn from './style.module.scss'
function Header() {
  return (
    <nav className={cn.header}>
      <div>Logo</div>
      <div>
        <ul>
          <li>
            <Link to={ROUTE_CONSTANTS.CART}>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {};

export default Header;
