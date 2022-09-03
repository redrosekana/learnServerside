import React from 'react'
import {useRouter} from 'next/router'

/* {children} */
/* จะมีการ render  ทุกครั้งที่กดปุ่มในฟังชันก์นี้ เพราะว่าแสดงใน _app.js */
export default function Layout({children}) {
    const router = useRouter()
    /* console.log(children) */
    const pathBtn = () => {
        router.push(`/path/${Math.floor(1+Math.random()*5)}`)
    }
    const folderBtn = () => {
        router.push(`/${Math.floor(1+Math.random()*5)}/student`)
    }


    /* แสดงทุกครั้งในการกดปุ่มต่างๆ  */
    console.log("layout")
    
    return (
    <>
        <div className='p-4 mb-3 d-flex justify-content-center'>
            <button className='btn btn-danger' onClick={()=> router.push("/")}>home</button>   
            <button className='btn btn-dark ms-2' onClick={()=> router.push("/extra")}>extra</button>   
            <button className='btn btn-primary ms-2' onClick={()=> router.push("/server")}>server</button>   
            <button className='btn btn-secondary ms-2' onClick={()=> router.push("/static")}>static</button>   
            <button className='btn btn-success ms-2' onClick={()=> router.push("/difServer")}>difServer</button>   
            <button className='btn btn-info ms-2' onClick={()=> router.push("/difStatic")}>difStatic</button>   
            <button className='btn btn-warning ms-2' onClick={()=> pathBtn()}>path</button>   
            <button className='btn btn-danger  ms-2' onClick={()=> folderBtn()}>folder</button>   
            <button className='btn btn-light ms-2' onClick={()=> router.push("/error")}>error</button>   
        </div>
        <main>{children}</main>
    </>
  )
}
