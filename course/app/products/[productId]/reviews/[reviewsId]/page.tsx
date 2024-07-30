import React from "react";
import { notFound } from "next/navigation";

const ReviewsId = ({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) => {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Reviews {params.reviewsId} for product {params.productId}.
      </h1>
    </div>
  );
};

export default ReviewsId;
