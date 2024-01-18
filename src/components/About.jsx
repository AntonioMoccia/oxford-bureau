'use client'
import React, { useEffect } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import Badge from './badge'
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { PrismicRichText } from '@prismicio/react'

function About({ data }) {
  useEffect(() => {
    const aboutText = new SplitType('.about-text', { types: 'words,chars' })
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()


    gsap.to('.about-text .char', {
      scrollTrigger: {
        trigger: '#about-section',
        start: `top center`,
        end: `+=${document.querySelector('#about-section').getBoundingClientRect().height / 1.5}`,
        scrub: true,
        markers: false
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,

    })


  }, [])
  return (
    <section id='about-section'>
      <div className='about-text lg:px-64 px-4 text-md lg:text-4xl py-10'>
        <PrismicRichText field={data.primary.about_text} />
      </div>
      <div className='w-full py-8 lg:py-12 flex items-center justify-center'>
        <div className=' grid grid-cols-2 gap-8 md:gap-12  md:grid-cols-3'>

          <Badge
            icon={<AiOutlineCalendar />}
            titolo={'25+'}
            testo={'Esperienza'}
          />
          <Badge
            icon={<AiOutlineCalendar />}
            titolo={'25+'}
            testo={'Esperienza'}
          />
          <Badge
            icon={<AiOutlineCalendar />}
            titolo={'25+'}
            testo={'Esperienza'}
          />

        </div>
      </div>
    </section>
  )
}

export default About