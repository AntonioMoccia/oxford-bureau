import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'



function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)

    const afters = document.querySelectorAll('.input-field')
    var rule = CSSRulePlugin.getRule(".input-field::after"); //get the rule
    console.log(rule)
    gsap.to(rule, {
      duration: 1, cssRule: {
        scaleX: 1
      }
    });

/*     const tl = new Timeline({       
      scrollTrigger: {
        trigger: '#contacts',
        toggleActions: "restart none none reset"
      }
     });

 */  }, [])
  return (
    <section id='contacts'>
      <div className='section-contacts left'>
        <form className='contact-form'>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />
          </div>
          <div className='input-field'>
            <label htmlFor='nome'>Nome e cognome</label>
            <input type='text' id='nome' />
          </div>
          <div className='input-field'>
            <label htmlFor='testo'>Testo</label>
            <textarea id='testo' />
          </div>
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
    </section>
  )
}

export default Contact