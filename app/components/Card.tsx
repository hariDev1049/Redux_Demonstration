'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function Card({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-bold mb-2 text-slate-950">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className=" flex justify-evenly my-2 items-center">
        <p className="font-semibold mt-2 text-slate-950 text-xl">
          ${product.price}
        </p>
        <button
          className="bg-blue-950 p-3 rounded"
          onClick={() => handleAddToCart([product.id, product.price])}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
