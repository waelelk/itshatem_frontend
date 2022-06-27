import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Home from './pages/Home'
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Footer from './components/Footer';
import Thanks from "./components/Thanks";
import Notfound from "./pages/NotFound";


function App() {
  
  
  return (
    <div className="App">
      {
     
          <Router>
            <Nav />
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/blogs/:id">
                  <BlogDetails />
                </Route>
                <Route path="/thanks">
                  <Thanks />
                </Route>
                <Route path="*">
                  <Notfound />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Router>
      }
    </div>
  );
}
     

export default App;
