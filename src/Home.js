import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/style.css'; 
import Topmenu from './components/Topmenu';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Slider from './components/Slider';
import Footer from './components/footer';
import About from './pages/About';
import AddressMap from './pages/Map';
import SimpleSlider from './components/Slick';

export default function Home() {
  return (
    <Router>
      <Topmenu />
      <Switch>
        <Route exact path="/">
            <Slider />
            <Products />
            <SimpleSlider />
        </Route>
        <Route exact path="/detail/:id">
            <Detail />
        </Route>
        <Route path="/about">
           <About />
        </Route>
         <Route path="/map">
           <AddressMap />
        </Route>
      </Switch>
      <Footer />
    </Router>
    );
  }



