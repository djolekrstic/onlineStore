import React from "react";

const Heading = ({ content }) => {
  return (
    <div className="content">
      <h4>{content}</h4>
    </div>
  );
};
export default React.memo(Heading);
