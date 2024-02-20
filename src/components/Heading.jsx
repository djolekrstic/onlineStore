import React from "react";

const Heading = ({ content }) => {
  return (
    <div className="content">
      <h1 className="heading">{content}</h1>
    </div>
  );
};
export default React.memo(Heading);
