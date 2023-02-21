import axios from 'axios'
import React, { useState } from 'react'

const Signin = () => {
    const [email,setemail]=useState("")
    const [fullname,setfullname]=useState("")
    const [lastname,setlastname]=useState("")
    const [bearthday,setbearthday]=useState("")
    const [password,setpassword]=useState("")
    const [password2,setsetpassword2]=useState("")
    const [error,seterror]=useState("")
    const [invalid,setinvalid]=useState(true)

    const jsondata= { "email":email,"fullname":fullname,
    "lastname":lastname,"bearthday":bearthday,"password":password}
    

    const handelsubmit=async()=>{
     
     
     const res=await axios.post("http://localhost:4000/signin",
     jsondata
        )

        // window.location.href="/"  
        if(!res.data.sucess){
      seterror("not fond in the input")
    }
    if (res.data.sucess==true){
        alert("تم تسجيل الدخول بنجاح")
      
    }

        // if (res.data.errors[0].param === "email"){
        //   setinvalid(false)
        //   seterror("Please enter email a valid")
        // }
    }

 

  return (
    <div className='signinall' dir='rtl'>
        <section className='signin' dir='rtl' id='signin'> 
         <li>يرجى تسجيل  الدخول لحفظ البيانات</li>        
           <input type="text" placeholder='Full name' onChange={e=>setfullname(e.target.value)}/>
            <input type="text" placeholder='Last name' onChange={e=>setlastname(e.target.value)}/>
            <input type="text" placeholder='E-mail Phone number' onChange={e=>setemail(e.target.value)} />
            <input type="text"placeholder='Bearthday'  onChange={e=>setbearthday(e.target.value)}/>
            <input type="password"placeholder='Password'  onChange={e=>setpassword(e.target.value)}/>
            <input type="password"placeholder='Password'onChange={e=>setsetpassword2(e.target.value)} />
           
            <p className='erorr'>{error}</p> 
            <button onClick={handelsubmit}>Sign In</button>
        </section>
        
    </div>
  )
}

export default Signin