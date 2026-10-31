import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Contato() {
  const { state } = useLocation()
  const defaultMessage = state?.subject
    ? `Olá! Tenho interesse no pacote "${state.subject}".`
    : ''

  return (
    <section className="page page--narrow">
      <PageHeader
        title="Fale com a gente"
        highlight="agora"
        description="Tire dúvidas ou peça uma cotação personalizada."
      />
      <ContactForm defaultMessage={defaultMessage} />
    </section>
  )
}
