import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet, useLocation } from 'react-router-dom'

const HomePage = () => {

  let data = useLocation();
  console.log(data)
  return (
    <section className='home'>
    <SideBar info ={data.state}></SideBar>
    <article className='homechild'>
    <Outlet/>
    </article>
    </section>
  )
}

export default HomePage