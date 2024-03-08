import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
};

export default page;
