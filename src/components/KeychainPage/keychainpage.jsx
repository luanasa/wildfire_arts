import React from 'react';
import "../pages.css";
import ItemCard from '../Item/itemCard';

function KeychainPage() {
  return (
    <div className='item-page'>
      <h1>Chaveiros 🐱</h1>
      <div className="items">
      <ItemCard
        imageUrl="./chaveiro.jpg" 
        productName="Urso sem curso" 
        price="20,00" 
      />
      <ItemCard
        imageUrl="./chaveiro2.jpg" 
        productName="My little friends" 
        price="30,00" 
      />
      <ItemCard
        imageUrl="./chaveiro3.jpg" 
        productName="Bunny" 
        price="8,00" 
      />
      <ItemCard
        imageUrl="./chaveiro4.jpg" 
        productName="Tulipa azul" 
        price="10,00" 
      />
      </div>
      <div className="items">
      <ItemCard
        imageUrl="./chaveiro5.jpg" 
        productName="Gatito" 
        price="10,00" 
      />
      <ItemCard
        imageUrl="./chaveiro6.jpg" 
        productName="Tulipa branca pequena" 
        price="7,00" 
      />
      </div>
      
    </div>
    
  );
}

export default KeychainPage;