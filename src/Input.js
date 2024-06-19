import React, {useState} from 'react'

export default function Input() {
    const [userName,setUserName]=useState('')
    function submit(){
        console.log("this is from submit function")
    }
    function handleChange(e){
        console.log(e.target.value)
        setUserName(e.target.value)
    }
    return (
        <div>
            <input onChange={handleChange} placeholder='Enter username'/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}
