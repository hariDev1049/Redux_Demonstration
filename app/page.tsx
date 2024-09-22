'use client';

import NavComponents from './components/NavComponents';
import Products from './components/Products';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen text-center flex flex-col">
        <div className=" w-100% h-24 ">
          <NavComponents />
        </div>
        <div>
          <Products />
        </div>
      </div>
    </Provider>
  );
}
