import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Movies from "./navbar-list/movies";
import data from "../api/api_hollyood2.json"
import { useRouter } from "next/router";

const Navbar = ({setcolor}) => {
  const handelburger = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("burgerdisplay");
    navbar.classList.toggle("navbaranimtion");
  };
  const handelfilm = () => {
    const filmes = document.getElementById("aflam");
    filmes.classList.toggle("show-film");
  };

  const router = useRouter();   
  var arr = []
  

    
    //   for(let i=0;i<data.length;i++){
    // if (data[i].title.includes('z')){
    //     arr.push(i)

    //   }

    // }



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
              <Image src="/cinamana/search.svg"  height={20} width={20} />{" "}
    


            </div>
       
            <div>
              <Link href="/">الصفحة الرئيسية</Link>
            </div>

            <div>
              <img src="" /> <span onClick={()=>router.push("/componet/navbar-list/movies_new")}>الاصدارات الجديدة</span>
            </div>

            <div>
              <img src="" /> <Link href="/componet/navbar-list/movie_watch">المشهورة</Link>
            </div>

            <div>
              <img src="" />{" "}
              <span  onClick={handelfilm}>الافلام</span>
              <div className="aflam" id="aflam">
               <Link href="/componet/navbar-list/movies"><p>افلام اجنبية</p></Link>
               <Link href="/componet/navbar-list/movies-arabic/movie-ar"><p>الافلام العربية</p></Link>
               <Link href="/componet/navbar-list/movies_new"><p> الافلام الجديدة</p></Link>
               <Link href="/componet/navbar-list/movies_Indian"><p> الافلام الهندية</p></Link>
               <Link href="/componet/navbar-list/movie_Asia"><p> الافلام اسيا</p></Link>
               <Link href="/componet/navbar-list/movies_Turkish"><p> الافلام التركية</p></Link>
               <Link href="/componet/navbar-list/movie_Syrian"><p> الافلام السوريا</p></Link>
               <Link href="/componet/navbar-list/movie_Lebnon"><p> الافلام اللبنانية</p></Link>


              </div>
            </div>

            <div>
              <img src="" /> <Link href="/componet/series">المسلسلات</Link>
            </div>

            <div>
              <img src="" /> <Link href="/componet/navbar-list/movie_Anami">انمي</Link>
            </div>
            <hr />

            <div>
              <img src="" /> <Link href="/componet/person">تابع المشاهدة</Link>
            </div>

            <div>
              <img src="" /> <Link href="/componet/person">المشاهدة لاحقا</Link>
            </div>

            <div>
              <img src="" /> <Link href="/componet/person">المفضلة</Link>
            </div>

   

            <div className="sotialmedia">
              <Image height={30} src="/facebook.svg" width={30}  />
              <Image height={30} src="/instagram.svg" width={30}  />
              <Image height={30} src="/telegram.svg" width={30}  />
              <Image height={30} src="/twitter.svg" width={30}  />
              <Image height={30} src="/linkedin.svg" width={30}  />
              <Image height={30} src="/messenger.svg" width={30}  />
            </div>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
