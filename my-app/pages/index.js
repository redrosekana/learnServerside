import React from 'react'
import { useState } from 'react';

/* ทำความเข้าใจหน้านี้คือ เมื่อมีการ re-render โดย state ก็จะมีการเริ่มกำหนดค่า
  n ใหม่ ทุกครั้ง ให้เข้าใจได้เลยว่าจะเริ่มที่ 15 ทุกครั้งแม้จะบวกไปเท่าไหร่ก็ตามในฟังชันก์ โดย
  ค่าที่บวกไม่มีผลต่อตัวที่กำหนดไว้ ไม่ว่าจะ let หรือ const (ควรจะใช้ let) โดยจะไม่เกี่ยวข้องกับที่กำหนดเลย
  จะใช้ทำอะไรก็ได้ และค่าที่ ใช้ในฟังชันก์ มันสามารถควบคุมได้ด้วยการกดปุ่ม เลยใช้ค่า n = 15 ใหม่ทุกครั้งที่ re-render
*/
export default function Home() {
  const [m,setM] = useState(0)
  let n = 15
  
  const st = () => {
    console.log(n)
    n++
  }
  
  //console.log("re-render")
  return (
    <main className='container p-3'>
      <p className='text-center fs-2'>learn nextjs server rendering {m}</p>
      <div className='text-center'>
        <button className='btn btn-danger me-2' onClick={() => st()}>กด</button>
        <button className='btn btn-success' onClick={() => setM(m+1)}>เพิ่มค่า</button>
      </div>
    </main>
  )
}
