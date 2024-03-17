import React from 'react';
import "../pages.css";
import ItemCard from '../Item/itemCard';

function DecorPage() {
  return (
    <div className='item-page'>
      <h1>Decor 🌸</h1>
      <div className="items">
      <ItemCard
        imageUrl="./flowers.jpg" 
        productName="Buquê de flores em crochê" 
        price="50" 
      />
      <ItemCard
        imageUrl="./joias.jpg" 
        productName="Porta Jóias Cogumelo" 
        price="25" 
      />
      <ItemCard
        imageUrl="./carregador.jpg" 
        productName="Case Flores" 
        price="10" 
      />
      <ItemCard
        imageUrl="./carregador2.jpg" 
        productName="Protetor de fio Folhas" 
        price="18" 
      />
      <ItemCard
        imageUrl="./fone2.jpg" 
        productName="Meu fone minha vida" 
        price="20" 
      />
      </div>
      <div className="items">
      <ItemCard
        imageUrl="./fone4.jpg" 
        productName="Meu fone minha vida (versão gótica)" 
        price="20" 
      />
      <ItemCard
        imageUrl="./hat2.jpg" 
        productName="Wildflower bucket" 
        price="35" 
      />
      <ItemCard
        imageUrl="./hat3.jpg" 
        productName="Cute bucket" 
        price="35" 
      />
      <ItemCard
        imageUrl="./glasses.jpg" 
        productName="Porta óculos flores" 
        price="18" 
      />
      </div>
      
    </div>
  );
}

export default DecorPage;