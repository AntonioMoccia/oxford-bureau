'use client'
'use client'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'

import SplitType from 'split-type'
import InputField from './InputField'
import TextAreaField from './TextAreaField'
/**
 * @typedef {import("@prismicio/client").Content.ContactsSlice} ContactsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactsSlice>} ContactsProps
 * @param {ContactsProps}
 */
const Contacts = ({ slice }) => {
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
    <section
      id='contacts'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

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
          <TextAreaField
            label={'Testo'}
            type={'text'}
            htmlFor={'testo'}
          />
          <button>Invia</button>
        </form>
      </div>
      <div className='section-contacts right'>

        <h4>Email</h4>
        <p>{slice.primary.email}</p>
        <h4>Phone Number</h4>
        <p>{slice.primary.phone}</p>
        <h4>P.Iva</h4>
        <p>{slice.primary.partita_iva}</p>

      </div>
    </section>
  );
};

export default Contacts;
