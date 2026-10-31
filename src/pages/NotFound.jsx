import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <section className="page page--narrow">
      <PageHeader title="Página não" highlight="encontrada" />
      <p className="page-header__description">
        <Link to="/" className="link">Voltar para o início</Link>
      </p>
    </section>
  )
}
