import Link from 'next/link'

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // SSG
  const id = params.id
  // get 10 users
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  // parse json
  const user = await res.json()
  return {
    props: { user },
  }
}

export default function User({ user }) {
  return (
    <div className="">
      <h1 className="text-4xl pb-2 font-bold">{user.name}</h1>
      <hr className="my-2" />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <Link className="text-blue-500" href={`/users/${user.id}/todos`}>
        View Todos
      </Link>
    </div>
  )
}
