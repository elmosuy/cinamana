import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import { atomm } from './atom';
import dataSearch from "./api/api_hollywood.json";
import Footer from "./componet/footer";
import Navbar from "./componet/navbar";
import Loginf from "./tools/loginfloat";
import Image from "next/image";

const Layout = ({ children }) => {
  const router = useRouter();
  const handelsearch = () => {
    const search = document.getElementById("searcher");
    search.classList.add("show-search");
  };
  const handelloginf = () => {
    const login = document.getElementById("loginf");
    login.classList.toggle("logindesplay");
  };

  const handelremovesearch = () => {
    const search = document.getElementById("searcher");
    search.classList.remove("show-search");
  };
  const handeloutlain = () => {
    const login = document.getElementById("loginf");
    login.classList.remove("logindesplay");

    const nav = document.getElementById("navbar");
    nav.classList.remove("burgerdisplay");
  };

  const [color, setcolor] = useState("");
  const [search, setsearch] = useState("ch");
  const [fil, setfil] = useState([]);
  console.log(color);

 

  const filteredData = dataSearch.filter((el) => {
   
               return el.title.toLowerCase().includes(search)})

     

const [n, setn] = useState(10)
const loop=()=>{
 setn(n+10)
 
}

const handelbody = () => {
  const bod = (document.body.style.background = color);
};
useEffect(() => {
  handelbody();

});




  return (
    <div>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/cinamana/logot.png"
        />
        <title>Moon</title>
      </Head>
      <header dir="rtl">
        <div className="head">
          <Image
            className="logo"
            onClick={() => router.push("/")}
            src="/cinamana/llb.png"
            width={90}
            height={35}
          />
        </div>
        <div className="searching">
          <input
            type="text"
            name="search"
            className="search"
            onClick={handelsearch}
            placeholder="ابحث عن فلم او مسلسل"
            onChange={(e) => {
              setsearch(e.target.value.toLowerCase());
            }}
          />
          <div className="searcher" id="searcher">
            {
              filteredData.slice(0,n).map((el)=>(
                <div className="search-list" dir="ltr" key={el.id}  >
                            <div onClick={handelremovesearch}><img src={el.Image} onClick={() => router.push(`/componet/navbar-list/${el.id}`)} width={100}   /></div>
                             <div onClick={handelremovesearch}> <p onClick={() => router.push(`/componet/navbar-list/${el.id}`)} >{el.title}</p></div>
                     
                       </div>
              ))
            }
            
         <span onClick={loop} id="more">Show more</span> </div>{" "}
        </div>
        <div className="h3">
          <select name="" id="" className="languge">
            <option value="Arabic">Arabic</option>
            <option value="English">English</option>
          </select>

          <h3 onClick={handelloginf}>تسجيل الدخول </h3>

          <input
            className="color"
            type="color"
            name=""
            title="change color your website"
            id=""
            onChange={(e) => {
              setcolor(e.target.value);
            }}
          />
        </div>
      </header>
      <Navbar setcolor={setcolor} />
      <Loginf handeloutlain={handeloutlain} />
          
      <div onClick={handeloutlain}><div onClick={handelremovesearch}>{children}</div></div>
     
      <Footer />
    </div>
  );
};

export default Layout;
