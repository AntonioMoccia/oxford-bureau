import React from 'react'

function InputField({
    label,
    type,
    htmlFor
}) {
    return (
        <div className='input-field h-16 flex flex-col'>
            <label className=' text-white' htmlFor={htmlFor}>{label}</label>
            <input className='bg-secondary-color text-white outline-none border-none' type={type} id={htmlFor} />
            <div className='underline' />
        </div>
    )
}

export default InputField