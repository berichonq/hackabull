import { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase.js'

export const Context = createContext()

export function AuthContext({ children }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
        })
        return () => {
            if (unsubscribe) {
                unsubscribe()
            }
        }
    }, [])

    const values = {
        user: user,
        setUser: setUser
    }

    return <Context.Provider value={values}>
        { !loading && children }
    </Context.Provider>
}