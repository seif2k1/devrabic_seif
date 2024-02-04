import React, { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateFiltring } from "../redux/createSlice/Product";

function CategoryFilter({ setCategoryFilter }) {
  const select = useSelector((state) => state.cartItem.filter);
  const dispatch = useDispatch();
  ///// set filter by limit the size and how mush can skip ///////
  ////// this state to make easy to search a product by id min-max /////
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(select.category);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=0`
        );
        response && setProducts(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, [select]);
  const [products1, setProducts1] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          category
            ? `https://dummyjson.com/products/category/${category}?limit=0`
            : `https://dummyjson.com/products?limit=0`
        );
        response && setCategoryFilter(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, [select]);
  const filterCategory = [
    ...new Set(products?.map((data) => data?.category)),
  ].sort();
  const filterBrand = [...new Set(products?.map((data) => data?.brand))].sort();
  const uppercaseFilterCategory = filterCategory?.map(
    (data) => data?.charAt(0)?.toUpperCase() + data?.slice(1)
  );
  useEffect(() => {
    dispatch(updateFiltring({ ...select, category: category }));
  }, [category]);
  return (
    <div className="w-full flex font-['Neutra'] items-start justify-start  gap-6">
      <Select
        label="Category"
        data={uppercaseFilterCategory}
        allowDeselect={false}
        value={category}
        onChange={setCategory}
        placeholder="Select A Category"
        searchable
        clearButtonProps={{ "aria-label": "Clear input" }}
        className="flex items-start w-full justify-center flex-col capitalize "
      />
    </div>
  );
}
function Category({ setCategoryFilter }) {
  return (
    <div className="w-full flex items-start justify-start ">
      <CategoryFilter setCategoryFilter={setCategoryFilter} />
    </div>
  );
}

export default Category;
