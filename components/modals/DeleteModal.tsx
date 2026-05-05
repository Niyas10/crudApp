import React from "react";
import { DeleteModalProps } from "@/types/modal.type";

const DeleteModal = ({
  isOpen,
  onClose,
  product,
  onDelete,
}: DeleteModalProps) => {
  if (!isOpen || !product) return null;

  const handleDelete = () => {
    onDelete(product.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-red-600">Delete Product</h2>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <p className="text-sm leading-6 text-gray-600">
            Are you sure you want to delete
            <span className="font-semibold text-gray-800"> {product.name}</span>
            ?
          </p>
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
            onClick={handleDelete}
            className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
