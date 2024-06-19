import React, {useState} from 'react'


export default function List() {
    const [employees, setEmployees] = useState([
        {
            name:"neha",
            city:"guntur",
            gender:"female",
            yof:2024
        },
        {
            name:"sneha",
            city:"vijayawada",
            gender:"female",
            yof:2027
        },
        {
            name:"siri",
            city:"hyderabad",
            gender:"female",
            yof:2028
        }
    ])
    
  return (
   <div>
    {
        employees.map((emp)=>(
            <div>
                <p>Name:{emp.name}</p>
                <p>City:{emp.city}</p>
                <p>Gender:{emp.gender}</p>
                <p>Year:{emp.yof}</p>
            </div>

        ))
    }
   </div>
  )
}
