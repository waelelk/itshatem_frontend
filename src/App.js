import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { motion } from 'framer-motion';

import Nav from './components/Nav'
import Home from './pages/Home'
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Footer from './components/Footer';
import Thanks from "./components/Thanks";
import Notfound from "./pages/NotFound";


function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  }
  

  return (
    <div className="App">
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
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
