import React, { useState } from 'react';
import { LogoNoText } from 'components/Logos';
import ProductCard from 'components/Products';
import FadeSlideInSection from 'components/FadeSlideInSection';
import {
    orchids
} from 'images';

export default function ShopPage() {

  const [sliderText, setSliderText] = useState(50);
  const [inStockSelected, setInStockSelected] = useState(false);

  const products = [
    {
      imgSrc: orchids, // Replace with the actual path or import
      name: "Elegant Orchid Arrangement",
      price: "$120.00",
      description: "A beautifully arranged selection of our finest orchids.",
      inStock: true
    },
    {
      imgSrc: orchids, // Replace with the actual path or import
      name: "Premium Orchid Collection",
      price: "$150.00",
      description: "A premium selection of our most vibrant orchids.",
      inStock: true
    },
    {
      imgSrc: orchids, // Replace with the actual path or import
      name: "Luxury Orchid Basket",
      price: "$200.00",
      description: "A luxurious basket filled with the best orchids.",
      inStock: false
    },
    {
      imgSrc: orchids, // Replace with the actual path or import
      name: "Orchid Bloom Set",
      price: "$180.00",
      description: "A set of orchids in full bloom, perfect for any occasion.",
      inStock: true
    },
    {
      imgSrc: orchids, // Replace with the actual path or import
      name: "Orchid Bloom Set",
      price: "$180.00",
      description: "A set of orchids in full bloom, perfect for any occasion.",
      inStock: true
    },
    {
      imgSrc: orchids, // Replace with the actual path or import
      name: "Orchid Bloom Set",
      price: "$180.00",
      description: "A set of orchids in full bloom, perfect for any occasion.",
      inStock: true
    },
    {
      imgSrc: orchids, // Replace with the actual path or import
      name: "Orchid Bloom Set",
      price: "$180.00",
      description: "A set of orchids in full bloom, perfect for any occasion.",
      inStock: true
    }
  ];

  return (
    <>
      <div className="flex flex-row w-screen">
        <div className="w-1/4 min-w-[250px] bg-[#f5f5f3] p-5 overflow-y-auto border-r-2 border-[#ac9d92] text-[#897c74]">
          <div className="sticky top-0">
            <h2 className="text-2xl font-semibold mb-5">Filters</h2>
            
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Price  $0 - ${sliderText}</h3>
              <input type="range" min="0" max="300" className="w-full p-0 accent-[#ac9d92]" onClick={(e) => setSliderText(e.target.value)}/> 
            
              <div className="flex justify-between">
                <span>$0</span>
                <span>$300</span>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-semibold">In Stock</h3>
              <label className="block mt-2">
                <input type="checkbox" className="mr-2" onClick={() => setInStockSelected(!inStockSelected)}/>
                Only show in-stock items
              </label>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-semibold">Object Type</h3>
              <label className="block mt-2">
                <input type="checkbox" className="mr-2" />
                Orchids
              </label>
              <label className="block mt-2">
                <input type="checkbox" className="mr-2" />
                Plants
              </label>
              <label className="block mt-2">
                <input type="checkbox" className="mr-2" />
                Pots
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
          
          <ProductList inStockSelected={inStockSelected} products={products} />
        </div>
      </div>
    </>
  );
}


function ProductList({ inStockSelected, products }) {
  const filteredProducts = inStockSelected
    ? products.filter(product => product.inStock)
    : products;
  
  return (
    <div className="flex flex-wrap justify-start mt-10">
      {filteredProducts.map((product, index) => (
        <div key={index} className="w-1/4 p-2 box-border">
          <FadeSlideInSection>
            <ProductCard
              imgSrc={product.imgSrc}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </FadeSlideInSection>
        </div>
      ))}
    </div>
  );
}
