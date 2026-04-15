const ProductModal = ({ product, closeModal, addToCart }) => {

  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">

      <div className="bg-white p-6 rounded w-96">

        <img src={product.image} className="h-48 mx-auto" />

        <h2 className="font-bold mt-2">
          {product.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {product.description}
        </p>

        <p className="font-bold mt-2">
          ${product.price}
        </p>

        <div className="flex gap-3 mt-4">

          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 
          text-white px-4 py-2 rounded-lg 
          shadow-md hover:shadow-xl 
          hover:scale-105 active:scale-95 
          transition-all duration-200"
          >
            Add
          </button>

          <button
            onClick={closeModal}
            className="bg-gradient-to-r from-red-500 to-red-800 
          text-white px-4 py-2 rounded-lg 
          shadow-md hover:shadow-xl 
          hover:scale-105 active:scale-95 
          transition-all duration-200"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductModal