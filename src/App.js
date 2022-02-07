import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Componets/Header';
import Home from './Componets/Home';
import Checkout from './Componets/Checkout';
import Login from './Componets/Login';
import { useStateValue } from './Componets/StateProvider';
import { auth } from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else {
        dispatch({
          type: "SET_USER",
          user: null,
    });
  }
});
  return () => {
    unsubscribe();
  }

  },[]);

  console.log("USER IS >>>>",user);

  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/checkout">
       <Header />
         <Checkout/>
       </Route>
       <Route path="/login">
         <Login/>
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


