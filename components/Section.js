import React from 'react'
import Image from 'next/image'

function Section() {
  return (
    <>
    <section >
      <Image src = '/image/section-a.webp' alt = 'section-a' layout='fill'></Image>
        <div className='section-inner'>
            <h4>
                Upcoming Launch
            </h4>
            <h2>
                CRS-25 Mission
            </h2>
            <a href = "#" className='btn'>
                <div className='hover'></div>
                    <span>Rewatch</span>

            </a>
        </div>

        <div className='scroll-arrow'>
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
        </div>
    </section>

    <section >
    <Image src = '/image/section-b.webp' alt = 'section-a' layout='fill'></Image>
    <div className='section-inner'>
        <h4>
            Recent Launch
        </h4>
        <h2>
            Starlink Mission
        </h2>
        <a href = "#" className='btn'>
            <div className='hover'></div>
                <span>Rewatch</span>

        </a>
    </div>

    <div className='scroll-arrow'>
    <svg width="30px" height="20px">
      <path
        stroke="#ffffff"
        fill="none"
        strokeWidth="2px"
        d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
      ></path>
    </svg>
    </div>
    </section>


    <section >
    <Image src = '/image/section-c.webp' alt = 'section-a' layout='fill'></Image>
        <div className='section-inner'>
            <h4>
                Recent Mission
            </h4>
            <h2>
                SES-22 Mission
            </h2>
            <a href = "#" className='btn'>
                <div className='hover'></div>
                    <span>Rewatch</span>

            </a>
        </div>

        <div className='scroll-arrow'>
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
        </div>
    </section>


    <section >
    <Image src = '/image/section-d.webp' alt = 'section-a' layout='fill'></Image>
        <div className='section-inner'>
            <h4>
                Upcoming Launch
            </h4>
            <h2>
                Globalstar FM15 Mission
            </h2>
            <a href = "#" className='btn'>
                <div className='hover'></div>
                    <span>Rewatch</span>

            </a>
        </div>

        <div className='scroll-arrow'>
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
        </div>
    </section>

    <section >
    <Image src = '/image/section-e.webp' alt = 'section-a' layout='fill'></Image>
        <div className='section-inner'>
            
            <h2>
                Starship Update
            </h2>
            <a href = "#" className='btn'>
                <div className='hover'></div>
                    <span>Rewatch</span>

            </a>
        </div>

        <div className='scroll-arrow'>
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
        </div>
    </section>

    <section >
    <Image src = '/image/section-f.webp' alt = 'section-a' layout='fill'></Image>
        <div className='section-inner'>
           
            <h2>
                Starship to add NASA astronauts on the moon
            </h2>
            <a href = "#" className='btn'>
                <div className='hover'></div>
                    <span>Rewatch</span>

            </a>
        </div>

    </section>
    </>

    
  )
}

export default Section