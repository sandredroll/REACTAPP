//  import React from 'react'
/*
import Navbar from './components/Navbar'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Classroom from './pages/Classroom';
import Assessment from './pages/Assessment';
import Store from './pages/Store';
import Calender from './pages/Calender';
import News from './pages/News';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
import Profile1 from './pages/Profile1';
import MyAccount from './pages/MyAccount';
import MySettings from './pages/MySettings';   
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/classroom' element={<Classroom/>}/>
            <Route path='/assessment' element={<Assessment/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/calender' element={<Calender/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/profile' element={<Profile1/>}>
                   <Route path='/profile/myaccount' element={<MyAccount/>}/>
                   <Route path='/profile/mysetting' element={<MySettings/>}/>
            </Route>
                
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>   
  )
}

export default App  */

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './crudcomponents/Home'
import Create from './crudcomponents/Create'
import Edit from './crudcomponents/Edit'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>

      <Route path='/edit/:userId' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App