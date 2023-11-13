import React from 'react'

function TextAreaField({
    label,
    htmlFor
}) {
    return (
        <div className='input-field text-area-field'>
            <label htmlFor={htmlFor}>{label}</label>
            <textarea id={htmlFor} />
            <div className='underline' />
        </div>
    )
}

export default InputField