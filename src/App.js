import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.scss';
import Home from './components/home/Home';
import Shop from './components/Shop/Shop';
import ItemPage from "./components/ItemPage/ItemPage";
import Basket from "./components/Basket/Basket";

function App() {

  const products = [
    {
      title: 'Hat 1',
      price: 24.99,
      id: '000-001',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '../images/hat.png'
    },
    {
      title: 'Hat 2',
      price: 24.99,
      id: '000-002',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '../images/hat.png'
    },
    {
      title: 'Hat 3',
      price: 24.99,
      id: '000-003',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '../images/hat.png'
    },
    {
      title: 'Hat 4',
      price: 24.99,
      id: '000-004',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '../images/hat.png'
    }
  ]

  const [basket, setBasket] = useState([]);
  const [basketSize, setBasketSize] = useState(0)
  const [basketTotal, setBasketTotal] = useState(0)

  useEffect(
    () => {
      setBasketSize(basket.length)
      let sum = 0;
      basket.forEach(function(item){
        sum += item.total
      })
      setBasketTotal(sum)
    }, [basket]
  )

  const changeBasket = (id, amount) => {
    const tempBasket = [...basket]
    const bId = tempBasket.findIndex(item => item.id === id)
    const item = tempBasket[bId] 
    const prevQuant = item.quant
    const newQuant = prevQuant + amount
    const newTotal = item.price * newQuant
    item.quant = newQuant
    item.total = newTotal
    setBasket(tempBasket)
  }

  const addToBasket = (total, quant, price, id) => {
    const itemAdd = {}
    itemAdd.total = total
    itemAdd.id = id
    itemAdd.quant = quant
    itemAdd.price = price

    let tempBasket = [...basket]
    let searchIndex = tempBasket.findIndex(item => item.id === id)

    if (searchIndex === -1) {
      tempBasket.push(itemAdd)
    }else{
      let basketItem = tempBasket[searchIndex]
      let totalQuant = basketItem.quant + quant
      let totalPrice = totalQuant * price
      basketItem.quant = totalQuant
      basketItem.total = totalPrice
    }

    setBasket(tempBasket)
  }

  const removeItem = (id) => {
    let tempBasket = [...basket]
    let searchIndex = tempBasket.findIndex(item => item.id === id)

    let filtered = tempBasket.filter(function(value, index, arr){ 
      return index !== searchIndex;
    });

    setBasket(filtered)
  }

  return (
    <Router>
      <div className='app-wrap'>
        <nav>
          <div>
            <Link to='/'>SPACE EX</Link>
          </div>
          <div className='right-nav'>
            <div><Link to='/shop'>SHOP</Link></div>
            <div className='basket-cont'>
              <Link to='/basket'> 
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-basket" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <polyline points="7 10 12 4 17 10" />
                  <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" />
                  <circle cx="12" cy="15" r="2" />
                </svg>
                ({basketSize})
              </Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop products={products}/>
          </Route>
          <Route path='/shop/:id'>
            <ItemPage addToBasket={addToBasket} products={products}/>
          </Route>
          <Route path="/basket">
            <Basket removeItem={removeItem} changeBasket={changeBasket} total={basketTotal} products={products} basket={basket}/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
