import React from 'react'

export default function Server({data}) {
   return (
    <div>
      <ul>
        {data.map((e,i) => {
          return <li key={i}>{e.name}</li>
        })}
      </ul>
    </div>
  ) 
}

export async function getServerSideProps(){
    const response = await fetch("http://127.0.0.1:8000/user")
    const data = await response.json()
    return {
        props:{
            data
        }
    }
}