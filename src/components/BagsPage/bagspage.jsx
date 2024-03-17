import React from 'react';
import "../pages.css";
import ItemCard from '../Item/itemCard';

function BagsPage() {
  return (
    <div className='item-page'>
      <h1>Carteiras & Bolsas 👜</h1>
      <div className="items">
      <ItemCard
        imageUrl="./bag.jpg" 
        productName="Carteira Pixel + chaveiro" 
        price="30,00" 
      />
      <ItemCard
        imageUrl="./bag2.jpg" 
        productName="Carteira Pixel" 
        price="15,00" 
      />
      <ItemCard
        imageUrl="./bag3.jpg" 
        productName="Carteira Totoro" 
        price="15,00" 
      />
      <ItemCard
        imageUrl="./bag4.jpg" 
        productName="Carteira Tulipa" 
        price="18,00" 
      />
      </div>
      
    </div>
  );
}

export default BagsPage;