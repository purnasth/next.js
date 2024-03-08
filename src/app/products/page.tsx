import React from "react";
import Link from "next/link";

const page = () => {
  const productId = "100";
  return (
    <>
      <h1>Product List</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>
          <Link href="products/3" replace>
            Product 3
          </Link>
        </li>
        {/* replace here on the Link acts as  */}
        <li>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
