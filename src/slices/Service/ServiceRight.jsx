'use client'
import { PrismicRichText } from '@prismicio/react';
import React, { useEffect } from 'react'

function ServiceRight({service}) {
 
    return (
        <div className='service right-img'>
            <img src={service.service_image.url} />
            <div className='service-description'>
            <PrismicRichText field={ service.text_service } />
            </div>
        </div>
    )
}

export default ServiceRight