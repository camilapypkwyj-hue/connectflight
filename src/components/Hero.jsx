import HeroIllustration from './HeroIllustration.jsx'

// Bloco principal da Home: ilustração, título e texto de apresentação.
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroIllustration />
      <h1 id="hero-title" className="hero__title">
        O seu próximo <span className="highlight">destino</span> pode estar aqui...
      </h1>
      <p className="hero__lead">
        Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
      </p>
      <p className="hero__text">
        No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e
        internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem
        com <strong>preços arrasadores</strong>!
      </p>
      <p className="hero__text">
        Se você ainda não tem um destino definido, confira nossa seção de ofertas.
      </p>
    </section>
  )
}
