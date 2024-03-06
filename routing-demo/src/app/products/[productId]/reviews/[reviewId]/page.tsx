import React from "react";

const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <>
      <h2>Review Product Page</h2>

      <h2>
        Review {params.productId} for product {params.reviewId}
      </h2>
    </>
  );
};

export default page;
