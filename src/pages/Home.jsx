import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import endpoints from '../Services/MovieServices'

function Home() {
  return (
    <div>
       <Hero/>
       <MovieRow title='upcoming' url={endpoints.upcoming}/>
       <MovieRow title='trending' url={endpoints.trending}/>
       <MovieRow  title='top rated' url={endpoints.toprated}/>
       <MovieRow title='comedy' url={endpoints.comedy}/>
       <MovieRow title='popular' url={endpoints.popular}/>

    </div>
  )
}

export default Home