import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Componets/Header';
import Home from './Componets/Home';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/checkout">
       <Header />
         <h1>checkout</h1>
       </Route>
       <Route path="/login">
         <h1>login</h1>
       </Route>
       <Route path="/">
         <Header />
         <Home/>
       </Route>
     </Switch>

    </div>
    </Router>
  );
}

export default App;


