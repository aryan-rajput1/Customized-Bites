import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaPhone } from "react-icons/fa";

const LoginPopup = ({ onClose, onLogin }) => {
  const [isPhoneNumberInvalid, setPhoneNumberInvalid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91"); // Default phone code

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);

    if (number.length > 10) {
      setPhoneNumberInvalid(true);
    } else {
      setPhoneNumberInvalid(false);
    }
  };

  const handlePhoneCodeChange = (e) => {
    setPhoneCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPhoneNumber = phoneCode + phoneNumber; // Combine phone code and number
    onLogin(fullPhoneNumber);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96 w-1/3 h-1/2">
        <p className="text-center font-light text-2xl mb-4">
          Get Your Phone Number Verified ASAP!
        </p>
        <h2 className="text-sm text-center text-gray-500 font-bold mb-4">
          Enter your phone number to login/SignUp
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute right-3 mt-5 mr-8 transform -translate-y-1/2 text-gray-400">
              <FaPhone />
            </span>
            <div className="flex m-8">
              <input
                type="tel"
                value={phoneCode}
                onChange={handlePhoneCodeChange}
                placeholder="Code"
                className="border border-gray-300 rounded-l px-2 py-2 mb-4 w-1/4"
                required
              />
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone number"
                className={`border ${
                  isPhoneNumberInvalid ? "border-red-500" : "border-blue-500"
                } rounded-r px-6 py-2 mb-4 w-3/4 focus:outline-none`}
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-900 font-medium mr-4"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
          <p className="text-center text-gray-500 mt-4 font-normal hover:font-bold text-sm">By submitting you agree to our</p>
          <div className="flex justify-center">
          <a href="#" className="text-xs text-blue-500 hover:text-blue-700">terms and policies</a>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
