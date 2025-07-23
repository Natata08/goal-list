type GoalProps = {
  title: string
  description: string
}

export default function Goal({ title, description }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Delete</button>
      </div>
    </article>
  )
}
