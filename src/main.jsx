import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from '../src/store/user/user-slice.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Register } from './pages/Register/Register.jsx'
import { RegistrationConfirmation } from './pages/RegistrationConfirmation/RegistrationConfirmation.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { EditProfile } from './pages/EditProfile/EditProfile.jsx'
import userSlice from './store/user/user-slice.js'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/register' element={<Register />}/>
            <Route exact path='/register/confirmation' element={<RegistrationConfirmation />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/profile' element={<Profile />}/>
            <Route exact path='/profile/edit' element={<EditProfile />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
