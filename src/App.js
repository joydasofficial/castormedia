import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Navigation from './Components/NavBar/Navigation';
import './index.css'
import Footer from './Components/Footer/Footer';
import MobileNavigation from './Components/NavBar/MobileNavigation';
import Portfoilo from './Components/Portfolio/Portfolio';

const App = () =>{
    return (
      <>
          <Navigation />
          <MobileNavigation />
          <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/castormedia' component = {Home} />
            <Route exact path='/about' component= {About} />
            <Route exact path='/services' component= {Services} />
            <Route exact path='/portfolio' component= {Portfoilo} />
            <Route exact path='/contact' component= {Contact} />
          </Switch>
          <Footer />
      </>
    );
};

export default App;