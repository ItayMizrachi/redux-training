import { createSlice } from "@reduxjs/toolkit";

const savedCars = localStorage.getItem("carShop");
const initialState = {
  cars: savedCars
    ? JSON.parse(savedCars)
    : [
        {
          id: 1,
          name: "Tessla",
          model: "3",
          price: 200000,
          imageUrl:
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        },
        {
            id: 1,
            name: "Tessla",
            model: "3",
            price: 200000,
            imageUrl:
              "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          },
          {
            id: 1,
            name: "Tessla",
            model: "3",
            price: 200000,
            imageUrl:
              "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          },
          {
            id: 1,
            name: "Tessla",
            model: "3",
            price: 200000,
            imageUrl:
              "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          },
          {
            id: 1,
            name: "Tessla",
            model: "3",
            price: 200000,
            imageUrl:
              "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          },
          {
            id: 1,
            name: "Tessla",
            model: "3",
            price: 200000,
            imageUrl:
              "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          },
      ],
  status: "idle",
  error: null,
};

const carShopSlice = createSlice({
  name: "carShop",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    updateCar: (state, action) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addCar, removeCar, updateCar, setStatus, setError } =
  carShopSlice.actions;
export default carShopSlice.reducer;
