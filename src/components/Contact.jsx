import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'

import SplitType from 'split-type'

function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
    const container = document.querySelector('#contacts')
    container.querySelectorAll('label').forEach(label=>{
      const labelSplit = new SplitType(label)
    })
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contacts',
        toggleActions: "restart none none reset"
      }
    });
    tl.to('.underline', {
      scaleX: 1,
      duration: 0.9,
      stagger: 0.2,
      
    }).to('.char',{
      y:0,
      
    },'-=0.8')

  }, [])
  return (
    <section id='contacts'>
      <div className='section-contacts left'>
        <form className='contact-form'>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />
            <div className='underline' />
          </div>
          <div className='input-field' >
            <label htmlFor='nome'>Nome e cognome</label>
            <input type='text' id='nome' />
            <div className='underline' />
          </div>
          <div className='input-field'>
            <label htmlFor='testo'>Testo</label>
            <textarea id='testo' />
            <div className='underline' /> 
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