import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "About Page",
    template: "",
  },
  description: "About Page",
};

const page = () => {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
};

export default page;
