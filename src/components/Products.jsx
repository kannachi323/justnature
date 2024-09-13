import React from 'react';

function ProductCard({ imgSrc, name, price, description }) {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-5">
      <img className="w-full h-48 object-cover" src={imgSrc} alt={name} />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-5">
          <span className="text-gray-800 font-bold">{price}</span>
          <button className="px-3 py-1 bg-[#c2a388] hover:bg-[#e3bd9e] text-white text-xs font-bold uppercase rounded transition duration-300 
                    ease-in-out">Add to Cart</button>
        </div>
      </div>
    </div>
      
  );
};

export default ProductCard;



