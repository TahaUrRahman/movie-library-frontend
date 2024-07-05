import React from 'react'

interface Movie {
  id: number,
  movie: string,
  rating: number,
  image: string,
}

const MoviesPage = async () => {
  const res = await fetch('https://dummyapi.online/api/movies',
    // Add following only if you think the same route changes its behavior often and you always want a fresh copy of data
    // fetching only works in fetch function. It wont work in other libs for example axios.
    { cache: 'no-store' }
    // You can also configure a job i.e. run the endpoint every certian period of time to refresh the data e.g 10s
    // {next: {revalidate: 10}}

  )
  const posts: Movie[] = await res.json()

  return (
    <>
      <h1>Movies: </h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.movie}</li>)}
      </ul>
    </>
  )
}

export default MoviesPage