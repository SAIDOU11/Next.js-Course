"use client";

import React from "react";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) => {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

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
