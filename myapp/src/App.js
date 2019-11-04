import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/header.component"
import Footer from "./components/footer.component"
import MoviesList from "./components/movies-list.component";
import Details from "./components/details/details.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Header />
      <Footer />
      <br/>
      <Route path="/list" exact component={MoviesList} />
      <Route path="/details/:id" component={Details} />
      </div>
    </Router>
  );
}

export default App;
