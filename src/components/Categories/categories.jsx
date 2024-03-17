import './categories.css';
import "@fontsource/roboto-mono";
import Card from '../Card/card';

function Categories() {
  return (
    <div className='container'>
        <h1>Bem vindos a <span>minha</span> lojinha 🤍</h1>
        <hr className='line' />

        <div className="cardDiv">
          <Card 
            imageUrl="./flowers.jpg"
            imageAlt="Flores de crochê"
            textContent="Decor"
            linkTo="/decorPage"
          />
          <Card 
            imageUrl="./chaveiro3.jpg"
            imageAlt="Descrição da imagem"
            textContent="Chaveiros"
            linkTo="/keychainPage"
          />
          <Card 
            imageUrl="./carteira3.jpg"
            imageAlt="Descrição da imagem"
            textContent="Carteiras/Bolsas"
            linkTo="/bagsPage"
          />
          <Card 
            imageUrl="./cover2.jpg"
            imageAlt="Descrição da imagem"
            textContent="Leitores"
            linkTo="/readersPage"
          />
        </div>
        <div className="line"></div>
    </div>
  );
}

export default Categories;
