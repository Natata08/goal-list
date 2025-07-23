import Goal from './components/Goal.tsx'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header.tsx'
import { useState } from 'react'

type Goal = {
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

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
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
    </main>
  )
}
