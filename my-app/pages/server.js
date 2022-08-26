import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Server({data}) {
  const [info,setinfo] = useState([])
  //console.log(data)
  
  useEffect(() => {
    setinfo(data)
    return () => {

    }
  },[])
  
  return (
    <div>
      <ul>
        {info.map((e,i) => {
          return <li key={i}>{e.name}</li>
        })}
      </ul>
    </div>
  ) 
}

/* ทำใน server console.log ไม่ออกใน log ไม่ออกในบราวเซอร์  */
export async function getServerSideProps(context){
    const response = await fetch("http://127.0.0.1:8000/user")
    const data = await response.json()
    //console.log(context)
    /* query  resolvedUrl .req.headers* ส่วนที่จำเป็นและน่าสนใจ */ 
    return {
        props:{data}
    }
}
