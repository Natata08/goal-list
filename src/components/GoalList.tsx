import type { Goal as GoalType } from '../App.tsx'
import type { ReactNode } from 'react'
import Goal from './Goal.tsx'
import InfoBox from './InfoBox.tsx'

const GOAL_THRESHOLDS = {
  LOW_WARNING: 3,
  MEDIUM_WARNING: 5,
  HIGH_WARNING: 8
}

type GoalListProps = {
  goals: GoalType[]
  onDeleteGoal: (id: number) => void
}

export default function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>You have no goals yet. Start adding some!</InfoBox>
    )
  }

  let warningBox: ReactNode
  const goalCount = goals.length

  if (goalCount >= GOAL_THRESHOLDS.HIGH_WARNING) {
    warningBox = (
      <InfoBox mode='warning' severity='high'>
        🚨 You have {goalCount} goals! This might be overwhelming. Consider focusing on your top priorities first.
      </InfoBox>
    )
  } else if (goalCount >= GOAL_THRESHOLDS.MEDIUM_WARNING) {
    warningBox = (
      <InfoBox mode='warning' severity='medium'>
        ⚠️ You're managing {goalCount} goals. Make sure you can realistically achieve them all.
      </InfoBox>
    )
  } else if (goalCount >= GOAL_THRESHOLDS.LOW_WARNING) {
    warningBox = (
      <InfoBox mode='warning' severity='low'>
        💡 You have {goalCount} goals. Great start! Remember to stay focused on what matters most.
      </InfoBox>
    )
  }

  return (
    <>
      {warningBox}
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
    </>
  )
}
