import { useState, useEffect } from "react"

const ProductModal = ({ product, closeModal, addToCart }) => {
  const [activeImage, setActiveImage] = useState("")

  useEffect(() => {
    if (product) {
      setActiveImage(product.thumbnail || product.images?.[0] || "")
    }
  }, [product])

  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white p-5 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          X
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={activeImage}
              alt={product.title}
              className="w-full h-80 object-contain rounded-lg border"
            />

            <div className="flex gap-3 mt-4 flex-wrap">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.title}-${index}`}
                  onClick={() => setActiveImage(img)}
                  className={`h-20 w-20 object-contain border rounded-lg cursor-pointer p-1 ${activeImage === img ? "border-indigo-600" : "border-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl text-indigo-700">
              {product.title}
            </h2>

            <p className="text-gray-500 mt-2">
              Brand: <span className="font-semibold">{product.brand || "N/A"}</span>
            </p>

            <p className="text-gray-500">
              Category: <span className="font-semibold capitalize">{product.category}</span>
            </p>

            <p className="text-gray-500">
              SKU: <span className="font-semibold">{product.sku || "N/A"}</span>
            </p>

            <p className="text-yellow-500 font-semibold mt-2">
              ⭐ Rating: {product.rating}
            </p>

            <p className="text-green-600 font-bold text-2xl mt-2">
              ${product.price}
            </p>

            <p className="text-sm text-red-500 mt-1">
              Discount: {product.discountPercentage}%
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Stock: {product.stock}
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Availability: {product.availabilityStatus || "Available"}
            </p>

            <p className="text-gray-700 mt-4 leading-7">
              {product.description}
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Warranty:</span>{" "}
                {product.warrantyInformation || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Return Policy:</span>{" "}
                {product.returnPolicy || "N/A"}
              </p>
            </div>

            {product.tags?.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold text-sm mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.reviews?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-3">Reviews</h3>

                <div className="space-y-3">
                  {product.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-3 bg-gray-50"
                    >
                      <p className="font-semibold">{review.reviewerName}</p>
                      <p className="text-yellow-500">⭐ {review.rating}</p>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => addToCart(product)}
                className="bg-gradient-to-r from-blue-500 to-indigo-600
                text-white px-5 py-2 rounded-lg
                shadow-md hover:shadow-xl
                hover:scale-105 active:scale-95
                transition-all duration-200"
              >
                Add to Cart
              </button>

              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-red-500 to-red-800
                text-white px-5 py-2 rounded-lg
                shadow-md hover:shadow-xl
                hover:scale-105 active:scale-95
                transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal