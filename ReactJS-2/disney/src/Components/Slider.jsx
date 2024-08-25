import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function Slider() {
  const [data,setData]=useState([])
    useEffect( () => {
        getTrendingMovies();
    },[])

    const getTrendingMovies = () =>{
        GlobalAPI.getTrendingVideos.then(resp=>{
          setData(resp)
        })
      }
      console.log("=====",data)
  return (
    <div>
      {
        data?.length
      }
    </div>
  )
}

export default Slider
