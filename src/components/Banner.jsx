import { useEffect, useState } from "react";
import instance from "../instance";
import "./Banner.css"

function Banner({fetchurl}){
    const base_url="https://image.tmdb.org/t/p/original";
    const [movie,setMovieBanner]=useState();
    const fetchData=async()=>{
        const {data} =await instance.get(fetchurl)
        setMovieBanner(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    console.log("Movie banner Images");
    console.log(movie);
    return(
        <>
        <div style={{height:"600px",backgroundPosition:"center",backgroundSize: 'cover',
   backgroundImage:`url(${base_url}${movie?.backdrop_path})`}}>
       <div className="banner_content">
         <h2 style={{color:"white"}}>{movie?.name}</h2>
         <button className="btn btn-danger">Play<i class="fa-solid fa-play ms-2"></i></button>
         <button className="btn btn-outline-light ms-4">More Info<i class="fa-sharp fa-solid fa-caret-down ms-2 bg-transparent"></i></button>
         <h4 style={{color:"white"}}>{movie?.overview?.slice(0,200)}...</h4>
       </div>

        </div>
        {/* <h3 style={{color:"white"}}>Banner</h3>
        <img src={`${base_url}${movie?.backdrop_path}`} alt="" /> */}
        
        </>
    )
}
export default Banner;