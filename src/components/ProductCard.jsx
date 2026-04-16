const ProductCard = ({ product, openModal, addToCart }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 bg-gradient-to-br from-white-300 via-white-200 to-white-300">

      <img
        src={product.image}
        className="h-48 w-full object-contain rounded"
      />

      <h2 className="font-bold mt-2 text-lg">
        {product.title}
      </h2>

      <p className="text-blue-600 font-bold text-xl">
        ${product.price}
      </p>

      <div className="flex gap-2 mt-3 items-center">

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
          onClick={() => openModal(product)}
          className="border border-indigo-500 text-indigo-600 
          px-4 py-2 rounded-lg 
          hover:bg-indigo-100 hover:text-indigo-600 
          shadow-md hover:shadow-xl
          hover:scale-105 active:scale-95
          transition-all duration-200"
        >
          See More
        </button>
      </div>
    </div>
  )
}

export default ProductCard