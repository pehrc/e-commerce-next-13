import { ReactNode } from 'react';

import { CartProvider } from '@/app/context/cart-context';
import { Header } from '../components/header';

type StoreLayoutType = { children: ReactNode };

export default function StoreLayout({ children }: StoreLayoutType) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
