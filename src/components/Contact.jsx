'use client'
import React, { useEffect, useState, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'

import SplitType from 'split-type'
import InputField from './InputField'
import TextAreaField from './TextAreaField'




function Contact({ data }) {

  const textAreaRef = useRef(null)
  const [text, setText] = useState('')
  function checkInputChange({ current, prev, onDelete, onInsert }) {
    if (current.length > prev.length) {
      onInsert && onInsert({ current, prev })
    } else if (current.length < prev.length) {
      onDelete && onDelete({ current, prev })
    }
  }

  function autoResize(e) {
    const MIN_HEIGHT = 128
    checkInputChange({
      current: e.target.value,
      prev: text,
      onDelete: ({ prev, current }) => {

        e.target.style.height = 'auto'

        if (e.target.scrollHeight > MIN_HEIGHT) {
          e.target.style.height = e.target.scrollHeight + 'px';
          console.log('if');

        } else {
          console.log('else');
          e.target.style.height = MIN_HEIGHT + 'px';
        }
      },
      onInsert: ({ prev, current }) => {
        console.log(e.target.scrollHeight);
        if (e.target.scrollHeight > MIN_HEIGHT) {
          console.log('add');
          e.target.style.height = e.target.scrollHeight + 'px';
        } else {
          e.target.style.height = MIN_HEIGHT + 'px';
        }

      }
    })
  }
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
    /*     const container = document.querySelector('#contact')
        container.querySelectorAll('label').forEach(label => {
          const labelSplit = new SplitType(label)
          tl.to(labelSplit.chars, {
            y: 0,
            stagger: 0.06
          }, '<')
        }) */
  }, [])

  return (
    <section id='contacts' className=' lg:flex-row lg:items-center lg:px-32 justify-center bg-secondary-color pt-16 h-screen flex flex-col gap-6 '>
      <div className=' left pt-6 lg:w-full  '>
        <form className='contact-form gap-3 flex flex-col px-7'>
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
            onInput={(e) => {
              autoResize(e)
            }}
            onChange={(e) => {
              setText(e.target.value)
            }}
            ref={textAreaRef}
            label={'Testo'}
            type={'text'}
            htmlFor={'testo'}
          />
          <button className=' bg-white text-secondary-color w-24 mt-6 py-2 rounded-md px-5'>Invia</button>
        </form>
      </div>
      <div className='gap-6 flex flex-col lg:justify-center  lg:items-center lg:w-full px-7  md:px-36 text-sm mt-12 text-left right'>
           
           
                <div className=' flex lg:flex-col lg:items-start w-full gap-3 items-center text-white'>
                  <h4 className=' font-bold text-lg'>Email:</h4>
                  <span className=' text-base'>{data.primary.email}</span>
                </div>
                <div className=' flex w-full gap-3 items-center text-white'>
                  <h4 className=' font-bold text-lg'>Phone Number:</h4>
                  <span className=' text-base'>{data.primary.phone}</span>
                </div>
                <div className=' flex w-full gap-3 items-center text-white'>
                  <h4 className=' font-bold text-lg'>P.Iva:</h4>
                  <span className=' text-base'>{data.primary.partita_iva}</span>
                </div>

      </div>
    </section>
  )
}

export default Contact