import type { ReactNode } from 'react'

type GoalProps = {
  title: string
  children: ReactNode
}

export default function Goal({ title, children }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        <button>Delete</button>
      </div>
    </article>
  )
}
