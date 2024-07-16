import { notFound } from "next/navigation";

const ReviewDeatil = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product number {params.productId}.
    </h1>
  );
};

export default ReviewDeatil;
