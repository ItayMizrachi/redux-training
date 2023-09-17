// Store.jsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  markSoldOut,
  updateProduct,
} from "../../features/amazStore/storeSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.store.products);

  // State for the new product form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [inStock, setInStock] = useState("");

  const isFormValid = () => {
    return name && description && price && imageUrl && inStock;
  };

  const handleAddProduct = () => {
    dispatch(addProduct({ name, description, price, imageUrl, inStock }));
    // Clear the form after submitting
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    setInStock("");
  };

  return (
    <div className="p-4 space-y-8 max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Store Dashboard</h1>

      {/* Add product form */}
      <div className="card w-full max-w-2xl shadow-xl bg-base-200/90 mx-auto">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">Add Product</h2>
          <div className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
              className="input input-bordered w-full"
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              value={inStock}
              onChange={(e) => setInStock(e.target.value)}
              placeholder="In Stock"
              className="input input-bordered w-full"
              required
            />
            <div className="card-actions justify-end">
              <button
                disabled={!isFormValid()}
                onClick={handleAddProduct}
                className="btn btn-primary w-full font-bold"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        <h2 className="text-xl mb-4">Products</h2>
        <div className="flex justify-center sm:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {products.map((product) => (
              <div
                key={product.id}
                className="card max-w-sm w-full shadow-xl bg-base-100 "
              >
                <figure className="h-48">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg">{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="text-primary">Price: ${product.price}</p>
                  <p className="text-gray-500">In Stock: {product.inStock}</p>
                  <div className="card-actions space-x-2">
                    <button
                      onClick={() => dispatch(markSoldOut(product.id))}
                      className="btn btn-warning"
                    >
                      Mark Sold Out
                    </button>
                    <button
                      onClick={() => dispatch(removeProduct(product.id))}
                      className="btn btn-error"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
