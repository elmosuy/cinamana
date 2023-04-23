import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useRecoilState } from 'recoil';
// import { atomm } from './atom';
import Footer from './componet/footer';
import Navbar from './componet/navbar';
import Loginf from './tools/loginfloat';
import Image from 'next/image';

const Layout = ({children}) => {







  // const [incremnt,setincremnt]=useRecoilState(atomm)
     const router = useRouter();



     const handelloginf=()=>{
      const login=document.getElementById("loginf")
      login.classList.toggle("logindesplay")
}
const handeloutlain=()=>{
  
  const login=document.getElementById("loginf")
  login.classList.remove("logindesplay")

  const nav=document.getElementById("navbar")
  nav.classList.remove("burgerdisplay")
}

   



  return (
    <div>
      <Head>
      <link rel="icon" type="image/png" sizes="64x64" href="/cinamana/logot.png"/>
      <title>Moon</title>
      </Head>
        <header dir='rtl'>
          
          <div className='head' >        
         


          <Image className='logo' onClick={()=>router.push("/")} src="/cinamana/llb.png" width={90} height={35}/>
     
  </div>
                                 {/* <Image width={30} height={30} src="person.svg" alt=""  className='person'/> */}
          <div className='h3'>
           <select name="" id="" className='languge'><option value="Arabic">Arabic</option>
           <option value="English">English</option>
           
           </select>
          
           <h3 onClick={handelloginf}>تسجيل الدخول </h3> 


          </div>

        </header>
          <Navbar/>
          <Loginf />

        <div onClick={handeloutlain}>{children}</div>
        
        <Footer/>
    </div>
  )
}

export default Layout