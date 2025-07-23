import Goal from './Goal.tsx'
import type { Goal as GoalType } from '../App.tsx'

type GoalListProps = {
  goals: GoalType[]
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
