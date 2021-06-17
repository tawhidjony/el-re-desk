import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import AllRoute from './Routes/AllRoute'
const App = () => {
  return (
    <BrowserRouter>
      <AllRoute />
    </BrowserRouter>
  )
}

export default App
