import type { Goal as GoalType } from '../App.tsx'
import type { ReactNode } from 'react'
import Goal from './Goal.tsx'
import InfoBox from './InfoBox.tsx'

const MAX_GOALS = 4

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

  if (goals.length >= MAX_GOALS) {
    warningBox = (
      <InfoBox mode='warning'>
        You are collecting a lot of goals. Don't put too much on your plate.
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
