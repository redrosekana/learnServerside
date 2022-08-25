import React from 'react'

export default function Static({data}) {
  //console.log(data)
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

export async function getStaticProps(context){
    const response = await fetch("http://127.0.0.1:8000/user")
    const data = await response.json()
    //console.log(context)
    //ได้ object นี้มา { locales: undefined, locale: undefined, defaultLocale: undefined }
    return {
        props:{data,"kana":1,ro:"kuy"}
    }
}
