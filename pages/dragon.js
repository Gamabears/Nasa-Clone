import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CountUp from 'react-countup';
import Image from 'next/image';


function dragon() {
  return (
    <>
    <Header />
    <section className='section-animate'><Image src = '/image/falcon-9.webp' alt = 'section-a' layout='fill'></Image></section>
    <div className='section-inner-center'>
        <h3>Dragon</h3>
        <p>Sending humans and cargo into space</p>
    </div>

    <div className='stats'>
        <div>
            <span className='counter'>
                <CountUp start = {0} end = {34} duartion = {1.5} />
                
            </span>
            <h4>Total Launches</h4>
        </div>
        <div>
            <span className='counter'><CountUp start = {0} end = {31} duartion = {1.5} /></span>
            <h4>Visits to the ISS</h4>
        </div>
        <div>
            <span className='counter'><CountUp start = {0} end = {13} duartion = {1.5} /></span>
            <h4>Reflow Missions</h4>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default dragon