// storeSlice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  products: [
    {
      id: 1, // a generated unique ID for each product
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      inStock: 5, // number of items available
    },
    {
      id: 2, // a generated unique ID for each product
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      inStock: 5, // number of items available
    },
    {
      id: 3, // a generated unique ID for each product
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      inStock: 5, // number of items available
    },
    {
      id: 4, // a generated unique ID for each product
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      inStock: 5, // number of items available
    },
    {
      id: 5, // a generated unique ID for each product
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      inStock: 5, // number of items available
    },
    {
      id: 6, // a generated unique ID for each product
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      inStock: 5, // number of items available
    },
    {
      id: 7, // a generated unique ID for each product
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      inStock: 5, // number of items available
    },
  ],
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    // Action to add a new product
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: nanoid(),
      };
      state.products.push(newProduct);
    },

    // Action to remove a product by ID
    removeProduct: (state, action) => {
      const idToRemove = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== idToRemove
      );
    },

    // Action to mark a product as "sold out"
    markSoldOut: (state, action) => {
      const idToMark = action.payload;
      const product = state.products.find((product) => product.id === idToMark);
      if (product) {
        product.inStock = 0;
      }
    },

    // Action to update a product's information
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          ...updatedProduct,
        };
      }
    },
  },
});

export const { addProduct, removeProduct, markSoldOut, updateProduct } =
  storeSlice.actions;

export default storeSlice.reducer;
