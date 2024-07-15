import React from 'react'
import ContextApi from './GlobalContext/ContextApi'
import { RouterProvider } from 'react-router-dom'
import { routes } from './projectRoutes/ProjectRoutes'
import "./style.css"
import Data from './components/Data'


const App = () => {
  return (
    <ContextApi>
    <Data/>
    <RouterProvider router ={routes}></RouterProvider>
    </ContextApi>
  )
}

export default App