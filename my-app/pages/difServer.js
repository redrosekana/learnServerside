import React from 'react'

export default function Server({data}) {
   return (
    <div>
      <p>{data.num}</p>
    </div>
  ) 
}

export async function getServerSideProps(){
    const response = await fetch("http://127.0.0.1:8000/math")
    const data = await response.json()
    return {
        props:{
            data
        }
    }
}
