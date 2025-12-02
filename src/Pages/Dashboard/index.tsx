
import { useState } from "react";
import { AccountDetails, Address, FavoriteProducts, Orders, UpdatePassword } from "./components";
import MenuSection from "./components/MenuSection";

export const Dashborad = () => {
  const [menuLinks, setMenuLinks] = useState('pedidos')

  return (
    <main className="md:w-[95%] lg:w-[80%] mx-auto h-auto flex flex-col md:flex-row justify-center py-10 md-px-5">
      <MenuSection setMenuLinks={setMenuLinks} />
      {
        menuLinks === 'conta' && <AccountDetails /> ||
        menuLinks === 'pedidos' && <Orders /> ||
        menuLinks === 'favoritos' && <FavoriteProducts /> ||
        menuLinks === 'endereco' && <Address /> ||
        menuLinks === 'senha' && <UpdatePassword />
      }
    </main>
  );
}
