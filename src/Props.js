import React from 'react'

export default function Props(props) {
    console.log(props)
  return (
    <div>
      <h1>this is props component</h1>
      <p>Name is:<b>{props.studentName}</b> and roll no :{props.studentRollNo}</p>
    </div>
  )
}
