import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Home/Footer/Footer';
import Products from './Components/Products/Products';
import Reviews from './Components/Home/Reviews/Reviews';
import NotFind from './Components/NotFind/NotFind';

function App() {
  return (
   <Router>
     <Header></Header>
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
       <Route path="*">
         <NotFind></NotFind>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  );
}

export default App;
