import React, { useState } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/Navbar/NavBar";
import HeroCaraousal from "../components/HeroCarousal/HeroCaraousal";
import BuyCard from "../components/Cards/BuyCard";
import ImageCard from "../components/Cards/ImageCard";
import Footer from "../components/Footer/Footer";
import CardData from "../components/Cards/CardData";
import CartWindow from "../components/Cart/CartWindow";

const DefaultLayout = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    const selectedItem = CardData.find((card) => card.id === itemId);

    if (selectedItem) {
      setCartItems((prevCartItems) => [...prevCartItems, selectedItem]);
    }
  };

  return (
    <>
      <NavBar />
      <HeroCaraousal />
      <p className="text-4xl p-6 ml-8 font-bold">Catagories Picks</p>
      <ImageCard addToCart={addToCart} />
      <p className="text-4xl p-6 ml-8 font-bold">Our BestSeller</p>
      <BuyCard addToCart={addToCart} />
      <p className="text-4xl p-6 ml-8 font-bold">Pulses(Dal) </p>
      <BuyCard addToCart={addToCart} />
      <p className="text-4xl p-6 ml-8 font-bold">Breads(Roti)</p>
      <BuyCard addToCart={addToCart} />
      <p className="text-4xl p-6 ml-8 font-bold">Rice(Chawal)</p>
      <BuyCard addToCart={addToCart} />
      <Footer />

      {props.children}

      {cartItems.length > 0 && (
        <CartWindow cartItems={cartItems} />
      )}
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
