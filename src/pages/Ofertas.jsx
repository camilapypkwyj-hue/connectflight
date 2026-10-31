import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import OfferCard from '../components/OfferCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { offers } from '../data/offers.js'

export default function Ofertas() {
  const navigate = useNavigate()

  // Leva o interesse para a tela de contato já com a mensagem preenchida.
  const handleSelect = (offer) => {
    navigate('/contato', { state: { subject: offer.title } })
  }

  return (
    <section className="page">
      <PageHeader
        title="Ofertas com preços"
        highlight="arrasadores"
        description="Pacotes completos com passagem, hotel, café da manhã e seguro viagem."
      />

      {offers.length === 0 ? (
        <EmptyState message="Nenhuma oferta disponível no momento." />
      ) : (
        <div className="grid">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onSelect={handleSelect} />
          ))}
        </div>
      )}
    </section>
  )
}
