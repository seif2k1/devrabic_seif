import { Select } from "@mantine/core";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { updateFiltring } from "../redux/createSlice/Product";

const Brand = ({ setCategoryFilter }) => {
  const [products, setProducts] = useState([]);
  const select = useSelector((state) => state.cartItem.filter);
  const dispatch = useDispatch();
  const [brand, setBrand] = useState(select.brand);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`);
        response && setProducts(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          select.category
            ? `https://dummyjson.com/products/category/${select.category}?limit=0`
            : `https://dummyjson.com/products?limit=0`
        );
        response && brand
          ? setCategoryFilter(
              response.data.products.filter((data) => data?.brand === brand)
            )
          : setCategoryFilter(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, [select, products]);
  const filterBrand = [...new Set(products?.map((data) => data?.brand))].sort();
  useEffect(() => {
    dispatch(updateFiltring({ ...select, brand: brand }));
  }, [brand]);
  return (
    <>
      <Select
        label="Brand"
        data={filterBrand}
        value={brand}
        onChange={setBrand}
        placeholder="Select A Category"
        searchable
        allowDeselect={false}
        className="w-full flex items-start font-['Neutra'] justify-center flex-col capitalize"
      />
    </>
  );
};

export default Brand;
