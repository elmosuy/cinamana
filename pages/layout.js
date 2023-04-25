import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
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


   const [color, setcolor] = useState("")
   
  console.log(color);
   
const handelbody=()=>{

  const bod= document.body.style.background=color
   
}
 useEffect(() => {
  //  document.body.style.background="#012237"
    handelbody()
   })


  return (
    <div  >
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

          <input className="color" type="color" name="" title='change color your website' id="" onChange={(e)=>{setcolor(e.target.value)}} />

          </div>
        </header>
          <Navbar setcolor={setcolor}/>
          <Loginf handeloutlain={handeloutlain} />


        <div onClick={handeloutlain} >{children}</div>
        
        
        <Footer/>
    </div>
  )
}

export default Layout