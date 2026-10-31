// Estado vazio reutilizável (ex.: nenhum resultado para o filtro escolhido).
export default function EmptyState({ message, action }) {
  return (
    <div className="empty-state" role="status">
      <p>{message}</p>
      {action}
    </div>
  )
}
