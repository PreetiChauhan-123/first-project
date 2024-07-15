import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <article className='landing'>
    <NavBar/>
    <section className='landingchild'>
    <Outlet/>
    </section>
    </article>
  )
}

export default LandingPage