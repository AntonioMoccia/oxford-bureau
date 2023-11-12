'use client'
import React, { useEffect, useState, useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import gsap from 'gsap'
import Link from 'next/link'
function NavBar() {

    const [open, setOpen] = useState(false)
    const navBarRef = useRef(null)
    const OnBurgerClick = (e) => {
        setOpen(!open)
    }
    useEffect(() => {


        if (open || window.innerWidth >= 700) {
            gsap.to(navBarRef.current, {
                x: 0
            })
        } else {
            gsap.to(navBarRef.current, {
                x: '100%'
            })
        }
    }, [open])
    return (
        <nav className='navbar-container'>
            <div className='logo'>
                LOGO
            </div>
            <div className='nav' ref={navBarRef}>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link onClick={() => {
                            if (open && window.innerWidth >= 700) {
                                setOpen(false)
                            }
                        }} href={'/#hero'}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={() => {
                            if (open && window.innerWidth >= 700) {
                                setOpen(false)
                            }
                        }} href={'/#about-section'}>
                            Chi Siamo
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={() => {
                            if (open && window.innerWidth >= 700) {
                                setOpen(false)
                            }
                        }} href={'/#services'}>
                            Servizi
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href={'/#contacts'}>
                            Contattaci
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='burger-container'>
                <FiMenu className='burger' onClick={OnBurgerClick} />
            </div>
        </nav>
    )
}

export default NavBar