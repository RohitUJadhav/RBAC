import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/tailwind.css'

import UpdateUser from '../components/userMgmt/UpdateUser'
import Users from '../components/userMgmt/Users'
import Dashboard from '../Pages/Dashboard'
import Creatuser from '../components/userMgmt/Createuser'
import CreateRole from '../components/roleMgmt/CreateRole'
// import rUsers from '../components/roleMgmt/RUsers'
import RUsers from '../components/roleMgmt/RUsers'
// import RUsers from '../components/roleMgmt/RUsers'



function App() {
  const [count, setCount] = useState(0)
  axios.post("https://api-beta-ochre-50.vercel.app")
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/create' element={<Creatuser/>}></Route>
      <Route path='/update/:id' element={<UpdateUser/>}></Route>
      <Route path='/Users' element={<Users/>}></Route>
      <Route path='/role' element={<RUsers/>}></Route>
      <Route path='/createRole' element={<CreateRole/>}></Route>
      
     
    </Routes>
    </BrowserRouter>
    
   </div>
  )
}

export default App
