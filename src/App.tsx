import { useState } from 'react'

import goalsImg from './assets/goals.jpg'
import Header from './components/Header.tsx'
import GoalList from './components/GoalList.tsx'
import NewGoal from './components/NewGoal.tsx'

export type Goal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}
