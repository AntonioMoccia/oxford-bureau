'use client'
import React, { useEffect } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import Badge from './badge'
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { PrismicRichText } from '@prismicio/react'
function About({data}) {
  useEffect(() => {
    console.log(data.primary.about_text);
    const aboutText = new SplitType('.about-text > p')
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    gsap.to('.about-text p .char', {

      scrollTrigger: {
        trigger: '#about-section',
        scrub: true,
        start: `top +=${window.innerHeight / 1.7}`,
        end: `+=${window.innerHeight / 1.20}`,
        markers: false
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,

    })


  }, [])
  return (
    <section id='about-section'>
      <div className='about-text'>
        <p>
        {data.primary.about_text[0].text}
        </p>
      </div>
      <div className='badges-container'>

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
    </section>
  )
}

export default About