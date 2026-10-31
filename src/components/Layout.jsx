import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './Footer.jsx'

// Estrutura comum: conteúdo da página (Outlet) + rodapé com navegação.
export default function Layout() {
  const { pathname } = useLocation()

  // Volta ao topo a cada troca de página.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="layout">
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
