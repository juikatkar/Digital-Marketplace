import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { AuthContext } from "../context/AuthContext"

const Header = ({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  sortBy,
  setSortBy
}) => {
  const { cart } = useContext(CartContext)
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const formatCategory = (value) => {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 px-6 py-4">
        <h1
          className="
          font-bold text-2xl text-indigo-600
          cursor-pointer
          transition-all duration-300
          hover:text-purple-800
          hover:scale-110
          "
        >
          Digital Marketplace
        </h1>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="
            border rounded-lg px-4 py-2 w-56
            focus:outline-none ring-2 ring-purple-400
            focus:ring-2 focus:ring-indigo-600
            shadow-sm
            transition-all duration-300
            hover:shadow-lg
            "
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
            border rounded-lg px-3 py-2
            focus:outline-none ring-2 ring-purple-400
            focus:ring-2 focus:ring-indigo-600
            shadow-sm
            transition-all duration-300
            hover:shadow-lg
            cursor-pointer
            "
          >
            <option value="all">All Categories</option>

            {categories.map((c) => (
              <option key={c} value={c}>
                {formatCategory(c)}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="
            border rounded-lg px-3 py-2
            focus:outline-none ring-2 ring-purple-400
            focus:ring-2 focus:ring-indigo-600
            shadow-sm
            transition-all duration-300
            hover:shadow-lg
            cursor-pointer
            "
          >
            <option value="default">Default Sorting</option>
            <option value="az">Alphabet A-Z</option>
            <option value="priceLowHigh">Price Low to High</option>
            <option value="priceHighLow">Price High to Low</option>
            <option value="ratingHighLow">Rating High to Low</option>
          </select>
        </div>

        <div className="flex gap-6 items-center font-semibold">
          <Link
            to="/"
            className="
            text-indigo-600
            px-3 py-2 rounded-lg
            transition-all duration-300
            hover:bg-indigo-100
            hover:text-indigo-700
            hover:scale-110
            hover:shadow-md
            "
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="
            text-indigo-600
            px-3 py-2 rounded-lg
            relative
            transition-all duration-300
            hover:bg-indigo-100
            hover:text-indigo-700
            hover:scale-110
            hover:shadow-md
            "
          >
            Cart

            {totalItems > 0 && (
              <span
                className="
                absolute -top-2 -right-3
                bg-red-500 text-white
                text-xs px-2 py-1 rounded-full
                shadow
                "
              >
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={handleLogout}
            className="
            text-red-500
            px-3 py-2 rounded-lg
            transition-all duration-300
            hover:bg-red-100
            hover:text-red-600
            hover:scale-110
            hover:shadow-md
            "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header