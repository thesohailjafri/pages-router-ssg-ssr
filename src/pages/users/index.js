import Link from 'next/link'

export async function getStaticProps() {
  // get 10 users
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // parse json
  const users = await res.json()
  return {
    props: { users },
  }
}

export default function Users({ users }) {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Users</h1>
      <hr 
			className='my-2'
			/>
      {users.map((user) => (
        <div key={user.id} className="py-2">
          <Link className="text-2xl" href={`/users/${user.id}`}>
            {user.name}
          </Link>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
