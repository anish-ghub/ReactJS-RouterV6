import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AllMeetupsPage from './Pages/AllMeetups'
import NewMeetupPage from './Pages/NewMeetup'
import FavouritesPage from './Pages/Favourites'
import Layout from './Components/Layout/Layout'


const App = () => {
  return (
    <Layout>
    
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>} />
        <Route path='/new-meetup' element={<NewMeetupPage/>} />
        <Route path='/favourites' element={<FavouritesPage/>} />
      </Routes>

    </Layout>
  )
}

export default App
