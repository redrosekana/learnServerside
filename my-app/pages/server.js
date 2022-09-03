import React from 'react'

export default function Server(props) {
  return (
    <main className='container p-3'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <ul className='list-group list-group-success'>
            {props.user.map((e,i) => {
              return <li key={i} className="list-group-item list-group-item-danger">{i+1}. {e.name}</li>
            })}
          </ul>
        </div>
        <div className='col-12 col-md-6 mt-3 mt-md-0'>
          <ul className='list-group'>
            {props.customer.map((e,i) => {
              return <li key={i} className="list-group-item list-group-item-warning">{i+1}. {e.name}</li>
            })}
          </ul>
        </div>
      </div>
    </main>
  ) 
}

/* ทำใน server console.log ไม่ออกใน log ไม่ออกในบราวเซอร์  */
export async function getServerSideProps(context){
    try{
      const response1 = await fetch("http://127.0.0.1:8000/user")
      const data1 = await response1.json()
      
      const response2 = await fetch("http://127.0.0.1:8000/customer")
      const data2 = await response2.json()
      
      /* query  resolvedUrl .req.headers* ส่วนที่จำเป็นและน่าสนใจ */ 
      //console.log(context)
    
      return {
        props:{
          "user":data1,
          "customer":data2
        }
      }
    }catch(err){
      console.log(err)
    }
}
