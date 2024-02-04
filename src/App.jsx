import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";
import "./App.css";
import Products from "../components/products/Products";
import "./index.css";
import Users from "../components/users/Users";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<div>Id</div>} />
          </Route>
          <Route path="/products/" element={<Products />}>
            <Route path=":id" element={<div>Id</div>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
