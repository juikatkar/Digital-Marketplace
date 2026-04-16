import { useEffect, useState, useContext } from "react"
import Header from "./Header"
import ProductCard from "./ProductCard"
import ProductModal from "./ProductModal"
import { CartContext } from "../context/CartContext"

const Products = () => {

  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(null)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [categories, setCategories] = useState([])

  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)

        const unique = [...new Set(data.map(p => p.category))]
        setCategories(unique)
      })
  }, [])

  const openModal = (product) => {
    setSelected(product)
  }

  const closeModal = () => {
    setSelected(null)
  }

  const filteredProducts = products.filter(p => {

    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase())

    const matchCategory =
      category === "all" || p.category === category

    return matchSearch && matchCategory
  })

  return (
    <div className="bg-gray-100 min-h-screen">

      <Header
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">

        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            openModal={openModal}
            addToCart={addToCart}
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