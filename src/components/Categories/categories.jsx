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
            linkTo="/DecorPage"
          />
          <Card 
            imageUrl="./flowers.jpg"
            imageAlt="Descrição da imagem"
            textContent="Decor"
          />
          <Card 
            imageUrl="./flowers.jpg"
            imageAlt="Descrição da imagem"
            textContent="Decor"
          />
          <Card 
            imageUrl="./flowers.jpg"
            imageAlt="Descrição da imagem"
            textContent="Decor"
          />
        </div>
        <div className="line"></div>
    </div>
  );
}

export default Categories;
