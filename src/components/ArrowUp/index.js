'use client'
import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
function ArrowUp() {
    const [active, setActive] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const scrollPos = window.scrollY - window.innerHeight / 4

            if (scrollPos > 0) setActive(true) 
            else setActive(false)

        })
    }, [])
    return (
        <div className={`${active ? 'active' : ''} arrow-up`} onClick={()=>{
            window.scrollTo(0,0)
        }}>
            <IoIosArrowUp />
        </div>
    )
}

export default ArrowUp