import React from 'react'

function Badge({
    icon,
    titolo,
    testo
}) {
    return (
        <div className='badge'>
            <div className='icon'>
                {icon}
            </div>
            <h1>
                {titolo}
            </h1>
            <p>
                {testo}
            </p>
        </div>
    )
}

export default Badge