export async function getServerSideProps({ params }) {
  const id = params.id
  const todosRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`,
  )
  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  )

  const todos = await todosRes.json()
  const user = await userRes.json()
  return {
    props: {
      todos,
      user,
    },
  }
}

export default function Todos({ todos, user }) {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">{user.name}'s Todos</h1>
      <hr className="my-2" />
      {todos.map((todo) => (
        <div key={todo.id} className="py-2">
          <h2 className="text-2xl">{todo.title}</h2>
          <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ))}
    </div>
  )
}
