'use client'
import { PrismicRichText } from '@prismicio/react';
import React, { useEffect } from 'react'
import Image from 'next/image'
function ServiceRight({ service }) {

    return (
        <div className='service right-img'>
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
            <div className='service-description text-xl lg:text-xl'>
                <PrismicRichText field={service.text_service} />
            </div>
        </div>
    )
}

export default ServiceRight