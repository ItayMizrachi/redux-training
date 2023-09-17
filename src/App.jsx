import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/todo/AddTodo";
import Header from "./components/Header";
import Main from "./components/Main";
import store from "./store/store";
import Library from "./components/books/Library";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./components/amazonStore/store";
import { useState } from "react";
import CarShop from "./components/carsShop/CarShop";
const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || "dracula"
  );

  const themes = [
    "light",
    "dark",
    "synthwave",
    "dracula",
    "halloween",
    "coffee",
    "aqua",
    "luxury",
    "retro",
    "valentine",
    "night",
    "forest",
    "business",
    "black",
    "cyberpunk",
    "garden",
    "cupcake",
    "bumblebee",
    "lofi",
    "emerald",
    "corporate",
    "pastel",
    "fantasy",
    "wireframe",
    "cmyk",
    "autumn",
    "acid",
    "lemonade",
    "winter",
  ];
  return (
    <>
      <Provider store={store}>
        <div className="min-h-screen" data-theme={selectedTheme}>
          <BrowserRouter>
            <Header
              themes={themes}
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
            />
            <Routes>
              <Route index element={<Main />} />
              <Route path="/todo" element={<AddTodo />} />
              <Route path="/library" element={<Library />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cars" element={<CarShop />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
};

export default App;
