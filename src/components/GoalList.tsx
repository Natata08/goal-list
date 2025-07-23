import Goal from './Goal.tsx'
import type { Goal as GoalType } from '../App.tsx'

type GoalListProps = {
  goals: GoalType[]
  onDeleteGoal: (id: number) => void
}

export default function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  return (
    <ul>
      {goals.map(({ title, description, id }) => {
        return (
          <li key={id}>
            <Goal id={id} title={title} onDelete={onDeleteGoal}>
              <p>{description}</p>
            </Goal>
          </li>
        )
      })}
    </ul>
  )
}
