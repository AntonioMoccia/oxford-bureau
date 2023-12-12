'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import Image from 'next/image';
import Link from 'next/link';
function Hero({ data }) {

    useEffect(() => {
        let title = new SplitType('.hero-title', { types: 'lines,words' })
        let paragraph = new SplitType('.hero-paragraph', { types: 'lines,words,chars' })

        const tl = gsap.timeline()


        tl.to('.hero-title .word', {
            ease: "power2",
            y: 1,
            duration: 1.2,
            stagger: 0.01
        }).to('.hero-paragraph .char', {
            ease: "power2",
            y: '1.9%',
            duration: 0.8,
            stagger: 0.01
        }, '<').to('.hero-image', {
            ease: "power2",
            duration: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }, '<')
    }, [])



    return (
        <section id='hero' className='h-screen flex flex-col justify-around mt-12 lg:flex-row-reverse '>
            <div className=' flex justify-center  items-center flex-col lg:h-full h-96 lg:mt-0 mt-10 '>
                <div className='h-2/3 w-2/3 lg:w-[35rem] lg:h-[35rem] object-cover object-center flex hero-image justify-center rounded-md items-center overflow-hidden'>
                    <Image loading='eager' src={data.primary.hero_image.url} height={data.primary.hero_image.dimensions.height} width={data.primary.hero_image.dimensions.width} />
                </div>
            </div>
            <div className='h-full px-12 flex flex-col items-center mt-4 justify-start lg:justify-center lg:items-start'>
                <div className='w-full flex flex-col items-center lg:items-start'>
                    <h1 className='w-full text-center lg:text-left text-4xl lg:text-5xl font-semibold hero-title overflow-hidden'>
                        {data.primary.hero_title}
                    </h1>
                    <h4 className=' text-center lg:text-left hero-paragraph overflow-hidden text-xl'>
                        {data.primary.hero_paragraph}
                    </h4>
                    <a href='#contacts' className='mt-8' >
                        <div className=' flex justify-center text-white items-center lg:justify-start rounded-md bg-btn-secondary-color w-auto uppercase text-center px-5 py-3' >
                            Contattaci
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero