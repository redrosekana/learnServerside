import React from 'react'

export default function Static(props) {
  return (
    <main className='container p-3'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <ul className='list-group list-group-success'>
            {props.data1.map((e,i) => {
              return <li key={i} className="list-group-item list-group-item-primary">{i+1}. {e.name}</li>
            })}
          </ul>
        </div>
        <div className='col-12 col-md-6 mt-3 mt-md-0'>
          <ul className='list-group'>
            {props.data2.map((e,i) => {
              return <li key={i} className="list-group-item list-group-item-success">{i+1}. {e.name}</li>
            })}
          </ul>
        </div>
      </div>
    </main>
  ) 
}

export async function getStaticProps(context){
    try{
      const response1 = await fetch("http://127.0.0.1:8000/user")
      const data1 = await response1.json()
      
      const response2 = await fetch("http://127.0.0.1:8000/customer")
      const data2 = await response2.json()
      
      //console.log(context)
      // ได้ object นี้มา { locales: undefined, locale: undefined, defaultLocale: undefined }
      return {
          props:{data1,data2}
      }
    }catch(err){
      console.log(err.message)
    }
      
}
