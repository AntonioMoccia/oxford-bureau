import React from 'react'

function Hero() {
    return (
        <section id='hero-section'>

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
                <img src='/hero-image.jpg' className='hero-image'/>
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