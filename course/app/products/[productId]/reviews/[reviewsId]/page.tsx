import React from "react";

const ReviewsId = ({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) => {
  return (
    <div>
      <h1>
        Reviews {params.reviewsId} for product {params.productId}.
      </h1>
    </div>
  );
};

export default ReviewsId;
