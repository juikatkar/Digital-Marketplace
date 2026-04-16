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
        setSearch={() => { }}
        category="all"
        setCategory={() => { }}
        categories={[]}
      />

      <div className="max-w-4xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-4 text-indigo-500">
          Cart Items
        </h2>

        {cart.map(item => (
          <div
            key={item.id}
            className="bg-white p-4 mb-3 flex justify-between items-center rounded"
          >

            <img src={item.image} className="h-16" />

            <p>{item.title}</p>

            <p>${item.price}</p>

            <div className="flex gap-2 items-center">

              <button onClick={() => decreaseQty(item.id)}>-</button>

              <span>{item.qty}</span>

              <button onClick={() => increaseQty(item.id)}>+</button>

            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-bold bg-hover:bg-red-100 px-2 py-1 rounded-lg transition duration-200 hover:shadow-lg"
            >
              Remove
            </button>

          </div>
        ))}

        <h3 className="text-xl font-bold mt-4 text-indigo-500">
          Total: ${total}
        </h3>

      </div>

    </div>
  )
}

export default Cart