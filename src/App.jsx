import React from 'react'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product6 from './pages/Product6';
import Product7 from './pages/Product7';
import Product8 from './pages/Product8';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import Particle from './components/Particle';
import ModelCan1 from './components/canvas/ModelCan1';
import ModelCan2 from './components/canvas/ModelCan2';
import ModelCan3 from './components/canvas/ModelCan3';
import ModelCan4 from './components/canvas/ModelCan4';
import ModelCan5 from './components/canvas/ModelCan5';
import ModelCan6 from './components/canvas/ModelCan6';
import ModelCan7 from './components/canvas/ModelCan7';
import ModelCan8 from './components/canvas/ModelCan8';
import CursorAnimated from './components/CursorAnimated';
const App = () => {
  return (
  <>
  <CursorAnimated />
  <Router>
      <Navbar />
      <Particle />
    <Routes>
      <Route path='/' exact Component={Login}></Route>
      <Route path='/home' exact Component={Home}></Route>
      <Route path='/product' exact Component={Product}></Route>
      <Route path='/product1' exact Component={Product1}></Route>
      <Route path='/product2' exact Component={Product2}></Route>
      <Route path='/product3' exact Component={Product3}></Route>
      <Route path='/product4' exact Component={Product4}></Route>
      <Route path='/product5' exact Component={Product5}></Route>
      <Route path='/product6' exact Component={Product6}></Route>
      <Route path='/product7' exact Component={Product7}></Route>
      <Route path='/product8' exact Component={Product8}></Route>
      <Route path='/modelCan1' exact Component={ModelCan1}></Route> //Done
      <Route path='/modelCan2' exact Component={ModelCan2}></Route> //Done
      <Route path='/modelCan3' exact Component={ModelCan3}></Route> //Done
      <Route path='/modelCan4' exact Component={ModelCan4}></Route> //Done
      <Route path='/modelCan5' exact Component={ModelCan5}></Route> //Done
      <Route path='/modelCan6' exact Component={ModelCan6}></Route> //Done
      <Route path='/modelCan7' exact Component={ModelCan7}></Route> //Done
      <Route path='/modelCan8' exact Component={ModelCan8}></Route> //Done
    </Routes>
    <Footer />
  </Router>
  </>
  );
};

export default App
