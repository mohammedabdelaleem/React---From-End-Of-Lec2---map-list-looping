import ReactDOM from 'react-dom/client';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home/Home';
import Header from './Header/Header';
import ContactUS from './ContactUS/ContactUS';
import AboutUs from './AboutUs/AboutUs';
import Products from './Products/Products';
import NotFound from './NotFound/NotFound';
import productDetails from './Products/productDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Router>
  <Header/>
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/contact" exact component={ContactUS} />
  <Route path="/aboutus" exact component={AboutUs} />
  <Route path="/Products" exact component={Products} />
  <Route path="/Products/:id" exact component={productDetails} />

  <Route component={NotFound }/>
</Switch>

</Router>




);
