import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CountUp from 'react-countup';
import Image from 'next/image';


function falconheavy() {
  return (
    <>
    <Header />
    <section className='section-animate'><Image src = '/image/falcon-heavy.webp' alt = 'section-a' layout='fill'></Image></section>
    <div className='section-inner-center'>
        <h3>Falcon Heavy</h3>
        <p>The world`s most powerful rocket</p>
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

export default falconheavy