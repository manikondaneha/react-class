import {useState} from 'react'
import Props from './Props'
import List from './List'
import Input from './Input'
import Vehicle from './Vehicle'
function App(){
  const [name,setName]=useState('ReactJS')
  const [year,setYear]=useState(2013)
  return(
    <div>
      <Vehicle/>
      {/* <Input/>
      <List/> */}
      {/* <p>good afternoon</p>
      <h1>welcome to hyderabad</h1>
      <p>Name:{name} Year: {year}</p>
      <Props studentName="Neha" studentRollNo="1"/>
      <Props studentName="Sneha" studentRollNo="2"/>
      <Props studentName="Chandana" studentRollNo="3"/> */}
    </div>
  )
}
export default App