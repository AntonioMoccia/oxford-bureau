import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'

import SplitType from 'split-type'
import InputField from './InputField'

function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contacts',
        toggleActions: "restart none none reset"
      },


    });
    tl.to('.underline', {
      scaleX: 1,
      duration: 0.9,
      stagger: 0.2

    })
    const container = document.querySelector('#contacts')
    container.querySelectorAll('label').forEach(label => {
      const labelSplit = new SplitType(label)
      tl.to(labelSplit.chars, {
        y: 0,
        stagger: 0.06
      }, '<')
    })



  }, [])
  return (
    <section id='contacts'>
      <div className='section-contacts left'>
        <form className='contact-form'>
          <InputField
            label={'Email'}
            type={'text'}
            htmlFor={'email'}
          />
          <InputField
            label={'Nome e cognome'}
            type={'text'}
            htmlFor={'nome'}
          />
          <InputField
            label={'Testo'}
            type={'text'}
            htmlFor={'testo'}
          />
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