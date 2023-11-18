'use client'
import { PrismicRichText } from '@prismicio/react';
import React from 'react'

function ServiceLeft({ service }) 
{    return (
        <div className='service left-img'>
            <img src={service.service_image.url} />
            <div className='service-description'>
                <PrismicRichText field={ service.text_service } />
            </div>
        </div>
    )
}

export default ServiceLeft