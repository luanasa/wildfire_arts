import React from 'react';
import './card.css';

function Card(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className='card' 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
       <img src={props.imageUrl} alt={props.imageAlt}/>
       {isHovered && <span className="content">{props.textContent}</span>}
    </div>
  );
}

export default Card;
