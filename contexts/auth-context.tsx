'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type UserRole = 'student' | 'professor' | 'hr' | null
type User = {
  id: string
  name: string
  email: string
  role: UserRole
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const signup = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email,
        role,
      }
      
      // Store user data with role
      localStorage.setItem('userCredentials', JSON.stringify({ email, password, role }))
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Get stored credentials
      const storedCredentials = localStorage.getItem('userCredentials')
      if (!storedCredentials) {
        throw new Error('User not found')
      }

      const credentials = JSON.parse(storedCredentials)
      if (credentials.email !== email || credentials.password !== password) {
        throw new Error('Invalid credentials')
      }

      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email,
        role: credentials.role,
      }

      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

