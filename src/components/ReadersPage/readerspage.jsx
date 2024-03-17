import React from 'react';
import "../pages.css";
import ItemCard from '../Item/itemCard';

function ReadersPage() {
  return (
    <div className='item-page'>
      <h1>Especial Leitores 📖</h1>
      <div className="items">
      <ItemCard
        imageUrl="./cover2.jpg" 
        productName="Capa estilos" 
        price="45,00" 
      />
      <ItemCard
        imageUrl="./cover4.jpg" 
        productName="Capa Catty" 
        price="35,00" 
      />
      <ItemCard
        imageUrl="./cover.jpg" 
        productName="Capa Cores" 
        price="20,00" 
      />
      <ItemCard
        imageUrl="./cover3.jpg" 
        productName="Capa Tulipa" 
        price="40,00" 
      />
      </div>
      
    </div>
    
  );
}

export default ReadersPage;