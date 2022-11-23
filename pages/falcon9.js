import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CountUp from 'react-countup';
import Image from 'next/image';

function falcon9() {
  return (
    <>
    <Header />
    <section className='section-animate'><Image src = '/image/falcon-9.webp' alt = 'section-a' layout='fill'></Image></section>
    
    
    <div className='section-inner-center'>
        <h3>Falcon 9</h3>
        <p>First orbital class rocket capable of reflight</p>
    </div>

    <div className='stats'>
        <div>
            <span className='counter'><CountUp start = {0} end = {3} duartion = {1} /></span>
            <h4>Total Launches</h4>
        </div>
        <div>
            <span className='counter'><CountUp start = {0} end = {7} duartion = {1} /></span>
            <h4>Total Landings</h4>
        </div>
        <div>
            <span className='counter'><CountUp start = {0} end = {4} duartion = {1} /></span>
            <h4>Total Reflights</h4>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default falcon9