import React from 'react';
import "./bagspage.css";
import ItemCard from '../Item/itemCard';

function BagsPage() {
  return (
    <div className='item-page'>
      <h1>Decor</h1>
      <div className="items">
      <ItemCard
        imageUrl="./flowers.jpg" 
        productName="Buquê de flores em crochê" 
        price="30" 
      />
      <ItemCard
        imageUrl="./flowers.jpg" 
        productName="Produto" 
        price="Preço" 
      />
      <ItemCard
        imageUrl="./flowers.jpg" 
        productName="Produto" 
        price="Preço" 
      />
      <ItemCard
        imageUrl="./flowers.jpg" 
        productName="Produto" 
        price="Preço" 
      />
      </div>
      
    </div>
  );
}

export default BagsPage;