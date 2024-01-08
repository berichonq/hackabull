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

import { AuthContext } from './context/AuthContext.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Protected } from './pages/Protected.jsx'
import { Anonymous } from './pages/Anonymous.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Register } from './pages/Register/Register.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { EditProfile } from './pages/EditProfile/EditProfile.jsx'
import { PageNotFound } from './pages/PageNotFound/PageNotFound.jsx'
import { PasswordReset } from './pages/PasswordReset/PasswordReset.jsx'


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
    <AuthContext>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />}>
                <Route exact path='/' element={<Home />}/>
                <Route path='*' element={<PageNotFound />}/>

                {/*Only anonymous users can access*/}
                <Route exact path='/register' element={<Anonymous><Register /></Anonymous>}/>
                <Route exact path='/login' element={<Anonymous><Login /></Anonymous>}/>
                <Route exact path='/password-reset' element={<Anonymous><PasswordReset /></Anonymous>}/>

                {/*Only authenticated users can access*/}
                <Route exact path='/profile' element={<Protected><Profile /></Protected>}/>
                <Route exact path='/profile/edit' element={<Protected><EditProfile /></Protected>}/>
              </Route>
            </Routes>
          </BrowserRouter>
          </PersistGate>
      </Provider>
    </AuthContext>
  </React.StrictMode>,
)
