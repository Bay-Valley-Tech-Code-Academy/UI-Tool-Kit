import React from 'react'
import Navbar from '../app/components/navbar'

export default function Home() {
    return (
      <>
      <Navbar />
      <section className='py-24 bg-white'>
        <div className='container'>
          <h1 className='text-3x1 font-bold'> Home Page </h1>
          
        </div>
      </section>
      </>
    );
  }