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

function App() {
  return (
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route path="/products">
         <Products></Products>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  );
}

export default App;
