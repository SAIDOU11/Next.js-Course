import React from "react";
import Link from "next/link";

const ProductList = () => {
  const productId = 100;
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">Product List</h1>
      <h2 className="font-bold text-xl">
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2 className="font-bold text-xl">
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2 className="font-bold text-xl">
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2 className="font-bold text-xl">
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </div>
  );
};

export default ProductList;
