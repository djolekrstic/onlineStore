import { Delivery, Box, Support, Payment } from "../svgIcons";

const HeroSupport = () => {
  const widthValue = 70;

  return (
    <div className="line">
      <div className="line-item">
        <Delivery width={widthValue} />
        <div className="line-item-info">
          <h5>Free Shipping</h5>
          <p>On all orders over $75.00</p>
        </div>
      </div>
      <div className="line-item">
        <Box width={widthValue} />
        <div className="line-item-info">
          <h5>Free Returns</h5>
          <p>Returns are free within 9 days</p>
        </div>
      </div>
      <div className="line-item">
        <Support width={widthValue} />
        <div className="line-item-info">
          <h5>Support 24/7</h5>
          <p>Contact us 24 hours a day</p>
        </div>
      </div>
      <div className="line-item">
        <Payment width={widthValue} />
        <div className="line-item-info">
          <h5>100% Payment Secure</h5>
          <p>Your payment is safe with us.</p>
        </div>
      </div>
    </div>
  );
};
export default HeroSupport;
