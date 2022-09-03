import React from 'react'

export default function Server({data}) {
   return (
    <main className='container p-3'>
      <p className='display-3 text-center'>{data.num}</p>
    </main>
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
