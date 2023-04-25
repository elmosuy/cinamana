import React, { useState } from 'react'
import Letters from './Letters'
import Header from './header'
import Head from 'next/head'
import Image from 'next/image'

const Layout = ({children}) => {
  const handelBorger = () => {
    const nav = document.getElementById("letters");
    nav.classList.toggle("show-letters");
  };
  const handelBorgeremove = () => {
    const nav = document.getElementById("letters");
    nav.classList.remove("show-letters");
  };
 const handelTheme = () => {
    const nav = document.body;
    nav.classList.toggle("show-theme");
    const header=document.getElementById("header")
    header.classList.toggle("show-theme-header");
    const le=document.getElementById("letters")
    le.classList.toggle("show-theme-list");
    const all=document.getElementById("all")
    all.classList.toggle("show-theme-all");
    var text1=document.getElementById("text2")
    text1.classList.toggle("text2")
    
 
  };


  
  return (
    <div className='dom'>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Cairo+Play:wght@300&family=Kufam&family=Noto+Nastaliq+Urdu&family=Reem+Kufi&family=Reem+Kufi+Fun&display=swap" rel="stylesheet"/>         <title>
            Dream | حلم
          </title>
          <link rel="icon" href="/github.svg" />

      </Head>
      <section className="bouger-menu"   >
      <label class="burger" for="burger" >
            <input type="checkbox" className="check" id="burger" onClick={handelBorger} />
            |||
              </label>
      </section>
      
        <div>
            <Header handelTheme={handelTheme}/>
        </div>
        <div  dir='rtl'>
            <Letters handelBorgeremove={handelBorgeremove} />
        </div>
        {/* <div className='media'>
        <a href="https://github.com/elmosuy" title='elmosuy'><Image src="/github.svg" width={35} height={37} className='med' /></a>
        <a href="https://www.linkedin.com/in/elmosuy/" ><Image src="/linkedin.svg" width={37} height={40} className='med'/></a>
       <a href="https://www.instagram.com"> <Image src="/insta.svg" width={37} height={40} className='med'/></a>
       <a href="https://www.facebook.com"> <Image src="/facebook.svg" width={40} height={40} className='med'/></a>

        

      </div> */}

      <span onClick={handelBorgeremove} className='all-them' id='all'>
        {children }
        </span>
    </div>
    
  )
}

export default Layout