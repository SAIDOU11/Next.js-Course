import React from "react";
import { notFound } from "next/navigation";

const ReviewDetail = ({
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
      <h1 className="text-3xl font-bold mb-5">
        Reviews {params.reviewsId} for product {params.productId}.
      </h1>
    </div>
  );
};

export default ReviewDetail;
