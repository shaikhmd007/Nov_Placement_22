import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Auth from "../Auth/Auth";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import AppLayout from "../Layout/Layout";
import ProductDetail from "../ProductDetails/ProductDetails";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


const Router = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Route path={"/"} component={Home} exact={true} />
        <Route path={"/cart"} component={Cart} />
        <Route path={"/auth"} component={Auth} />
        <Route path={"/product/:id"} component={ProductDetail} />
        <ProtectedRoute path={"/profile"} component={Profile} />
      </AppLayout>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default Router;
