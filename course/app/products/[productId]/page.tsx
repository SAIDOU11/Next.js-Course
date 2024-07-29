import React from "react";

const ProducDetails = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return (
    <div>
      <h1>Product {params.productId} Details.</h1>
    </div>
  );
};

export default ProducDetails;
