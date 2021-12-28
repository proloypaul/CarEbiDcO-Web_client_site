import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer/Footer';
import Products from './Components/Products/Products';
import Reviews from './Components/Home/Reviews/Reviews';
import NotFind from './Components/NotFind/NotFind';
import ProductOrder from './Components/Products/ProductOrder/ProductOrder';
import Login from './Components/Login/Login';
import Registation from './Components/Login/Registation/Registation';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Context/PrivateRoute';
import MyOrder from './Components/Dashboard/User/MyOrder';
import Review from './Components/Dashboard/User/Review';
import Pay from './Components/Dashboard/User/Pay';
import Dashboard from './Components/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageOrder from './Components/Dashboard/Admin/ManageOrder/ManageOrder';
import AddProduct from './Components/Dashboard/Admin/AddProduct/AddProduct';
import Explore from './Components/Explore/Explore';
import CareQuality from './Components/CareQuality/CareQuality';
import ManageProduct from './Components/Dashboard/Admin/ManageProduct/ManageProduct';

function App() {
  return (
   <div>
     <AuthProvider>
      <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route path="/reviews">
          <Reviews></Reviews>
        </Route>
        <PrivateRoute path="/product/:productId">
          <ProductOrder></ProductOrder>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Registation></Registation>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/myOrder">
          <MyOrder></MyOrder>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/pay/:paymentId">
          <Pay></Pay>
        </Route>
        {/* <Route path="/pay">
          <Pay></Pay>
        </Route> */}
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route path="/manageOrder">
          <ManageOrder></ManageOrder>
        </Route>
        <Route path="/manageProduct">
          <ManageProduct></ManageProduct>
        </Route>
        <Route path="/carQuality">
          <CareQuality></CareQuality>
        </Route>
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        <Route path="*">
          <NotFind></NotFind>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
     </AuthProvider>
   </div>
  );
}

export default App;
