import { useContext } from "react"
import Header from "./Header"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useContext(CartContext)

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header
        search=""
        setSearch={() => {}}
        category="all"
        setCategory={() => {}}
        categories={[]}
        sortBy="default"
        setSortBy={() => {}}
      />

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-indigo-500">
          Cart Items
        </h2>

        {cart.length === 0 && (
          <p className="text-gray-600">Your cart is empty.</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 mb-3 flex flex-col md:flex-row justify-between items-center gap-4 rounded shadow"
          >
            <img
              src={item.thumbnail || item.image}
              alt={item.title}
              className="h-16 w-16 object-contain"
            />

            <p className="flex-1">{item.title}</p>

            <p className="font-semibold">${item.price}</p>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-bold hover:bg-red-100 px-2 py-1 rounded-lg transition duration-200 hover:shadow-lg"
            >
              Remove
            </button>
          </div>
        ))}

        <h3 className="text-xl font-bold mt-4 text-indigo-500">
          Total: ${total.toFixed(2)}
        </h3>
      </div>
    </div>
  )
}

export default Cart