import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h2> Details of the Product {params.productId}</h2>
    </>
  );
};

export default page;
