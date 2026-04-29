import type {ReactNode} from 'react';
import {Footer} from './Footer';
import {Header} from './Header';

type LayoutProperties = {
  children: ReactNode;
};

export const Layout = ({children}: LayoutProperties) => (
  <div className="bg-bg text-fg flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
