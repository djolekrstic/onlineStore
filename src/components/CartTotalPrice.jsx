import { useSelector } from "react-redux";

const CartTotalPrice = () => {
  const { numItemsInCart, cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <section className="cartTotalPrice">
      <div className="cartTotalPrice-item">
        <div>
          <h6>{numItemsInCart} items</h6>
          <p>${cartTotal.toFixed(2)}</p>
        </div>
        <div>
          <h6>Shipping</h6>
          <p>${shipping.toFixed(2)}</p>
        </div>
      </div>
      <div className="cartTotalPrice-item">
        <div>
          <h6>Total (Tax Excl.)</h6>
          <p>${(cartTotal + shipping).toFixed(2)}</p>
        </div>
        <div>
          <h6>Tax</h6>
          <p>${tax.toFixed(2)}</p>
        </div>
      </div>
      <div className="cartTotalPrice-item">
        <div>
          <h6>Order price</h6>
          <p>${orderTotal.toFixed(2)}</p>
        </div>
      </div>
      <button>Proceed To Checkout</button>
    </section>
  );
};
export default CartTotalPrice;
