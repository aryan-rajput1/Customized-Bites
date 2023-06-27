// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import CardData from './CardData';

const BuyCard = ({ addToCart }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {CardData.map((card) => (
        <div
          key={card.id}
          className="flex-shrink-0 w-48 h-72 p-4 border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl mx-4 mb-4"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xs font-bold mb-2">{card.title}</h3>
            <p className="text-gray-700 mb-4">{card.price}</p>
            <button
              onClick={() => addToCart(card.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

BuyCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default BuyCard;
