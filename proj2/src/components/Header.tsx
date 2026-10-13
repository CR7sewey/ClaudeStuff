import { NavLink } from 'react-router-dom'
import { routes } from '../routes'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav>
        {routes.map(({ path, label }) => (
          <NavLink key={path} to={path} end>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
