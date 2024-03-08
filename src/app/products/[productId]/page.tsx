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
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h2> Details of the Product {params.productId}</h2>
    </>
  );
};

export default page;
