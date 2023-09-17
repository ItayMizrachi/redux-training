import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, removeCar } from "../../features/cars/carShopSlice";

const CarShop = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carShop.cars);

  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carImageUrl, setCarImageUrl] = useState("");

  const handleAddCar = () => {
    const newCar = {
      id: Date.now(),
      name: carName,
      model: carModel,
      price: carPrice,
      imageUrl: carImageUrl,
    };
    dispatch(addCar(newCar));
    setCarName("");
    setCarModel("");
    setCarPrice("");
    setCarImageUrl("");
  };

  return (
      <div className="p-4 space-y-8 max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Car Shop</h1>

      <div className="card bg-base-200/90 w-full max-w-md shadow-xl  mx-auto">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">Add Car</h2>
          <div className="space-y-4">
            <input
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              placeholder="Car Name"
              className="input input-bordered w-full"
              required
            />
            <input
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              placeholder="Car Model"
              className="input input-bordered w-full"
              required
            />
            <input
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              placeholder="Car Price"
              type="number"
              className="input input-bordered w-full"
              required
            />
            <input
              value={carImageUrl}
              onChange={(e) => setCarImageUrl(e.target.value)}
              placeholder="Car Image URL"
              className="input input-bordered w-full"
              required
            />
            <div className="card-actions justify-end">
              <button
                onClick={handleAddCar}
                className="btn btn-primary w-full text-md font-bold"
              >
                Add Car
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl mb-4">Cars List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="card w-full shadow-xl bg-base-200/90 p-4"
            >
              <img
                src={car.imageUrl}
                alt={car.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-medium">{car.name}</h3>
              <p>Model: {car.model}</p>
              <p className="text-primary">Price: ${car.price}</p>
              <button
                onClick={() => dispatch(removeCar(car.id))}
                className="btn btn-error mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShop;
