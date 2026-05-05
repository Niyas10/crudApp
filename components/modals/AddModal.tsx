"use client";

import React from "react";
import { AddModalProps } from "@/types/modal.type";

const AddModal = ({ isOpen, onClose }: AddModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-xl">

        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-green-700">
            Add Product
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4 px-6 py-5">

          {/* Name */}
          <div>
            <label className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2 block">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2 block">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Enter product description"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">

          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            className="cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddModal;