import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const Loginf = ({handeloutlain}) => {
const[email,setemail]=useState("")
const[password,setpassword]=useState("")


  const handelsubmit=async()=>{
   const res= await axios.post("http://localhost:4000/login",
   {"email":email,"password":password,} ).then(alert("تم تسجيل الدخول"))  }
    

    

console.log(email,password)
  return (
    <div dir='rtl'  className='loginf' id='loginf'>
        <h3>Login  </h3>
        <input placeholder='البريد الالكتروني' type="email" onChange={(e)=>setemail(e.target.value)}  />
        <input type="password" placeholder='كلمة السر' onChange={(e)=>setpassword(e.target.value)}/>
        <p >هل نسيت كلمة السر</p>
        <Link href="/signin"><h3 className='sig' onClick={handeloutlain}>Sign in</h3></Link>


        <button onClick={handelsubmit}>تسجيل الدخول</button>
    </div>
  )
}

export default Loginf