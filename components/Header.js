import React from 'react'
import {useState} from 'react'
import Link from 'next/link'


function Header() {
    const [open, setOpen] = useState(false)
    
  return (
    <>
    <div className={`${open? "overlay-show":"overlay"}`}></div>
    <div className={`mobile-main-menu ${open? "show-menu":""}`}>
        <ul>
            <li>
                <a href = '#'>Mission</a>
            </li>
            <li>
                <a href = '#'>Launches</a>
            </li>
            <li>
                <a href = '#'>Careers</a>
            </li>
            <li>
                <a href = '#'>Updates</a>
            </li>
            <li>
                <a href = '#'>Shop</a>
            </li>
                <li className='mobile-only'>
                    <a href = "/falcon9">Falcon 9</a>
                </li >
                <li className='mobile-only'>
                    <a href = "/falcon-heavy">Falcon Heavy</a>
                </li>
                <li className='mobile-only'>
                    <a href = "/dragon">Dragon</a>
                </li>
                <li className='mobile-only'>
                    <a href = "#">Starship</a>
                </li>
                <li className='mobile-only'>
                    <a href = "#">Human Spaceflight</a>
                </li>
                <li className='mobile-only'>
                    <a href = "#">Rideshare</a>
                </li>
                <li className='mobile-only'>
                    <a href = "#">Starlink</a>
                </li>
                <li className='mobile-only'>
                    <a href = "#">Shop</a>
                </li>
        </ul>
    </div>
    <header className='main-header'>
        <div className='logo'>
            <Link href = '/' >
                <img src = "/image/logo.png" alt = "SpaceX" style = {{cursor:"pointer"}}/>
            </Link>
        </div>
        <nav className='desktop-main-menu'>
            <ul>
                <li>
                    <a href = "/falcon9">Falcon 9</a>
                </li>
                <li>
                    <a href = "/falcon-heavy">Falcon Heavy</a>
                </li>
                <li>
                    <a href = "/dragon">Dragon</a>
                </li>
                <li>
                    <a href = "#">Starship</a>
                </li>
                <li>
                    <a href = "#">Human Spaceflight</a>
                </li>
                <li>
                    <a href = "#">Rideshare</a>
                </li>
                <li>
                    <a href = "#">Starlink</a>
                </li>
                <li>
                    <a href = "#">Shop</a>
                </li>
            </ul>
        </nav>
    </header>

    <button id = "menu-btn" className={`hamburger ${open? "open":""}`} type = 'button' onClick = {()=>setOpen(!open)}>
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
    </button>
    </>
  )
}

export default Header