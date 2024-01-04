import { BsChevronUp, BsChevronDown, BsTrash } from "react-icons/bs";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { background_image, name, priceNum, amountNum } = product;
  let [newAmount, setNewAmount] = useState(amountNum);
  const shortName = name?.split(":")[0].substring(0, 23);

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
    <article className="productCart">
      <div className="productCart-image">
        <img src={background_image} alt={name} />
      </div>
      <div className="productCart-name">
        <p>{shortName}</p>
      </div>
      <div className="productCart-price">
        {selectedCurrencySign}
        {(priceNum * amountNum * selectedCurrencyValue).toFixed(2)}
      </div>
      <div className="productCart-amount">
        <button
          onClick={() => {
            setNewAmount((newAmount += 1));
            dispatch(editItem({ product, newAmount, userRequest: "add" }));
          }}
        >
          <BsChevronUp />
        </button>
        {newAmount}
        <button
          onClick={() => {
            setNewAmount((newAmount -= 1));
            if (newAmount < 1) {
              dispatch(removeItem(product));
            } else {
              dispatch(editItem({ product, newAmount, userRequest: "remove" }));
            }
          }}
        >
          <BsChevronDown />
        </button>
      </div>
      <div className="productCart-removeItem">
        <button onClick={() => dispatch(removeItem(product))}>
          <BsTrash />
        </button>
      </div>
    </article>
  );
};
export default ProductCart;
