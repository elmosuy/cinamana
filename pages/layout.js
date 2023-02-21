import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useRecoilState } from 'recoil';
import { atomm } from './atom';
import Footer from './componet/footer';
import Navbar from './componet/navbar';
import Loginf from './tools/loginfloat';

const Layout = ({children}) => {







  const [incremnt,setincremnt]=useRecoilState(atomm)
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
      <link rel="icon" type="image/png" sizes="32x32" href="/icons.png"/>
      <title>سينمانا</title>
      </Head>
        <header dir='rtl'>
          
          <div className='head' >        
         
          {/* <img src="cinemana.svg"  width={35}/> */}


          <h1 onClick={()=>router.push("/")}>Cinama</h1>
     
          {/* <label For="search">eee</label> */}
  </div>
                                 <img src="person.svg" alt=""  className='person'/>
          <div className='h3'>
           <select name="" id="" className='languge'><option value="Arabic">Arabic</option>
           <option value="English">English</option>
           
           </select>
          
           <h3 onClick={handelloginf}>تسجيل الدخول </h3> 

           <Link href="/signin"><h3>Sign In</h3></Link>

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