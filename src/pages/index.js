
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Services from '@/components/Services'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { createClient } from '@/prismicio';



export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByType('homepage')

  return {
    props: { data:[...page.results[0].data.slices] },
  }
}

export default function Home({data}) {


  function getSliceByName(data, name) {
    return data.filter(item => {
      return item.slice_type == name
    })[0];
  }


  useEffect(() => {


    /*     const lenis = new Lenis({
          smoothTouch: true,
          smoothWheel: true,
          touchMultiplier: 2
        })
    
        lenis.on('scroll', (e) => {
        })
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf) */
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Hero data={getSliceByName(data,'hero')} />
        <About  data={getSliceByName(data,'about')} />
        <Services />
        <Contact />
      </main>
    </>
  )
}
