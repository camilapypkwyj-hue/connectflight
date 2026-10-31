import { NavLink } from 'react-router-dom'

const links = [
  { to: '/destinos', label: 'Destinos' },
  { to: '/ofertas', label: 'Ofertas' },
  { to: '/contato', label: 'Contato' },
]

export default function FooterNav() {
  return (
    <nav className="footer-nav" aria-label="Navegação principal">
      <ul className="footer-nav__list">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `footer-nav__link${isActive ? ' footer-nav__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
