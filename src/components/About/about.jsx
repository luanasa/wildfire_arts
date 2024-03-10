import './about.css';

function About() {
  return (
   <div className="about_container">
    <div className="imgDiv">
      <img src="./me.jpeg" alt="Lua pic" srcset="" />
      <span>Tudo feito com amor e carinho 🤍</span>
    </div>
    <div className="intro">
      <span>~ Oi amigos, bem vindos a minha lojinha!</span>
      <p>Espero que goste de tudo que encontrar por aqui, mas se você já tiver algo
        em mente e não achar por aqui, pode me chamar que faremos acontecer! <br />

        Se interessou e quer aprender a fazer crochê? Eu te ajudo com seus primeiros
        passos no meu canal do youtube. Se inscreve lá 🤍 (link alí em cima)</p>
      <span>*** 100% de todo o lucro irá para os sachês da minha gatinha Sushi hahaha</span>
    </div>
   </div>
  );
}

export default About;
