import React from 'react'
import {useRouter} from 'next/router'

export default function Layout({children}) {
    const router = useRouter()

    const clickBtn = () => {
        router.push(`/path/${Math.floor(1+Math.random()*5)}`)
    }
    //console.log("app")
    return (
    <>
        <div className='p-3'>
            <button className='btn btn-danger' onClick={()=> router.push("/")}>home</button>   
            <button className='btn btn-dark ms-2' onClick={()=> router.push("/extra")}>extra</button>   
            <button className='btn btn-primary ms-2' onClick={()=> router.push("/server")}>server</button>   
            <button className='btn btn-secondary ms-2' onClick={()=> router.push("/static")}>static</button>   
            <button className='btn btn-success ms-2' onClick={()=> router.push("/difServer")}>difServer</button>   
            <button className='btn btn-info ms-2' onClick={()=> router.push("/difStatic")}>difStatic</button>   
            <button className='btn btn-warning ms-2' onClick={()=> clickBtn()}>Path</button>   
        </div>
        <main>{children}</main>
    </>
  )
}
