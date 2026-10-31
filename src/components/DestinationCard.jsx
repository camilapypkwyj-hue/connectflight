// Card de destino: nome, região, descrição e tag nacional/internacional.
export default function DestinationCard({ destination }) {
  const { name, region, description, scope } = destination

  return (
    <article className="card">
      <h3 className="card__title">{name}</h3>
      <p className="card__meta">{region}</p>
      <p className="card__text">{description}</p>
      <span className={`tag tag--${scope}`}>
        {scope === 'nacional' ? 'Nacional' : 'Internacional'}
      </span>
    </article>
  )
}
