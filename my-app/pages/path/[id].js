import React from 'react'

export default function Path(props) {
  return (
    <div>
        <p>{props.data.id} {props.data.name}</p>
    </div>
  )
}

export async function getStaticPaths() {
    /* const response = await fetch("http://127.0.0.1:8000/user")
    const data = await response.json()
    
    const b = data.map((e) => {
        return {params: {id : `${e.id}` }}
    }) */
    
    let a = [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }, { params: { id: '4' } }, { params: { id: '5' } }]
    return {
        paths:a,
        fallback: false,
    }
  }

export async function getStaticProps(context) {
    const response = await fetch(`http://127.0.0.1:8000/user/${context.params.id}`)
    const data = await response.json()
    return {
        props: {
            data   
        }
    }
  }



/* export async function getStaticPaths(){
    const response = await fetch("http://127.0.0.1:8000/user")
    const data = await response.json()
    
    const path = data.map((e) => {
        return {params: {id : String(e.id) }}
    })
    
    return {
        paths: path,
        fallback: true,
    }
}*/



