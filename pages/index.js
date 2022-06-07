import Head from 'next/head'
import axios from 'axios'
import Cards from '../components/Cards'


export default function Home({movies}) {
   console.log(movies)
  //  const results = {movies}
  return (
    <div>
      <Head>
        <title>Cinema app</title>
        <meta name="description" content="movies, Actors, Ratings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
      <Cards movies={movies.results} />  
      </main>

         
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)

  const movies = await res.data
  console.log(movies)
  return {
    props: {
      movies
    }
  }
}
