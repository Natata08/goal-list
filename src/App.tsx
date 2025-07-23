import { useState } from 'react'

import goalsImg from './assets/goals.jpg'
import Header from './components/Header.tsx'
import GoalList from './components/GoalList.tsx'

export type Goal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: 'Learn something new',
        description: 'Learn it in depth',
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
      <button onClick={handleAddGoal}>Add Goal</button>
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}
