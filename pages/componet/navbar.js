import Link from 'next/link'
import React from 'react'
import Movies from './navbar-list/movies'

const Navbar = () => {
     const handelburger=()=>{
          const navbar=document.getElementById("navbar")
          navbar.classList.toggle("burgerdisplay")
          navbar.classList.toggle("navbaranimtion")
         }

     



  return (
     <div>

    <nav >
            <section  className='burger' onClick={handelburger}>|||</section>


<div> 
    <section className='navbar' id='navbar' >
  <div className='searching'>  <img src="/search.svg" alt="" width={21}/>  <input type="text" name='search' placeholder='ابحث عن فلم او مسلسل' /></div>
            <div>
                
                 <Link href="/">
                 الصفحة الرئيسية   
                 </Link>
            </div>

            <div><img src=""/> <Link href="/"> 
                 الاصدارات الجديدة         
            </Link></div>

            <div><img src=""/> <Link href="homemovie"> 
                 المشهورة   
                 
            </Link></div>

            <div><img src=""/> <Link href="componet/navbar-list/movies"> 
                 الافلام   
                 
            </Link></div>

            <div><img src=""/> <Link href="homemovie"> 
                 المسلسلات   
                 
            </Link></div>

            <div><img src=""/> <Link href="homemovie"> 
                 انمي   
                 
            </Link></div>
            <hr />

            <div><img src=""/> <Link href="homemovie"> 
                 تابع المشاهدة   
                 
            </Link></div>

            <div><img src=""/> <Link href="homemovie"> 
                 المشاهدة لاحقا   
                 
            </Link></div>

            <div><img src=""/> <Link href="homemovie"> 
                 المفضلة   
                 
            </Link></div>

            <div><img src=""/> <Link href="homemovie"> 
                 الاشتراكات   
                 
            </Link></div> 
            <div className="sotialmedia">
     <img src="/facebook.svg" width={30} alt="" />
     <img src="/instagram.svg" width={30} alt="" />
     <img src="/telegram.svg" width={30} alt="" />
     <img src="/twitter.svg" width={30} alt="" />
     <img src="/linkedi.svgn" width={30} alt="" />
     <img src="/messenger.svg" width={30} alt="" />
    </div>
   
    </section>


   
</div>


</nav></div>
  )
}

export default Navbar