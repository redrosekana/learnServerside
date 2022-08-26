import React from 'react'

export default function Eroror() {
  return (
    <div></div>
  ) 
}
export async function getStaticProps(context){
    return {
        notFound:true
    }
}
