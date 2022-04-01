import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.NavLink} activeClassName={s.activeLink}>
      Home
    </NavLink>
    <NavLink to="/library" className={s.NavLink} activeClassName={s.activeLink}>
      Library
    </NavLink>
  </nav>
)

export default Navigation
