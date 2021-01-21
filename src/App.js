import Home from './pages/Home';
import Tours from './pages/Tours';
import Places from './pages/Places';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Footer from './components/footer/Footer';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Divider } from 'antd';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let x = [' navbar navbar-expand-lg navbar-dark '];
  if (scrolled) {
    x.push('scrolled');
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/project">
            <Home x={x} showSidebar={showSidebar} sidebar={sidebar} />
          </Route>

          <Route exact path="/Tours">
            <Tours x={x} showSidebar={showSidebar} sidebar={sidebar} />
          </Route>

          <Route exact path="/Places">
            <Places x={x} showSidebar={showSidebar} sidebar={sidebar} />
          </Route>

          <Route exact path="/About">
            <About x={x} showSidebar={showSidebar} sidebar={sidebar} />
          </Route>

          <Route exact path="/Contact">
            <Contact x={x} showSidebar={showSidebar} sidebar={sidebar} />
          </Route>

          <Route exact path="/Products/:id">
            <Products x={x} showSidebar={showSidebar} sidebar={sidebar} />
          </Route>
        </Switch>
      </BrowserRouter>
      <Divider style={{ marginTop: `81px` }} />
      <Footer />
    </div>
  );
}

export default App;
