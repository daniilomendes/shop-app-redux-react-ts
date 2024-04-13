import { createPortal } from "react-dom";
import CartItems from "./CartItems";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Suas compras</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Fechar</button>
        </p>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}
