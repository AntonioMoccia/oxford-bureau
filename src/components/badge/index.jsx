import React from 'react'

function Badge({
    icon,
    titolo,
    testo
}) {
    return (
        <div className=' border text-secondary-color-text border-black min-w-20 w-40 px-8 py-4 rounded-lg gap-3 h-auto justify-between flex flex-col'>
            <div className='icon flex items-center justify-center text-4xl'>
                {icon}
            </div>
            <h1 className=' w-full text-4xl flex items-center justify-center'>
                {titolo}
            </h1>
            <p className=' w-full flex items-center justify-center'>
                {testo}
            </p>
        </div>
    )
}

export default Badge