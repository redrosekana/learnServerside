import React from 'react'
import { useRouter } from 'next/router'


export default function Route2() {
    const router = useRouter()
    return (
    <div className='container text-center'>
        <div>route2</div>
        <button className='btn btn-danger mt-2' onClick={() => router.push("/route1")}>route1</button>
    </div>
    
  )
}
