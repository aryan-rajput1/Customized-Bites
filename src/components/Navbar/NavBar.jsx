// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BsFillCaretDownFill, BsSearch, BsPersonCircle, BsBagFill } from "react-icons/bs";
import LoginPopup from "./LoginPopup";
import CartWindow from "../Cart/CartWindow";
 
const NavSm = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl">Customized Bites</h1>
          <span className="font-normal flex items-center">
            <p className="text-gray-400">Delhi-NCR</p>
            <BsFillCaretDownFill className="ml-2 text-gray-500" />
          </span>
        </div>
        <BsSearch className="w-6 h-6" />
      </div>
      <div className="mt-4"></div>
    </>
  );
};

const NavMd = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div
        className="flex justify-between items-center mb-4 w-full"
        style={{ marginTop: "0.1rem" }}
      >
        <div className="flex items-center">
          <h1 className="font-bold text-3xl">Customized Bites</h1>
          <span className="font-normal flex items-center ml-4">
            <p className="text-gray-400">Delhi-NCR</p>
            <BsFillCaretDownFill className="ml-2 text-gray-500" />
          </span>
        </div>
        <div className="p-1">
          <BsPersonCircle className="w-9 h-9" />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-12 p-2 flex items-center border-2 rounded border-gray-300 mb-4">
          <BsSearch className="text-gray-400 ml-2" />
          <input
            type="search"
            className="p-2 pl-4 w-full focus:outline-none"
            placeholder="Search for &ldquo;recipes&rdquo;"
          />
        </div>
      </div>
    </div>
  );
};

const NavLg = () => {
  
  
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const handleLoginButtonClick = () => {
    setShowLoginPopup(true);
  };
  const handleLogin = (phoneNumber) => {
    // Here you can implement your logic for OTP verification or API calls
    console.log("Login form submitted with phone number:", phoneNumber);
    setShowLoginPopup(false);
  };
  const handlePopupClose = () => {
    setShowLoginPopup(false);
  };


  const [showCartWindow, setShowCartWindow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleCartButtonClick = () => {
    setShowCartWindow(true);
  };

  const handleCartClose = () => {
    setShowCartWindow(false);
  };
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };


  return (
    <div className="container mx-auto flex items-center justify-between py-2">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden animate-bounce">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h1 className="font-bold text-3xl">Customized Bites</h1>
          <div className="flex items-center">
            <p className="text-gray-400">Delhi-NCR</p>
            <BsFillCaretDownFill className="ml-2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-grow mx-4">
        <div className="w-full h-12 flex items-center border-2 rounded border-gray-300">
          <div className="flex items-center">
            <BsSearch className="text-gray-400 ml-2" />
            <input
              type="search"
              className="pl-4 w-full focus:outline-none bg-transparent"
              placeholder="Search for &ldquo;recipes&rdquo;"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center ml-4">
        <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleLoginButtonClick}>Login</button>
        {showLoginPopup && (
        <LoginPopup onClose={handlePopupClose} onLogin={handleLogin} />
      )}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleCartButtonClick}>
            <BsBagFill className="mr-1"/>
          </button>
          {showCartWindow && (
            <CartWindow cartItems={cartItems} onClose={handleCartClose} />
          )}
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="bg-white p-4 border border-inherit font-sans sticky top-0 z-10">
      <div className="md:hidden">
        {/* Mobile Screen */}
        <NavSm />
      </div>

      <div className="hidden lg:hidden md:flex">
        {/* Ipad Screen */}
        <NavMd />
      </div>

      <div className="hidden lg:flex">
        {/* Desktop Screen */}
        <NavLg />
      </div>
    </nav>
  );
};

export default NavBar;
