import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/checkout">
         <h1>checkout</h1>
       </Route>
       <Route path="/login">
         <h1>login</h1>
       </Route>
       <Route path="/">
         <h1>HomePage</h1>
       </Route>
     </Switch>

    </div>
    </Router>
  );
}

     {/* {we need react- router} */}

     {/* {localhost.com} */}
     {/* {localhost.com/checkout} */}
     {/* {localhost.com/login} */}

export default App;


