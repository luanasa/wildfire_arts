import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link do React Router
import './card.css';

function Card(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link to={props.linkTo}> 
      <div 
        className='card' 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
         <img src={props.imageUrl} alt={props.imageAlt}/>
         {isHovered && <span className="content">{props.textContent}</span>}
      </div>
    </Link>
  );
}

export default Card;
