'use client'
import { PrismicRichText } from '@prismicio/react';
import React, { useEffect } from 'react'

function ServiceLeft({ service }) {
    useEffect(() => {
        console.log(service?.items);
    }, [])
    return (
        <div className='service left-img'>
            <img src={service?.items[0].service_image.url} />
            <div className='service-description'>
                <PrismicRichText field={ service?.items[0].text_service } />
            </div>
        </div>
    )
}

export default ServiceLeft