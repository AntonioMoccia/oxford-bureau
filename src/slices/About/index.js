import React, { useEffect } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import Badge from './badge'
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param {AboutProps}
 */
const About = ({ slice }) => {

  useEffect(() => {
    const aboutText = new SplitType('.about-text > p')
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    gsap.to('.about-text p .char', {

      scrollTrigger: {
        trigger: '#about-section',
        scrub: true,
        start: `top +=${window.innerHeight / 1.7}`,
        end: `+=${window.innerHeight / 1.20}`,
        markers:false
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
      
    })


  }, [])


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='about-section'
    >
      <div className='about-text'>
        <p>
          {slice.primary.about_text[0].text}
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
  );
};

export default About;
