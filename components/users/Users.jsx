import Login from "./Login";
import { Link } from "react-router-dom";
const Users = () => {
  return (
    <div className="md:px-[80px] px-[20px] h-full flex flex-col  ">
      <Link
        to="/products"
        className="my-[20px] border px-4 py-2 rounded-lg w-full lg:w-[300px]"
      >
        {" "}
        Back To Shopping
      </Link>
      <Login />
    </div>
  );
};

export default Users;
