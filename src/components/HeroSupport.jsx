import { Delivery, Box, Support, Payment } from "../svgIcons";

const HeroSupport = () => {
  const widthValue = 80;

  return (
    <div className="line">
      <div className="line-item">
        <Delivery width={widthValue} />
        <div className="line-item-info">
          <h6>Free Shipping</h6>
          <p>On all orders over $75.00</p>
        </div>
      </div>
      <div className="line-item">
        <Box width={widthValue} />
        <div className="line-item-info">
          <h6>Free Returns</h6>
          <p>Returns are free within 9 days</p>
        </div>
      </div>
      <div className="line-item">
        <Support width={widthValue} />
        <div className="line-item-info">
          <h6>Support 24/7</h6>
          <p>Contact us 24 hours a day</p>
        </div>
      </div>
      <div className="line-item">
        <Payment width={widthValue} />
        <div className="line-item-info">
          <h6>100% Payment Secure</h6>
          <p>Your payment are safe with us.</p>
        </div>
      </div>
    </div>
  );
};
export default HeroSupport;
