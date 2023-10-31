'use client';
import React, { useEffect,  useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import Image from 'next/image';

function Hero() {
    const createAnimation = ()=>{

    }
    useEffect(() => {
        let title = new SplitType('.hero-left >h1',{types:'lines,words'})
        let paragraph = new SplitType('.hero-left > p',{types:'lines,words,chars'})
        const tl = gsap.timeline()
        tl.to('#hero .hero-left h1 .word', {
            ease: "power2",
            y: 1,
            duration: 1.2
        }).to('#hero .hero-left p .char', {
            ease: "power2",
            y: '1.9%',
            duration: 0.4,
            stagger:0.01
        },'<').to('.hero-image',{
            ease: "power2",
            duration: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        },'<')
        window.addEventListener('resize',()=>{
           
            tl.to('#hero .hero-left h1 .word', {
                ease: "power2",
                y: 1,
                duration: 1.2
            }).to('#hero .hero-left p .char', {
                ease: "power2",
                y: '1.9%',
                duration: 0.4,
                stagger:0.01
            },'<').to('.hero-image',{
                ease: "power2",
                duration: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            },'<')
        })
        


    }, [])
    return (
        <section id='hero'>

            <div className='hero-left'>
                <h1> 
                    Lorem Ipsum
                </h1>
                <p>
                    Lorem ipsum dolor sit amet. Ut dignissimos fugit aut.
                </p>
                <div className='hero-contact-button'>
                    Contattaci
                </div>
            </div>

            <div className='hero-right'>
                <div className='hero-image'>
                    <Image alt='hero image' fill={true} src='/hero-image.jpg'   />
                </div>
                {/* <svg className='hero-image' viewBox="0 0 592 610" fill="none">
                    <path d="M592 384.3C592 546.928 436.623 610 267.25 610C97.8763 610 0 546.928 0 384.3C0 221.672 180.57 0 349.943 0C519.317 0 592 221.672 592 384.3Z" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0_3_30" transform="matrix(0.00129043 0 0 0.00109229 -0.0281195 -0.219799)" />
                        </pattern>
                        <image id="image0_3_30" width="794" height="1192" href="/hero-image.jpg" />
                    </defs>
                </svg> */}
            </div>
        </section>
    )
}

export default Hero