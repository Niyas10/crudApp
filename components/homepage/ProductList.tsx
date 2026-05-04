import React from 'react'

const ProductList = () => {
  return (
    <section className="containers ">

      <h2 className="text-lg font-medium mb-5 mt-17.5">
        Product list
      </h2>

      <div className="border border-gray-200 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">ID</div>
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Name</div>
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Description</div>
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Action</div>
        </div>

        {/* Row */}
        <div className="grid grid-cols-4 items-center">

          {/* ID */}
          <div className="px-4 py-4">
            <span className="text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded px-2 py-1">
              #001
            </span>
          </div>

          {/* Name */}
          <div className="px-4 py-4 text-sm font-medium text-gray-800">
            Laptop
          </div>

          {/* Description */}
          <div className="px-4 py-4 text-sm text-gray-500">
            High performance laptop for professionals
          </div>

          {/* Actions */}
          <div className="px-4 py-4 flex gap-2">

            <button className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md cursor-pointer">
              View
            </button>

            <button className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md cursor-pointer">
              Edit
            </button>

            <button className="px-3 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-md cursor-pointer">
              Delete
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductList