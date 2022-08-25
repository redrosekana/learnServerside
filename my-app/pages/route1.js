import React from 'react'
import { useRouter } from 'next/router'


export default function Route1() {
    const router = useRouter()
    
    return (
    <div className='container text-center'>
        <div>route1</div>
        <button className='btn btn-dark mt-2' onClick={() => router.reload("/route2")}>route2</button>
    </div>
    
  )
}
