import { NavLink } from 'react-router-dom'

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#000',
  },
  activeLink: {
    color: '#f5929f',
  },
}
const Navigation = () => (
  <nav>
    <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>
    <NavLink to="/library" style={styles.link} activeStyle={styles.activeLink}>
      Library
    </NavLink>
  </nav>
)

export default Navigation
