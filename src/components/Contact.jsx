import React from 'react'

function Contact() {
  return (
    <div id='contacts'>
      <div className='section-contacts left'>
        <form className='contact-form'>
          <label htmlFor='email'>Email</label>
          <input id='email' />
          <label htmlFor='nome'>Nome e cognome</label>
          <input id='nome' />
          <label htmlFor='testo'>Testo</label>
          <input id='testo' />
          <button>Invia</button>
        </form>
      </div>
      <div className='section-contacts right'>
        contact info
      </div>
    </div>
  )
}

export default Contact