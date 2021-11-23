import { useState } from 'react';
import { useCartCtx } from '../store/CartContext';

//
// display all cart items from context in a list
function CartPage() {
  const [buyStep, setBuyStep] = useState(0);

  const cartCtx = useCartCtx();
  const weHaveItems = !!cartCtx.cartItems.length;
  return (
    <main>
      <h1>Cart page</h1>
      {!weHaveItems && <h2>Cart empty</h2>}
      {weHaveItems && (
        <section>
          <h2>Items in cart</h2>
          {cartCtx.cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price}
            </li>
          ))}
          <br />
          <button>Buy now</button>
        </section>
      )}
    </main>
  );
}

export default CartPage;
