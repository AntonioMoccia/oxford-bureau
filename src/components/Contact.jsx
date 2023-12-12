'use client'
import React, { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'

import SplitType from 'split-type'
import InputField from './InputField'
import TextAreaField from './TextAreaField'

function Contact({ data }) {

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
      <div className='section-contacts lg:px-64 left'>
        <form className='contact-form gap-3'>
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
          <TextAreaField
            label={'Testo'}
            type={'text'}
            htmlFor={'testo'}
          />
          <button className=' bg-white text-secondary-color w-24 mt-6 py-2 rounded-md px-5'>Invia</button>
        </form>
      </div>
      <div className='section-contacts px-14 md:px-36 text-sm mt-4 text-left right'>
       
          <h4>Email</h4>
          <p>{data.primary.email}</p>
          <h4>Phone Number</h4>
          <p>{data.primary.phone}</p>
          <h4>P.Iva</h4>
          <p>{data.primary.partita_iva}</p>
   
      </div>
    </section>
  )
}

export default Contact