import { useEffect, useState, useContext } from "react"
import Header from "./Header"
import ProductCard from "./ProductCard"
import ProductModal from "./ProductModal"
import { CartContext } from "../context/CartContext"

const Products = () => {

  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(null)
  const [wishlist, setWishlist] = useState([])

  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const openModal = (product) => {
    setSelected(product)
  }

  const closeModal = () => {
    setSelected(null)
  }

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id)

      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      } else {
        return [...prev, product]
      }
    })
  }

  return (
    <div className="bg-gray-100 min-h-screen bg-gradient-to-br from-white-400 via-white-200">

      <Header />

      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            openModal={openModal}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            isLiked={wishlist.some(p => p.id === product.id)}
          />
        ))}

      </div>

      <ProductModal
        product={selected}
        closeModal={closeModal}
        addToCart={addToCart}
      />

    </div>
  )
}

export default Products