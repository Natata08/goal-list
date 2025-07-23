import Goal from './Goal.tsx'

type GoalListProps = {
  goals: {
    title: string
    description: string
    id: number
  }[]
}

export default function GoalList({ goals }: GoalListProps) {
  return (
    <ul>
      {goals.map(({ title, description, id }) => {
        return (
          <li key={id}>
            <Goal title={title}>
              <p>{description}</p>
            </Goal>
          </li>
        )
      })}
    </ul>
  )
}
