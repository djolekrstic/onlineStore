const ProductCart = ({ product }) => {
  const { background_image, name, priceNum, amountNum } = product;
  const shortName = name?.split(":")[0].substring(0, 23);
  return (
    <article className="productCart">
      <div className="productCart-image">
        <img src={background_image} alt={name} />
      </div>
      <div className="productCart-name">
        <p>{shortName}</p>
      </div>
      <div className="productCart-price">${priceNum * amountNum}</div>
      <div className="productCart-amount">{amountNum}</div>
    </article>
  );
};
export default ProductCart;
