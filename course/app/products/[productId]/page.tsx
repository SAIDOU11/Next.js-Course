import React from "react";
import { Metadata } from "next";

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
      resolve(`${params.productId}`);
    }, 2000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProducDetails = ({ params }: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Product {params.productId} Details.
      </h1>
    </div>
  );
};

export default ProducDetails;
