'use client'
import React, { useEffect } from 'react'
import ServiceLeft from './Service/ServiceLeft'
import ServiceRight from './Service/ServiceRight'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

function Services({ data }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
console.log(data);
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
    <section id='services'>

      {
        data[0].items.map((service, i) => {
          return i % 2 == 0 ? <ServiceLeft key={i} service={service} /> : <ServiceRight key={i} service={service}/>
        })
      }

      {/*       <ServiceRight />
      <ServiceLeft /> */}
    </section>
  )
}

export default Services