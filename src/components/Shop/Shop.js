import React from "react";
import bg from './spacexbg.jpg'
import './Shop.scss';
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard/ItemCard";

function Shop(props) {

    const listItems = props.products.map((item, index) => <Link key={index} to={`/shop/${item.id}`}><ItemCard id={item.id} title={item.title} price={item.price}/></Link>);

  return (
    <section style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.73)), url(${bg})` 
    }}>
        <div className='shop-box'>
            <h1>Shop</h1>
            <div className='products'>
                {listItems}              
            </div>
        </div>
    </section>
  );
}

export default Shop;
