'use client'
import { PrismicRichText } from '@prismicio/react';
import React, { useEffect } from 'react'
import Image from 'next/image'
function ServiceLeft({ service }) {

    return (

        <div className='service'>
            {
                service.service_image.url ? (
                    <div className=' w-full lg:w-5/6'>
                    <Image
                        className='w-full h-auto'
                        src={service.service_image.url}
                        height={service.service_image.dimensions.height}
                        width={service.service_image.dimensions.width} />
</div>
                ) : null
            }
            <div className='service-description text-xl lg:text-xl lg:pt-3 '>
                <PrismicRichText field={service.text_service} />
            </div>
        </div>
    )
}

export default ServiceLeft 