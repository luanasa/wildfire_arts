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
        productName="Gatitos" 
        price="20,00" 
      />
      <ItemCard
        imageUrl="./chaveiro2.jpg" 
        productName="Hora do lanche" 
        price="10,00" 
      />
      <ItemCard
        imageUrl="./chaveiro3.jpg" 
        productName="Miauw" 
        price="5,00" 
      />
      <ItemCard
        imageUrl="./chaveiro4.jpg" 
        productName="Flores" 
        price="2,00" 
      />
      </div>
      
    </div>
  );
}

export default KeychainPage;