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
import axios from 'axios';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [value, setValue] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [id, setID] = React.useState();

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

  function handleChanges(newValue, items) {
    setValue(newValue, items);
  }

  function handleChangeID(value) {
    setID(value);
  }

  const clintID = 'je2vpPqIlY_oNO9jhIR_GUIkQkEIE7fzJS0hWg9SLgI';
  const [Result, setResult] = useState();
  const [imgSmall, setImgSmall] = useState();
  const [title, setTitle] = useState();
  const [discription, setDisc] = useState();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  function onChange(value) {
    setQuantity(value);
    console.log(value);
  }

  // function handleChange(event, products) {
  //   props.onChange(cart.length, products);
  // }

  const removeItem = (index) => {
    var array = [...cart];
    console.log(index);
    if (index !== -1) {
      array.splice(index, 1);
      setCart(array);
    }
  };

  const addItem = (id) => {
    // const num = value + 1;
    // console.log(num);
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].value = cart[i].value + 1;
        console.log(cart[i].value);
      }
    }
  };
  const addToCart = (el) => {
    let flag = true;
    if (cart.length === 0) {
      setCart([
        ...cart,

        {
          id: id,
          name: title,
          price: price,
          value: quantity,
          image: imgSmall,
          total: price * quantity,
        },
      ]);
      console.log('empty');

      flag = false;
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === el) {
          flag = false;
        }
      }
    }
    if (flag) {
      setCart([
        ...cart,

        {
          id: id,
          name: title,
          price: price,
          value: quantity,
          image: imgSmall,
          total: price * quantity,
        },
      ]);
    } else {
      console.log('exiest');
    }
  };
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/${id}?client_id=` + clintID)
      .then((res) => {
        // console.log(res);
        setResult(res.data.urls.regular);
        setImgSmall(res.data.urls.small);
        setDisc(res.data.alt_description);
        setTitle(res.data.description);
        setPrice(res.data.user.total_photos);
      });
  }, [id]);

  useEffect(() => {
    const data = localStorage.getItem('data');

    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cart));
    // handleChange(cart.length, cart);
    // localStorage.clear();
    setCartLength(cart.length);
  }, [cart]);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/project">
            <Home
              x={x}
              showSidebar={showSidebar}
              sidebar={sidebar}
              value={value}
              items={items}
              cart={cart}
              cartLength={cartLength}
              removeItem={removeItem}
              addItem={addItem}
            />
          </Route>

          <Route exact path="/Tours">
            <Tours
              x={x}
              showSidebar={showSidebar}
              sidebar={sidebar}
              value={value}
              items={items}
              cart={cart}
              cartLength={cartLength}
              removeItem={removeItem}
              addItem={addItem}
            />
          </Route>

          <Route exact path="/Places">
            <Places
              x={x}
              showSidebar={showSidebar}
              sidebar={sidebar}
              value={value}
              items={items}
              cart={cart}
              cartLength={cartLength}
              removeItem={removeItem}
              addItem={addItem}
            />
          </Route>

          <Route exact path="/About">
            <About
              x={x}
              showSidebar={showSidebar}
              sidebar={sidebar}
              value={value}
              items={items}
              cart={cart}
              cartLength={cartLength}
              removeItem={removeItem}
              addItem={addItem}
            />
          </Route>

          <Route exact path="/Contact">
            <Contact
              x={x}
              showSidebar={showSidebar}
              sidebar={sidebar}
              value={value}
              items={items}
              cart={cart}
              cartLength={cartLength}
              removeItem={removeItem}
              addItem={addItem}
            />
          </Route>

          <Route exact path="/Products/:id">
            <Products
              x={x}
              showSidebar={showSidebar}
              sidebar={sidebar}
              onChange={handleChanges}
              handleChangeID={handleChangeID}
              Result={Result}
              title={title}
              discription={discription}
              onChanges={onChange}
              addToCart={addToCart}
              cart={cart}
              cartLength={cartLength}
              removeItem={removeItem}
              addItem={addItem}
            />
          </Route>
        </Switch>
      </BrowserRouter>
      <Divider style={{ marginTop: `81px` }} />
      <Footer />
    </div>
  );
}

export default App;
