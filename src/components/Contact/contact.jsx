import './contact.css';
import ContactForm from '../ContactForm/contactForm';

function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_infos">
        <h1>Fale comigo.</h1>
        <p>Pedidos, perguntas, elogios ou reclamações. <span>Fique a vontade
        para me dizer o que você precisar.</span> 🤍</p>
        <img src="./cat.png" alt="Cat holding a buquet" srcset="" />
      </div>
      <div className="form_container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;