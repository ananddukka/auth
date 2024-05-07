import {Link} from 'react-route-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <Link to="/about" className="nav-link">
        about
      </Link>
    </ul>
  </div>
)

export default Header
