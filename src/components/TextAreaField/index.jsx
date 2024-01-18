import React, { forwardRef } from 'react'

const TextAreaField = forwardRef(function TextAreaField({
    label,
    htmlFor, onChange, onInput
}, ref) {
    return (
        <div className='input-field h-auto flex flex-col text-area-field'>
            <label className=' text-white' htmlFor={htmlFor}>{label}</label>
            <textarea className='bg-secondary-color outline-none text-white border-none h-32' onInput={onInput} onChange={onChange} ref={ref} id={htmlFor} />
            <div className='underline' />
        </div>
    )
})

export default TextAreaField