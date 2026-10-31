import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Button from '../components/Button.jsx'
import { destinations } from '../data/destinations.js'

const filters = [
  { value: 'todos', label: 'Todos' },
  { value: 'nacional', label: 'Nacionais' },
  { value: 'internacional', label: 'Internacionais' },
]

export default function Destinos() {
  const [filter, setFilter] = useState('todos')

  const visible =
    filter === 'todos' ? destinations : destinations.filter((d) => d.scope === filter)

  return (
    <section className="page">
      <PageHeader
        title="Escolha seu"
        highlight="destino"
        description="Roteiros nacionais e internacionais para todos os gostos."
      />

      <div className="filters" role="group" aria-label="Filtrar destinos">
        {filters.map(({ value, label }) => (
          <Button
            key={value}
            variant={filter === value ? 'primary' : 'ghost'}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </Button>
        ))}
      </div>

      {visible.length === 0 ? (
        <EmptyState
          message="Nenhum destino encontrado."
          action={<Button onClick={() => setFilter('todos')}>Ver todos</Button>}
        />
      ) : (
        <div className="grid">
          {visible.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      )}
    </section>
  )
}
