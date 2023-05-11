import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Movies from "./navbar-list/movies";
import data from "../api/api_lastview.json"
import { useRouter } from "next/router";
import Loading from "./looding";

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
  const [view, setview] = useState(2)
  useEffect(()=>{
    const v= window.localStorage.getItem("view")
    setview(Number(v)) 
    console.log(view);
    

 })

 var data_fil = data.filter( element => element.id==view)


  
          
  //  setview(value)
 
 

 
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
              <Image src="/search.svg"  height={20} width={20} />{" "}
    


            </div>
       
            <div>
             <Link href="/">الصفحة الرئيسية</Link><img src="/home.svg" width={20}/>
            </div>

            <div>
              <span onClick={()=>router.push("/componet/navbar-list/movies_new")}>الاصدارات الجديدة</span><img src="/new.svg" width={20}/>
            </div>

            <div>
              <Link href="/componet/navbar-list/movie_watch">المشهورة</Link><img src="/popular.svg" width={20}/>
            </div>

            <div>
             
              <span  onClick={handelfilm}>الأفلام</span><img src="/movies.svg" width={20}/>
              <div className="aflam" id="aflam">
               <Link href="/componet/navbar-list/movies"><p>افلام اجنبية</p></Link>
               <Link href="/componet/navbar-list/movies-arabic/movie-ar"><p>الافلام العربية</p></Link>
               <Link href="/componet/navbar-list/movies_new"><p> الافلام الجديدة</p></Link>
               <Link href="/componet/navbar-list/movies_Indian"><p> الافلام الهندية</p></Link>
               <Link href="/componet/navbar-list/movie_Asia"><p> الافلام اسيا</p></Link>
               <Link href="/componet/series"><p> الافلام التركية</p></Link>
               <Link href="/componet/navbar-list/movie_Syrian"><p> الافلام السوريا</p></Link>
               <Link href="/componet/navbar-list/movie_Lebnon"><p> الافلام اللبنانية</p></Link>


              </div>
            </div>

            <div>
            <Link href="/componet/series">المسلسلات</Link><img src="/series.svg" width={20}/>
            </div>

            <div>
             <Link href="/componet/navbar-list/movie_Anami">انمي</Link><img src="/animi.svg" width={20}/>
            </div>
            <hr />

            <div>
             <span>تابع المشاهدة</span>  <img src="/watching.svg"  alt="" />
               {
                data_fil.map((el)=>(
                  <section className="viewer">
                    <section className="viewrs">
                <img className="viewes" src={el.Image} onClick={()=>router.push(`/componet/navbar-list/${view}`)} width={160} />
                <hr /></section>
                <p >{el.title}</p></section>
                ))
               }
               
            </div>

            <div>
              <img src="" /> <Link href="/componet/person">المشاهدة لاحقا</Link>
            </div>

            <div>
              <img src="" /> <Link href="/componet/person">المفضلة</Link>
            </div>

   

            <div className="sotialmedia">
             <a href="www.instagam.com"> <img height={30} src="/instagram.svg" width={30}  /></a>
             <a href="https://t.me/llnle"><img height={30} src="/telegram.svg" width={30}  /></a>
             <a href="https://twitter.com/elmossuy"> <img height={30} src="/twitter.svg" width={30}  /></a>
             <a href="https://www.linkedin.com/in/elmosuyfrontend/"> <img height={30} src="/linkedin.svg" width={30}  /></a>
            </div>
          </section>
        </div>
      </nav>
      <Loading/>

    </div>
  );
};

export default Navbar
