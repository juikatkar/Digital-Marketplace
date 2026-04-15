import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { AuthContext } from "../context/AuthContext"

const Header = () => {

  const { cart } = useContext(CartContext)
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="bg-white shadow sticky top-0  bg-gradient-to-br from-white-400 via-white-200">

      <div className="max-w-7xl mx-auto flex justify-between p-4">

        <h1 className="font-bold text-xl text-indigo-500 bg-hover:bg-indigo-100 px-2 py-2 rounded-lg transition duration-200 hover:shadow-lg">
          Digital Marketplace
        </h1>

        <div className="flex gap-6 items-center font-bold text-indigo-500 ">

          <Link className = "bg-hover:bg-indigo-100 px-2 py-2 rounded-lg transition duration-200 hover:shadow-lg" to="/">Home</Link>

          <Link className = "bg-hover:bg-indigo-100 px-2 py-2 rounded-lg transition duration-200 hover:shadow-lg" to="/cart">
            Cart ({totalItems})
          </Link>

          <button onClick={handleLogout} className="text-red-500 font-bold bg-hover:bg-indigo-100 px-2 py-2 rounded-lg transition duration-200 hover:shadow-lg">
            Logout
          </button>

        </div>

      </div>

    </div>
  )
}

export default Header