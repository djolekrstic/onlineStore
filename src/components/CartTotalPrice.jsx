import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartTotalPrice = () => {
  const { numItemsInCart, cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  const selectedCurrency = useSelector((state) => state.userState.currency);

  let selectedCurrencyValue = 1;
  let selectedCurrencySign = "$";
  const handleCurrency = (selectedCurrency) => {
    if (selectedCurrency === "RSD") {
      selectedCurrencyValue = 107;
      selectedCurrencySign = "RSD ";
    }
    if (selectedCurrency === "EUR") {
      selectedCurrencyValue = 0.9;
      selectedCurrencySign = "€";
    }
  };
  handleCurrency(selectedCurrency);

  return (
    <section className="cartTotalPrice">
      <div className="cartTotalPrice-item">
        <div>
          <h6>{numItemsInCart} items</h6>
          <p>
            {selectedCurrencySign}
            {(cartTotal * selectedCurrencyValue).toFixed(2)}
          </p>
        </div>
        <div>
          <h6>Shipping</h6>
          <p>
            {selectedCurrencySign}
            {(shipping * selectedCurrencyValue).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="cartTotalPrice-item">
        <div>
          <h6>Total (Tax Excl.)</h6>
          <p>
            {selectedCurrencySign}
            {((cartTotal + shipping) * selectedCurrencyValue).toFixed(2)}
          </p>
        </div>
        <div>
          <h6>Tax</h6>
          <p>
            {selectedCurrencySign}
            {(tax * selectedCurrencyValue).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="cartTotalPrice-item">
        <div>
          <h6>Order price</h6>
          <p>
            {selectedCurrencySign}
            {(orderTotal * selectedCurrencyValue).toFixed(2)}
          </p>
        </div>
      </div>
      <Link to="/checkout">
        <button>Proceed To Checkout</button>
      </Link>
    </section>
  );
};
export default React.memo(CartTotalPrice);
