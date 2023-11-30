import { Delivery, Box, Support, Payment } from "../svgIcons";

const SupportLine = () => {
  const widthValue = 100;

  return (
    <div className="line">
      <Delivery width={widthValue} />
      <Box width={widthValue} />
      <Support width={widthValue} />
      <Payment width={widthValue} />
    </div>
  );
};
export default SupportLine;
