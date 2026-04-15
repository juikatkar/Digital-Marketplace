import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(localStorage.getItem("user"))

  const login = (email, password) => {
    if (email === "juikatkar@gmail.com" && password === "setup") {
      localStorage.setItem("user", email)
      setUser(email)
      return true
    }
      return false
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}