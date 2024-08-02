"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Your order was placed successfully");
    router.push("/");
  };

  return (
    <div className="m-4">
      <h1 className="text-xl font-bold mb-4">Order Page</h1>
      <button
        onClick={handleClick}
        className="bg-blue-800 text-white py-2 px-3 rounded-md"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderPage;
