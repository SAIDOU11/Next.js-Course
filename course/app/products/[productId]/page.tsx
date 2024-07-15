const DetailProduct = ({ params }: { params: { productId: string } }) => {
  return <h1>Detail about product {params.productId} </h1>;
};

export default DetailProduct;
