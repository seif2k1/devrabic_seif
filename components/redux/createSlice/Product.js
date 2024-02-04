import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItem") !== null
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
const totalAmount =
  localStorage.getItem("totalAmount") !== "undefined"
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
const favoriteItem =
  localStorage.getItem("favoriteItem") !== null
    ? JSON.parse(localStorage.getItem("favoriteItem"))
    : [];
const filter =
  localStorage.getItem("filter") !== null
    ? JSON.parse(localStorage.getItem("filter"))
    : {
        limit: 5,
        category: 0,
        sei: "seif",
        brand: "",
      };
const search =
  localStorage.getItem("search") !== null
    ? JSON.parse(localStorage.getItem("search"))
    : "";
const activePage =
  localStorage.getItem("activePage") !== null
    ? JSON.parse(localStorage.getItem("activePage"))
    : 1;
/*const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;
const setItelFunction = (items, totalQuantity, totalAmount) => {
  localStorage.setItem("cartItem", JSON.stringify(items));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
}; */

const newPrices = (percent, price) => {
  const increase = (percent * price) / 100.0;
  const total = (price - increase.toFixed(2)) / 1.0;
  return total.toFixed(2);
};

const initialState = {
  cartItem: items,
  price: totalAmount,
  favorit: favoriteItem,
  filter: filter,
  search: search,
  activePage: activePage,
};
export const ProductSlice = createSlice({
  initialState,
  name: "ProSlice",
  reducers: {
    addProduct: (state, action) => {
      const findProducts = state.cartItem.find(
        (product) => product._id === action.payload._id
      );
      if (findProducts) {
        //findProducts.cartItem.quantity += 1;
        //state.cartItem[findProducts].quantity += 1;
        findProducts.quantity += 1;
        /* toast.success(`add ${action.payload.name} to your wallet`); */
      } else {
        const productsClone = { ...action.payload, quantity: 1 };
        state.cartItem.push(productsClone);
        localStorage.setItem(
          "cartItem",
          JSON.stringify(state.cartItem.map((item) => item))
        );
        /* toast.success(`add ${action.payload.name} to your wallet`); */
      }
      localStorage.setItem(
        "totalAmount",
        JSON.stringify(
          state.cartItem.reduce(
            (sum, item) =>
              item.sale === true
                ? sum + item.quantity * newPrices(item.percent, item.price)
                : sum + item.quantity * item.price,
            0
          )
        )
      );
    },
    addItem: (state, action) => {
      const findProducts = state.cartItem.find(
        (product) => product._id === action.payload._id
      );
      if (findProducts) {
        //findProducts.cartItem.quantity += 1;
        //state.cartItem[findProducts].quantity += 1;
        findProducts.quantity = findProducts.quantity + action.payload.quantity;
        /* toast.success(`add ${action.payload.name} to your wallet`); */
      } else {
        const productsClone = {
          ...action.payload,
          quantity: Number(action.payload.quantity),
        };
        state.cartItem.push(productsClone);
        /* toast.success(`add ${action.payload.name} to your wallet`); */
      }
      /* state.cartItem.push(action.payload); */
      /* localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      ); */
      /* toast.success(`${action.payload.name} add  to cart`); */

      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      );

      localStorage.setItem(
        "totalAmount",
        JSON.stringify(
          state.cartItem.reduce(
            (sum, item) =>
              item.sale === true
                ? sum + item.quantity * newPrices(item.percent, item.price)
                : sum + item.quantity * item.price,
            0
          )
        )
      );
    },
    updateQuantity: (state, action) => {
      const findProducts = state.cartItem.find(
        (product) => product._id === action.payload._id
      );
      if (findProducts) {
        //findProducts.cartItem.quantity += 1;
        //state.cartItem[findProducts].quantity += 1;
        findProducts.quantity = action.payload.quantity;
        /* toast.success(`add ${action.payload.name} to your wallet`); */
      }
      /* state.cartItem.push(action.payload); */
      /* localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      ); */
      /* toast.success(`${action.payload.name} add  to cart`); */

      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      );

      localStorage.setItem(
        "totalAmount",
        JSON.stringify(
          state.cartItem.reduce(
            (sum, item) =>
              item.sale === true
                ? sum + item.quantity * newPrices(item.percent, item.price)
                : sum + item.quantity * item.price,
            0
          )
        )
      );
    },
    EaraseCard: (state, action) => {
      const findProducts = state.cartItem.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cartItem[findProducts].quantity > 1) {
        //findProducts.cartItem.quantity += 1;
        state.cartItem[findProducts].quantity -= 1;
        /* toast.success(`${action.payload.name} remove one item from your Cart`); */
      }
    },
    Delete: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (product, i) => product._id != action.payload._id
      );

      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      );
      localStorage.setItem(
        "totalAmount",
        JSON.stringify(
          state.cartItem.reduce(
            (sum, item) =>
              item.sale === true
                ? sum + item.quantity * newPrices(item.percent, item.price)
                : sum + item.quantity * item.price,
            0
          )
        )
      );
    },

    addToFavorite(state, action) {
      const existingItem = state.favorit.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        state.favorit.filter((item) => item._id !== action.payload._id);
      } else {
        state.favorit.push(action.payload);
      }

      localStorage.setItem(
        "favoriteItem",
        JSON.stringify(state.favorit.map((item) => item))
      );
    },

    deleteFavorite: (state, action) => {
      state.favorit = state.favorit.filter(
        (product, i) => product._id != action.payload._id
      );
      localStorage.setItem(
        "favoriteItem",
        JSON.stringify(state.favorit.map((item) => item))
      );
    },
    clearFavorite: (state, action) => {
      state.favorit = [];
      localStorage.setItem("favoriteItem", JSON.stringify(state.favorit)); /* 
      toast.success(`Clear All Items Successful`); */
    },
    updateFiltring: (state, action) => {
      state.filter = action.payload;
      localStorage.setItem("filter", JSON.stringify(state.filter));
    },
    searchFilter: (state, action) => {
      state.search = action.payload;
      localStorage.setItem("search", JSON.stringify(state.search));
    },

    updateActivePage: (state, action) => {
      state.activePage = action.payload;
      localStorage.setItem("activePage", JSON.stringify(state.activePage));
    },
  },
});

export const {
  addProduct,
  updateActivePage,
  searchFilter,
  updateFiltring,
  updateQuantity,
  EaraseCard,
  Delete,
  clearFavorite,
  setOpenCart,
  addItem,
  setCloseCart,
  addToFavorite,
  deleteFavorite,
} = ProductSlice.actions;

export const selectCartState = (state) => state.products.cartState;
export const selectCartItem = (state) => state.products.cartItem;

export default ProductSlice.reducer;
