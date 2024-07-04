import React from 'react'

interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}

const MoviesPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    // Add following only if you think the same route changes its behavior often and you always want a fresh copy of data
    // fetching only works in fetch function. It wont work in other libs for example axios.
    {cache: 'no-store'}
    // You can also configure a job i.e. run the endpoint every certian period of time to refresh the data e.g 10s
    // {next: {revalidate: 10}}
  
  )
  const posts:Post[] = await res.json()

  return (
    <>
      <h1>Posts: </h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  )
}

export default MoviesPage