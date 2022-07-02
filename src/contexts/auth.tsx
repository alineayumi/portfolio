import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential
} from 'firebase/auth'

import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect
} from 'react'

import { auth } from '../services/firebase_config'

interface Props {
  children?: ReactNode
}

interface UserCredentials {
  email?: string
  password?: string
}

interface AuthInterface {
  currentUser?: User | null
  signup: ({
    email,
    password
  }: UserCredentials) => Promise<UserCredential> | void
}

const AuthContext = createContext<AuthInterface>({
  signup: () => undefined
})

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const signup = ({
    email: email = '',
    password: password = ''
  }: UserCredentials) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser, signup: signup }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
