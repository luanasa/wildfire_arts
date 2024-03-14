import React from 'react';
import './itemCard.css'; 

function ItemCard({ imageUrl, productName, price }) {
  return (
    <div className="item-card">
      <img src={imageUrl} alt="Item card" />
      <h2>{productName}</h2>
      <span>${price}</span>
    </div>
  );
}

export default ItemCard;
