import React from 'react'
import ServiceLeft from './Service/ServiceLeft'
import ServiceRight from './Service/ServiceRight'

function Services() {
    return (
        <div id='services'>
          <ServiceLeft />
          <ServiceRight />
          <ServiceLeft />
        </div>
    )
}

export default Services