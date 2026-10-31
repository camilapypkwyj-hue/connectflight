// Cabeçalho padrão das telas internas (Destinos, Ofertas, Contato).
export default function PageHeader({ title, highlight, description }) {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        {title} {highlight && <span className="highlight">{highlight}</span>}
      </h1>
      {description && <p className="page-header__description">{description}</p>}
    </header>
  )
}
