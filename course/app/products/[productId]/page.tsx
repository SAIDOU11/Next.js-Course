import React from "react";
import { Metadata } from "next";
import { time } from "console";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProducDetails = ({ params }: Props) => {
  return (
    <div>
      <h1>Product {params.productId} Details.</h1>
    </div>
  );
};

export default ProducDetails;
