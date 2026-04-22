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
  const [sortBy, setSortBy] = useState("default")

  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=194")
        const data = await res.json()
        setProducts(data.products || [])
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories")
        const data = await res.json()

        const normalizedCategories = (data || []).map((item) =>
          typeof item === "string" ? item : item.slug
        )

        setCategories(normalizedCategories)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchProducts()
    fetchCategories()
  }, [])

  const openModal = (product) => {
    setSelected(product)
  }

  const closeModal = () => {
    setSelected(null)
  }

  const filteredProducts = products
    .filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        (p.brand || "").toLowerCase().includes(search.toLowerCase())

      const matchCategory =
        category === "all" || p.category === category

      return matchSearch && matchCategory
    })
    .sort((a, b) => {
      if (sortBy === "az") {
        return a.title.localeCompare(b.title)
      }

      if (sortBy === "priceLowHigh") {
        return a.price - b.price
      }

      if (sortBy === "priceHighLow") {
        return b.price - a.price
      }

      if (sortBy === "ratingHighLow") {
        return b.rating - a.rating
      }

      return 0
    })

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="max-w-7xl mx-auto p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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