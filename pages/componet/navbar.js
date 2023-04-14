import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Movies from "./navbar-list/movies";
import data from "../api/api_hollyood2.json"
import { useRouter } from "next/router";

const Navbar = () => {
  const handelburger = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("burgerdisplay");
    navbar.classList.toggle("navbaranimtion");
  };
  const handelfilm = () => {
    const filmes = document.getElementById("aflam");
    filmes.classList.toggle("show-film");
  };
  const [search,setsearch] = useState('a')
  const [fil,setfil] = useState([])
  const router = useRouter();   
  var arr = []
  
  useEffect(() => {
    

  }, [])
    
      for(let i=0;i<data.length;i++){
    if (data[i].title.includes('z')){
        arr.push(i)

      }

    }

    // for(let i=0;i<arr.length;i++){
    //   console.log(arr[i]);
    // }


// setfilter(filters)

  return (
    <div>
      <nav>
        <section className="burger" onClick={handelburger}>
          |||
        </section>

        <div>
          <section className="navbar" id="navbar">
            <div className="searching">
              {" "}
              {/* <img  src="/search.svg" alt="" width={20} />{" "} */}
              <input
                type="text"
                name="search"
                placeholder="ابحث عن فلم او مسلسل"
                onChange={(e)=>{setsearch(e.target.value)}}

              />
            </div>
       
            <div>
              <Link href="/">الصفحة الرئيسية</Link>
            </div>

            <div>
              {/* <img src="" /> <span onClick={()=>router.push("/componet/navbar-list/movies_new")}>الاصدارات الجديدة</span> */}
            </div>

            <div>
              {/* <img src="" /> <Link href="homemovie">المشهورة</Link> */}
            </div>

            <div>
              {/* {" "}<img src="/lefter.svg" width={20} /> */}
              <span  onClick={handelfilm}>الافلام</span>
              <div className="aflam" id="aflam">
               <Link href="/componet/navbar-list/movies"><p>افلام اجنبية</p></Link>
               <Link href="/componet/navbar-list/movies-arabic/movie-ar"><p>الافلام عربية</p></Link>
               <Link href="/componet/navbar-list/movies_new"><p> الافلام الجديدة</p></Link>
               <Link href="/componet/navbar-list/movies_Indian"><p> الافلام الهندية</p></Link>
               <Link href="/componet/navbar-list/movie_Asia"><p> الافلام اسيا</p></Link>
               <Link href="/componet/navbar-list/movies_Turkish"><p> الافلام تركية</p></Link>
               <Link href="/componet/navbar-list/movie_Syrian"><p> الافلام سوريا</p></Link>
               <Link href="/componet/navbar-list/movie_Lebnon"><p> الافلام لبنان</p></Link>


              </div>
            </div>

            <div>
              <span>{/*<img src="/lefter.svg" width={20}/> */}</span> <Link href=""> مسلسلات</Link>
            </div>

            <div>
              {/* <img src="" /> */}<Link href="/componet/navbar-list/movie_Anami">انمي</Link> 
            </div>
            <hr />

            <div>
              {/* <img src="" /> */}<Link href="homemovie">تابع المشاهدة</Link> 
            </div>

            <div>
              {/* <img src="" /> */}<Link href="homemovie">المشاهدة لاحقا</Link> 
            </div>

            <div>
              {/* <img src="" />*/} <Link href="homemovie">المفضلة</Link> 
            </div>

            <div>
              {/* <img src="" />*/} <Link href="homemovie">الاشتراكات</Link> 
            </div>
            <div className="sotialmedia">
              <Image height={30} src="/facebook.svg" width={30} alt="" />
              <Image height={30} src="/instagram.svg" width={30} alt="" />
              <Image height={30} src="/telegram.svg" width={30} alt="" />
              <Image height={30} src="/twitter.svg" width={30} alt="" />
              <Image height={30} src="/linkedin.svg" width={30} alt="" />
              <Image height={30} src="/messenger.svg" width={30} alt="" />
            </div>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
