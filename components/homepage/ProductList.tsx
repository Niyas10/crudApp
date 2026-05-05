"use client";

import React, { useState } from "react";
import useModal from "../../hooks/useModal";
import AddModal from "../modals/AddModal";
import ViewModal from "../modals/ViewModal";
import DeleteModal from "../modals/DeleteModal";
import EditModal from "../modals/EditModal";
import { Product } from "../../types/product.type";

const ProductList = () => {
  const {
    isOpen: isAddOpen,
    openModal: openAddModal,
    closeModal: closeAddModal,
  } = useModal();

  const {
    isOpen: isViewOpen,
    openModal: openViewModal,
    closeModal: closeViewModal,
  } = useModal();

  const {
    isOpen: isDeleteOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const {
    isOpen: isEditOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();

  // product state (for edit update later)
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "Laptop",
    description: "High performance laptop for professionals",
  });

  const handleUpdateProduct = (updated: Product) => {
    setProduct(updated);
    console.log("Updated Product:", updated);
  };

  const handleDeleteProduct = (id: number) => {
    console.log("Deleted Product:", id);
    setProduct({
      id: 0,
      name: "No Product",
      description: "Product has been deleted",
    });
  };

  const handleAddProduct = (newProduct: Product) => {
    setProduct(newProduct);
    console.log("Added Product:", newProduct);
  };

  return (
    <section className="containers">
      <div className="flex justify-between items-center mb-6 mt-6">
        <h2 className="text-lg font-medium">Product list</h2>

        <button
          onClick={openAddModal}
          className="px-3 py-1 text-xs bg-gray-100 border rounded-md cursor-pointer"
        >
          Add Product
        </button>
      </div>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
            ID
          </div>
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
            Name
          </div>
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
            Description
          </div>
          <div className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
            Action
          </div>
        </div>

        {/* Row */}
        <div className="grid grid-cols-4 items-center">
          {/* ID */}
          <div className="px-4 py-4">
            <span className="text-xs font-medium text-gray-500 bg-gray-100 border rounded px-2 py-1">
              #{product.id}
            </span>
          </div>

          {/* Name */}
          <div className="px-4 py-4 text-sm font-medium text-gray-800">
            {product.name}
          </div>

          {/* Description */}
          <div className="px-4 py-4 text-sm text-gray-500">
            {product.description}
          </div>

          {/* Actions */}
          <div className="px-4 py-4 flex gap-2">
            <button
              onClick={openViewModal}
              className="px-3 py-1 text-xs bg-gray-100 border rounded-md cursor-pointer"
            >
              View
            </button>

            <button
              onClick={openEditModal}
              className="px-3 py-1 text-xs text-blue-700 bg-blue-50 border rounded-md cursor-pointer"
            >
              Edit
            </button>

            <button
              onClick={openDeleteModal}
              className="px-3 py-1 text-xs text-red-700 bg-red-50 border rounded-md cursor-pointer  "
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}

      <ViewModal
        isOpen={isViewOpen}
        onClose={closeViewModal}
        product={product}
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={closeDeleteModal}
        product={product}
        onDelete={handleDeleteProduct}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        product={product}
        onSave={handleUpdateProduct}
      />

      <AddModal
        isOpen={isAddOpen}
        onClose={closeAddModal}
        onAdd={handleAddProduct}
      />
    </section>
  );
};

export default ProductList;
