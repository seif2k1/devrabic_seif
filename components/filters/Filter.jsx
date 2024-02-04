import React, { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateFiltring } from "../redux/createSlice/Product";
import Test from "../Test";

function Search({}) {
  const select = useSelector((state) => state.cartItem.filter);
  const dispatch = useDispatch();
  ///// set filter by limit the size and how mush can skip ///////
  const [limit, setLimit] = useState(String(select.limit));
  //// search filter ///////
  const [search, setSearch] = useState("");
  ////// this state to make easy to search a product by id min-max /////
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${Number(0)}`
        );
        response && setProducts(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, [search]);
  //////// end filrer search min-max //////////////////////////////////
  useEffect(() => {
    dispatch(updateFiltring({ ...select, limit: limit }));
  }, [limit]);

  return (
    <div className="w-full flex items-start justify-start  gap-6">
      <Select
        label="Pick Your Items Limits"
        data={["1", "2", "5", "10", "15", "20"]}
        value={limit}
        className="w-full flex items-start justify-start flex-col"
        onChange={setLimit}
        allowDeselect={false}
      />
    </div>
  );
}
function Filter() {
  return (
    <div className="w-full  flex items-start justify-start ">
      <Search />
    </div>
  );
}

export default Filter;
