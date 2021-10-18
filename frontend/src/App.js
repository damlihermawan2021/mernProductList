import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

import AddProduct from "./components/AddProduct.js";
import EditProduct from "./components/EditProduct.js";
import ProductList from "./components/ProductList.js";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <Switch>
          <Route exact path="/">
          <ProductList />
          </Route>
          <Route path="/add">
          <AddProduct />
          </Route>
          <Route path="/edit/:id">
          <EditProduct />
          </Route>
        </Switch>
        
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;
