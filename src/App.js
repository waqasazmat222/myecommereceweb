import TopNavbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/cart";
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from "./components/Categories";
import Profile from './components/profile/Profile'
import Loading from './components/loading'
import { ECommereceContext} from "./context/context";

function App() {
  const { loading } = React.useContext(ECommereceContext);
  return (
    <>
     {loading && <Loading/>} 
     <Router>
      <TopNavbar />
       <Switch>
         <Route exact path="/">
         <Categories />
             <Home />
         </Route>
         <Route path="/cart">
             <Cart/>
         </Route>
         <Route path="/profile">
             <Profile />
         </Route>
       </Switch>
     </Router>
  </>
  );
}

export default App;
