import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeSlideInSection from 'components/FadeSlideInSection';
import ProductCard from 'components/Products'; // Assuming ProductCard component is reused
//import { calculateTotal } from 'utils/cartUtils'; // Utility function to calculate the total cost

export default function CheckoutPage() {
  const [cart, setCart] = useState([
    // Sample cart items; replace with actual cart state or props
    { imgSrc: 'path_to_image', name: 'Product 1', price: 100, quantity: 1 },
    { imgSrc: 'path_to_image', name: 'Product 2', price: 150, quantity: 2 },
  ]);

  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const navigate = useNavigate();

  const handleQuantityChange = (index, newQuantity) => {
    setCart(cart.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Handle checkout logic (e.g., API call)
    console.log('Checkout with:', { cart, shippingDetails });
    // Navigate to the confirmation or success page
    navigate('/confirmation');
  };

  return (
    <div className="flex flex-col w-screen bg-[#f5f5f3] p-5">
      <FadeSlideInSection className="text-4xl mb-5 text-[#e3bd9e]">
        <b>Checkout</b>
      </FadeSlideInSection>
      <FadeSlideInSection>
      <div className="flex flex-row">
        <div className="w-2/3 p-5 bg-white border-[#ac9d92] border-2 rounded-lg">
          <h2 className="text-2xl font-semibold mb-5">Cart Summary</h2>
          {cart.map((item, index) => (
            <div key={index} className="flex items-center mb-4 border-b border-[#e0e0e0] pb-4">
              <img src={item.imgSrc} alt={item.name} className="w-16 h-16 object-cover mr-4" />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-md text-gray-600">${item.price} each</p>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                    className="w-16 p-2 border border-gray-300 rounded"
                  />
                  <span className="ml-4 text-lg font-semibold">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-5 font-semibold text-xl">
            <span>Total:</span>
            
          </div>
        </div>

        <div className="w-1/3 p-5 bg-white border-[#ac9d92] border-2 rounded-lg ml-5">
          <h2 className="text-2xl font-semibold mb-5">Shipping Details</h2>
          <form className="flex flex-col">
            <label className="mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={shippingDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="mb-2">
              Address:
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="mb-2">
              City:
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="mb-2">
              State:
              <input
                type="text"
                name="state"
                value={shippingDetails.state}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="mb-2">
              Zip Code:
              <input
                type="text"
                name="zip"
                value={shippingDetails.zip}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <button
              type="button"
              onClick={handleCheckout}
              className="mt-5 py-2 px-4 bg-[#8d745e] text-white rounded-lg transition duration-300 hover:bg-[#7a634e]"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
      </FadeSlideInSection>
    </div>
    
  );
}
