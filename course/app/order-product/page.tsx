"use client";

import React from "react";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order was placed successfully.");
    router.push("/");
  };
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">Order Product</h1>
      <button
        onClick={handleClick}
        className="bg-blue-900 py-2 px-3 text-white rounded-md my-2"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderProduct;
