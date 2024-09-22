'use client';

import { useEffect, useState } from 'react';
import Card from './Card';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  if (products.length === 0) {
    return (
      <div className="w-full h-full flex flex-grow justify-center items-center">
        <p className="text-xl">Loading..! Please wait</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <h2 className="pt-4 text-2xl text-center">All Products</h2>
      <div className="flex flex-wrap justify-evenly gap-4 my-4 p-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
