import React, { useState } from 'react';
import './contactForm.css'

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Email:', email);
    console.log('Mensagem:', message);
    // Após enviar o formulário, você pode limpar os campos
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className='form'>
      <div className='form-group'>
        <label htmlFor="email">Seu e-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor="message">Oii, como posso te ajudar?</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
        <button className='form-submit-btn' type="submit">Enviar</button>
      </form>
    </div>
    
  );
}

export default ContactForm;