import Goal from './components/Goal.tsx'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header.tsx'

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Goals</h1>
      </Header>
      <Goal title='Create a new app'>
        <p>Create a new project using React and TS</p>
      </Goal>
    </main>
  )
}
