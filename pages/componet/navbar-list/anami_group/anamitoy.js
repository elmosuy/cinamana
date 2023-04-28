import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../../api/api_anami_toy.json";
import Link from 'next/link';

const Movies = () => {
  const router = useRouter();
  const [range, setrange] = useState("2023");
  const rangetype = () => {
    const rangeType = document.getElementById("rangeType");
    rangeType.classList.toggle("show-range");
  };

  return (
    <div className="moves-en">
      <Head>
        <title> افلام انمي</title>
      </Head>

      
          
     
 
      <div className="apis-en">
        {data.map((i) => (
          <section key={i.id} className="a-en">
            <div className={i.id}>
              <div
                className="img img-film-en"
                onClick={() => router.push(`/componet/navbar-list/movie_Anami/${i.id}`)}
              >
                <Image width={300} height={200} src={i.Image}></Image>
              </div>
              <p>{i.title}</p>
              <p className="type-movie"> انمي</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Movies;
