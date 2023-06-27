import React from 'react';
import PropTypes from 'prop-types';

const CartWindow = ({ cartItems, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-index:10">
      <div className="bg-white rounded-lg p-8 w-3/4 h-3/4 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl text-gray-600 font-bold mb-4 flex items-center justify-center">Cart</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-center'>No items in the cart</p>
          )}
        </div>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mx-auto hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
};

CartWindow.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartWindow;
