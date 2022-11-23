import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
    <Head>
      <title>SpaceX</title>
      <meta name='description' content='I hope this tutorial is helpful for you' />
    </Head>
    <Header />
    <Section />
    <Footer />
    </>
  )
}


