import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-fg">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
