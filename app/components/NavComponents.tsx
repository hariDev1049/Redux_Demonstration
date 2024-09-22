'use client';

import { useSelector } from 'react-redux';

export default function NavComponents() {
  const items = useSelector((state) => state.cart);

  let total = items.reduce((a, b) => a + b[1], 0);

  return (
    <div className="bg-slate-400 flex justify-center items-center">
      <p className="text-slate-900 text-xl p-6">
        Total for {items.length} items is {total.toFixed(2)}$
      </p>
    </div>
  );
}
