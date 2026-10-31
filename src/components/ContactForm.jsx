import { useState } from 'react'
import Button from './Button.jsx'

const initialValues = { name: '', email: '', message: '' }

// Validação simples no cliente (a validação real deve ser repetida no servidor).
function validate({ name, email, message }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Informe seu nome.'
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Informe um e-mail válido.'
  if (message.trim().length < 10) errors.message = 'Escreva ao menos 10 caracteres.'
  return errors
}

// Estados: idle, loading (envio simulado), success.
export default function ContactForm({ defaultMessage = '' }) {
  const [values, setValues] = useState({ ...initialValues, message: defaultMessage })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('loading')
    // Simulação de envio: em produção, chamaria uma API.
    setTimeout(() => setStatus('success'), 900)
  }

  const handleReset = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <h2>Mensagem enviada!</h2>
        <p>Obrigado, {values.name}. Retornaremos para {values.email} em breve.</p>
        <Button variant="ghost" onClick={handleReset}>
          Enviar outra mensagem
        </Button>
      </div>
    )
  }

  const isLoading = status === 'loading'

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <Field id="name" label="Nome" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
      </Field>
      <Field id="email" label="E-mail" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
      </Field>
      <Field id="message" label="Mensagem" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
      </Field>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <span id={`${id}-error`} className="field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
