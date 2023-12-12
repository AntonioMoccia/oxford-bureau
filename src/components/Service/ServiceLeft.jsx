'use client'
import { PrismicRichText } from '@prismicio/react';
import React, { useEffect } from 'react'

function ServiceLeft({ service }) {

    return (
        <div className='service'>
        <img src={service.service_image.url} />
        <div className='text-xl lg:text-3xl service-description '>
        <PrismicRichText field={ service.text_service } />
        </div>
    </div>
    )
}

export default ServiceLeft