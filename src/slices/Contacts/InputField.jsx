import React from 'react'

function InputField({
    label,
    type,
    htmlFor
}) {
    return (
        <div className='input-field'>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} id={htmlFor} />
            <div className='underline' />
        </div>
    )
}

export default InputField