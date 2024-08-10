import './styles.css';
import { useState } from 'react';
import { useSnackbar } from 'notistack';


const Contact = () => { 

  const {enqueueSnackbar} = useSnackbar();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xeojklna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {

        enqueueSnackbar('Mensagem enviada com sucesso!', { variant: 'success' });
        setFormData({ name: '', email: '', message: '' });

      } else {

        enqueueSnackbar('Houve um problema ao enviar a mensagem. Tente novamente.', { variant: 'error' });

      }
    } catch (error) {

      enqueueSnackbar('Erro ao enviar a mensagem. Verifique sua conexão e tente novamente.', { variant: 'error' });

    }
  };

  return (
    <>
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
                Share your ideas or aspirations with us, we are all ears. Our attentive
                team is keen to understand, appreciate, and aid in bringing your
                vision into reality.
              </p>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit} method='POST'>
                <div className='contact-input'>
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    autoComplete='off'
                    autoCorrect='off'
                    value={formData.name}
                    onChange={handleChange}
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
                    autoComplete='off'
                    autoCorrect='off'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='contact-input'>
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem"
                    autoComplete='off'
                    autoCorrect='off'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </section>
    </>
  );
}

export default Contact;