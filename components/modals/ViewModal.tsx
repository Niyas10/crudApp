import React from "react";
import { ViewModalProps } from "@/types/modal.type";

const ViewModal = ({ isOpen, onClose, product }: ViewModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Product Details
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4 px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
              Product ID
            </p>

            <p className="text-sm font-medium text-gray-700">#{product?.id}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
              Name
            </p>

            <p className="text-sm text-gray-700">{product?.name}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
              Description
            </p>

            <p className="text-sm leading-6 text-gray-600">
              {product?.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-gray-100 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg cursor-pointer border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
