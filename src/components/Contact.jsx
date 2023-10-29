import React from 'react'

function Contact() {
  return (
    <div id='contacts'>
      <div className='section-contacts left'>
        <form className='contact-form'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' />
          <label htmlFor='nome'>Nome e cognome</label>
          <input type='text' id='nome' />
          <label htmlFor='testo'>Testo</label>
          <textarea id='testo' />
          <button>Invia</button>
        </form>
      </div>
      <div className='section-contacts right'>
        <h4>Email</h4>
        <p>info@oxfordbureau.it</p>
        <h4>Phone Number</h4>
        <p>+39 3936545133</p>
        <h4>P.Iva</h4>
        <p>12345678945</p>
      </div>
    </div>
  )
}

export default Contact