import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Destinos from './pages/Destinos.jsx'
import Ofertas from './pages/Ofertas.jsx'
import Contato from './pages/Contato.jsx'
import NotFound from './pages/NotFound.jsx'

// Rotas da aplicação. O Layout renderiza o rodapé de navegação em todas as telas.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destinos" element={<Destinos />} />
        <Route path="ofertas" element={<Ofertas />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
