import React from 'react'

/* ตัวอย่างการทำ dynamic ด้วยโฟลเดอร์ */
export default function Student(props) {
  return (
    <div>
        <p>{props.data.id} {props.data.name}</p>
    </div>
  )
}

export async function getStaticPaths() {
    let a = [
        { 'params': { 'user': '1' } }, 
        { 'params': { 'user': '2' } }, 
        { 'params': { 'user': '3' } }, 
        { 'params': { 'user': '4' } }, 
        { 'params': { 'user': '5' } }
    ]
    //console.log(a)
    return {
        paths:a,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const response = await fetch(`http://127.0.0.1:8000/users/${context.params.user}`)
    const data = await response.json()
    if (context.params.user === "3"){
        return {
            notFound:true
        }
    }else{
        return {
            props: {data}
        }
    }

    
}

