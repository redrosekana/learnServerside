import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


/* จะเห็นว่าจะแตกต่างจากหน้า home เพราะเป็นการ setinterval โดยที่เราควบคุมไม่ได้
    ถึงแม้จะกดปุ่ม re-render จาก state ค่า n ที่ใช้ใน setinterval ก็ทำงานไปเรื่อยๆ
    จนกว่าจะเปลี่ยนหน้า พอกลับมาหน้านี้ใหม่ ก็จะเริ่มทำตั้งแต่ต้นเหมือนเดิม แต่ในกรณีนี้ต้องใช้ let ใช้ const ไม่ได้
*/
export default function Extra() {
  const [m,setM] = useState(0)
    let time 
    let n = 0
    
    useEffect(() => {
        timer(1)
            return () => {
                timer(2)  
        }
    },[])

  function timer(check){
    if (check == 1){
      time = setInterval(()=>{
        console.log(n)
        n++
        if (n == 5){
            console.log("ถึง 5 แล้ว")
          }
      },1000)
    }else{
      clearInterval(time)
    }
  }
  
  return (
    <>
      <p className='text-center fs-2'>learn nextjs server rendering {m}</p>
      <div className='text-center'>
        <button className='btn btn-danger' onClick={() => setM(m+1)}>กด</button>
      </div>
      
    </>
  )
}
