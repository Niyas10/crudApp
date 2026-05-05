"use client";

import React, { useEffect, useState } from "react";
import { EditModalProps } from "@/types/modal.type";
import { Product } from "@/types/product.type";

const EditModal = ({ isOpen, onClose, product, onSave }: EditModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleSave = () => {
    const updatedProduct: Product = {
      ...product,
      name,
      description,
    };

    onSave(updatedProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">Edit Product</h2>
        </div>

        {/* Content */}
        <div className="space-y-4 px-6 py-5">
          {/* Name Field */}
          <div>
            <label className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2 block">
              Product Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2 block">
              Description
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              rows={4}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
