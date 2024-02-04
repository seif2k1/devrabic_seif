import React, { useEffect, useState } from "react";
export default function Loading({ data, children, imageSelected }) {
  const [products, setProducts] = useState(data);
  const imagesloading = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, products !== data ? 10 : 1000);
    })
      .then(() => setProducts(children))
      .catch(() => setProducts(data));
  };
  imagesloading();
  return products;
}
