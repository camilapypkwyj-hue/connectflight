import Button from './Button.jsx'

const formatPrice = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Card de oferta: preço, desconto e itens incluídos no pacote.
export default function OfferCard({ offer, onSelect }) {
  const { title, nights, includes, price, oldPrice } = offer
  const discount = Math.round((1 - price / oldPrice) * 100)

  return (
    <article className="card card--offer">
      <span className="badge" aria-label={`${discount}% de desconto`}>
        -{discount}%
      </span>
      <h3 className="card__title">{title}</h3>
      <p className="card__meta">{nights} noites</p>
      <ul className="card__list">
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="card__price">
        <s className="card__old-price">{formatPrice(oldPrice)}</s>
        <strong>{formatPrice(price)}</strong>
        <span className="card__per">por pessoa</span>
      </p>
      <Button onClick={() => onSelect(offer)}>Tenho interesse</Button>
    </article>
  )
}
