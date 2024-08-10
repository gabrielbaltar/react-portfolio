import './styles.css';

const Contact = () => { 

  return (
    <section className="contact-container">
      <h1>Touch base via form or connect directly</h1>
      <div className='form-container'>
      <div className="contact">
        <div className="contact-number">
          <span>Telefone</span>
          <p>+21 98909 0580</p>
        </div>
        <div className="contact-place">
          <span>If you wish for a face-to-face discussion, find us at our office location</span>
          <p>123 Artistic Lane, Los Angeles, CA 90001, U.S.A.</p>
        </div>
        <p>
          Share your ideas or aspirations with us, we're all ears. Our attentive
          team is keen to understand, appreciate, and aid in bringing your
          vision into reality.
        </p>
      </div>
      <div className="contact-form">
        <form>
          <div className='contact-input'>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className='contact-input'>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className='contact-input'>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem"
              required
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
      </div>
    </section>
  );
  
}

export default Contact;