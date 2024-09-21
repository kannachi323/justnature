import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoNoText } from 'components/Logos';
import FadeSlideInSection from 'components/FadeSlideInSection';
import { createCart, addItemToCart, updateItemInCart, removeItemFromCart, getItemFromCart } from 'utils/shop_utils/functions';
import {
    orchids
} from 'images';

export default function ShopPage() {
  const [filterConfig, setFilterConfig] = useState({
    maxPrice: 300,
    inStockSelected: false,
  })

  useEffect(() => {
    createCart();
  }, []);

  

  const products = [
    {
      productId: 1,
      imgSrc: orchids, 
      name: "Elegant Orchid Arrangement",
      price: 80,
      description: "A beautifully arranged selection of our finest orchids.",
      inStock: true,
    },
    {
      productId: 2,
      imgSrc: orchids, 
      name: "Premium Orchid Collection",
      price: 150,
      description: "A premium selection of our most vibrant orchids.",
      inStock: true,
    },
    {
      productId: 3,
      imgSrc: orchids, 
      name: "Luxury Orchid Basket",
      price: 200,
      description: "A luxurious basket filled with the best orchids.",
      inStock: false,
    },
    {
      productId: 4,
      imgSrc: orchids, 
      name: "Orchid Bloom Set",
      price: 180,
      description: "A set of orchids in full bloom, perfect for any occasion.",
      inStock: true,
    },
    {
      productId: 5,
      imgSrc: orchids, 
      name: "Orchid Bloom Set",
      price: 180,
      description: "A set of orchids in full bloom, perfect for any occasion.",
      inStock: true,
    },
  ];

  return (
    <>
      <div className="flex flex-row w-screen">
        <div className="w-1/4 min-w-[250px] bg-[#f5f5f3] p-5 overflow-y-auto border-r-2 border-[#ac9d92] text-[#897c74]">
          <div className="sticky top-0">
            <h2 className="text-2xl font-semibold mb-5">Filters</h2>
            
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Price  $0 - ${filterConfig.maxPrice}</h3>
              <input id="price-slider" type="range" min="0" max="300" className="w-full p-0 accent-[#ac9d92]" value={filterConfig.maxPrice}
                onChange={(event) => setFilterConfig({...filterConfig, maxPrice: event.target.value})}
              /> 
              <div className="flex justify-between">
                <span>$0</span>
                <span>$300</span>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-semibold">In Stock</h3>
              <label className="block mt-2">
                <input type="checkbox" className="mr-2" onClick={() => setFilterConfig({...filterConfig, inStockSelected: !filterConfig.inStockSelected})}/>
                Only show in-stock items
              </label>
            </div>
          </div>
        </div>

        <div className="w-3/4 flex flex-col items-center justify-start font-roboto bg-[#f5f5f3]">
          <FadeSlideInSection>
            <LogoNoText args="h-[20vh]" />
          </FadeSlideInSection>
          
          <FadeSlideInSection className="text-4xl mt-10 text-[#e3bd9e]">
            <b>Shop Our Collection</b>
          </FadeSlideInSection>
          
          <ProductList products={products} filterConfig={filterConfig} />
        </div>
      </div>
    </>
  );
}

function ProductList({ products, filterConfig }) {

  const navigate = useNavigate();

  const filteredProducts = products.filter(product => {
    const meetsPriceCriteria = product.price <= filterConfig.maxPrice;
    const meetsStockCriteria = filterConfig.inStockSelected ? product.inStock : true; 
    return meetsPriceCriteria && meetsStockCriteria;
  });
  
  return (
    <div className="flex flex-wrap items-start justify-evenly mt-10">
      {filteredProducts.map((product, index) => (
        <div key={index} className="p-2 box-border">
          <FadeSlideInSection>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-5">
              <img className="w-full h-48 object-cover" src={product.imgSrc} alt={product.name} />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-5">
                  <span className="text-gray-800 font-bold">${product.price}</span>
                  <CartContainer product={product}/>
                </div>
              </div>
            </div>
          </FadeSlideInSection>
        </div>
      ))}
    </div>
  );
}

function CartContainer({ product }) {
  const [cartList, setCartList] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartList(cart);
  }, []);

  const itemInCart = cartList.find(item => item.productId === product.productId);

  const handleAddToCart = () => {
    let updatedCart;
    if (itemInCart) {
      const updatedItem = { ...itemInCart, quantity: itemInCart.quantity + 1 };
      updateItemInCart(updatedItem); // Update in local storage
      updatedCart = cartList.map(item =>
        item.productId === product.productId ? updatedItem : item
      );
    } else {
      const newItem = { ...product, quantity: 1 };
      addItemToCart(newItem); // Add to local storage
      updatedCart = [...cartList, newItem];
    }
    setCartList(updatedCart); // Update state
  };

  const handleRemoveFromCart = () => {
    if (itemInCart && itemInCart.quantity > 1) {
      const updatedItem = { ...itemInCart, quantity: itemInCart.quantity - 1 };
      updateItemInCart(updatedItem); // Update in local storage
      const updatedCart = cartList.map(item =>
        item.productId === product.productId ? updatedItem : item
      );
      setCartList(updatedCart); // Update state
    } else {
      removeItemFromCart(product.productId); // Remove from local storage
      const updatedCart = cartList.filter(item => item.productId !== product.productId);
      setCartList(updatedCart); // Update state
    }
  };

  return (
    <div>
      {itemInCart ? (
        <div className="flex items-center">
          <button className="px-2 py-1 bg-[#ac9d92] text-white text-xs font-bold rounded transition" onClick={handleRemoveFromCart}>
            -
          </button>
          <span className="px-2">{itemInCart.quantity}</span>
          <button className="px-2 py-1 bg-[#c2a388] text-white text-xs font-bold rounded transition" onClick={handleAddToCart}>
            +
          </button>
        </div>
      ) : (
        <button className="px-3 py-1 bg-[#c2a388] hover:bg-[#e3bd9e] text-white text-xs font-bold uppercase rounded transition duration-300 ease-in-out" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}
