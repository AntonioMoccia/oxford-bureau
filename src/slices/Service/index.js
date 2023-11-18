'use client'
import React, { useEffect } from 'react'
import ServiceLeft from './ServiceLeft'
import ServiceRight from './ServiceRight'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

/**
 * @typedef {import("@prismicio/client").Content.ServiceSlice} ServiceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceSlice>} ServiceProps
 * @param {ServiceProps}
 */
const Service = ({ slice }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const services = document.querySelectorAll('.service')

    services.forEach((service) => {

      const image = service.querySelector('img')
      const title = service.querySelector('h1')
      const paragraph = service.querySelector('p')
      const splitParagraph = new SplitType(paragraph)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: service,
          toggleActions: "restart none none reset"
        }
      })
      tl.set(service, { autoAlpha: 1 })
        .to(image, {
          //    xPercent:100,
          scale: 1,
          ease: 'Power2.out'
        }).to(image, {
          ease: "power2",
          duration: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }, '<').to(title, {
          opacity: 1
        }, '<').to(splitParagraph.words, {
          opacity: 1,
          stagger: 0.03
        }, '<')
    })
  }, [])

  return (
    <section
      id='services'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {
        slice.items.map((service, i) => {
          return i % 2 == 0 ? <ServiceLeft key={i} service={service} /> : <ServiceRight key={i} service={service} />
        })
      }
    </section>
  );
};

export default Service;
