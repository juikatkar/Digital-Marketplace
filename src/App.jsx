import { Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

import Login from "./components/Login"
import Products from "./components/Products"
import Cart from "./components/Cart"

const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={user ? <Products /> : <Navigate to="/login" />}
      />

      <Route
        path="/cart"
        element={user ? <Cart /> : <Navigate to="/login" />}
      />
    </Routes>
  )
}

export default App