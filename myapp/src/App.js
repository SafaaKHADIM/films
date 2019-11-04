import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"
import MoviesList from "./components/movies-list.component";
import Details from "./components/details/details.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Header />
      <Footer />
      <br/>
      <Route path="/" exact component={MoviesList} />
      
      </div>
    </Router>
  );
}

export default App;
