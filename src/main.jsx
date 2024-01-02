import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from '../src/store/user/user-slice.js'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Register } from './pages/Register/Register.jsx'
import { RegistrationConfirmation } from './pages/RegistrationConfirmation/RegistrationConfirmation.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { EditProfile } from './pages/EditProfile/EditProfile.jsx'
import userSlice from './store/user/user-slice.js'


// 1. Combine the reducers (slices content) into a single reducer
const rootReducer = combineReducers({
    user: userReducer,
})

// 2. Create a basic configuration to tell redux to use the local storage
const persistConfig = {
  key: 'root',
  storage: storage,
}

// 3. Persist the combined reducers object
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 4. Send the persisted reducer to the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
 })

// 5. Create a persisted version of the store
const persistor = persistStore(store)

// Use the PersistGate component to give the app access to the persisted store




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
        </PersistGate>
    </Provider>
  </React.StrictMode>,
)
