import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";

import Nav from './components/Nav'
import Home from './pages/Home'
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Footer from './components/Footer';
import Thanks from "./components/Thanks";
import Notfound from "./pages/NotFound";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <div className="App">
      {
        loading ?
          <div class="h-screen flex items-center justify-center" >
            <PuffLoader
            color={'#FFFFFF'}
            loading={loading}
            size={40} /> 
              </div>       
          :
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
