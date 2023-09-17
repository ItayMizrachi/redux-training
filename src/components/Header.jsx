import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = ({ selectedTheme, setSelectedTheme, themes }) => {
  const drawerToggleRef = useRef(null);

  const closeDrawer = () => {
    if (drawerToggleRef.current) {
      drawerToggleRef.current.click();
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
    // Apply theme change logic here
    // console.log(selectedTheme);
  };

  return (
    <header
      data-theme={selectedTheme}
      className="drawer drawer-end z-20 fixed top-0"
    >
      <input  id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div  className="drawer-content flex flex-col">
        {/* Navbar */}
        <div  className="w-full navbar bg-base-200">
          <Link to={"/"} className="flex-1 px-2 mx-2 ">
            Redux
          </Link>
          <div className="flex-none lg:hidden">
            <label
              ref={drawerToggleRef}
              htmlFor="my-drawer-4"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div  className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}

              {/* <li>
                <Link to={"/todo"}>Todo</Link>
              </li> */}
              <li>
                <Link to={"/library"}>Library</Link>
              </li>
              <li>
                <Link to={"/store"}>Store</Link>
              </li>
              <li>
                <Link to={"/cars"}>Cars</Link>
              </li>
            </ul>
          </div>
          <select
            className="select font-semibold text-base w-full max-w-[140px] hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none hidden lg:block"
            value={selectedTheme}
            onChange={handleThemeChange}
          >
            {themes.map((theme) => (
              <option className="bg-base-100" key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        {/* content here */}
      </div>

      <div  className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul  className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <select
              className="select font-semibold text-base w-full hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none hidden md:block"
              value={selectedTheme}
              onChange={handleThemeChange}
            >
              {themes.map((theme) => (
                <option className="bg-base-100" key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </li>
          <li>
            <Link onClick={() => closeDrawer()} to={"/"}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link onClick={() => closeDrawer()} to={"/todo"}>
              Todo
            </Link>
          </li> */}
          <li>
            <Link onClick={() => closeDrawer()} to={"/library"}>
              Library
            </Link>
          </li>
          <li>
            <Link onClick={() => closeDrawer()} to={"/store"}>
              Store
            </Link>
          </li>
          <li>
            <Link onClick={() => closeDrawer()} to={"/cars"}>
              Cars
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
