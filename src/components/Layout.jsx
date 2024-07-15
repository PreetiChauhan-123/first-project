import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <article>
    <Toaster></Toaster>
    <Outlet/>
    </article>
  )
}

export default Layout