import { useRef, useState, useEffect, type FormEvent } from 'react'

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<{ goal?: string; summary?: string }>({})

  useEffect(() => {
    goal.current?.focus()
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goal.current!.value.trim()
    const enteredSummary = summary.current!.value.trim()

    const newErrors: { goal?: string; summary?: string } = {}
    if (!enteredGoal) {
      newErrors.goal = 'Goal title is required'
    }
    if (!enteredSummary) {
      newErrors.summary = 'Summary is required'
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      event.currentTarget.reset()
      onAddGoal(enteredGoal, enteredSummary)
      goal.current?.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          id='goal'
          type='text'
          ref={goal}
          className={errors.goal ? 'input-error' : ''}
        />
        {errors.goal && <span className="error-message">{errors.goal}</span>}
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input
          id='summary'
          type='text'
          ref={summary}
          className={errors.summary ? 'input-error' : ''}
        />
        {errors.summary && <span className="error-message">{errors.summary}</span>}
      </p>
      <p>
        <button type='submit'>Add goal</button>
      </p>
    </form>
  )
}
