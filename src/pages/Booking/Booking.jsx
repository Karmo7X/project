import React from 'react'
import { Link } from 'react-router-dom'
import "./booking.css"
import Sidemenu from '../../component/sidemenu/Sidemenu'
import{ MdVerified } from "react-icons/md"
import { The_Date , Hall_Info , Customer_info, Payment } from "./parts"
import { useState } from 'react'

const ProjectParts =[
  {id: 0, Alpha :"A", name: "Date" , Part: The_Date, isActive:false},
  {id: 1, Alpha:"B" ,name: "Hall Info" , Part: Hall_Info ,isActive:false},
  {id: 2, Alpha:"C" ,name: "Customer Info" , Part: Customer_info  ,isActive:false},
  {id: 3, Alpha:"D" ,name: "Payment" , Part: Payment  ,isActive:false},
]

const Booking = () => {
  const [partstate, setPartSate]= useState(ProjectParts)
  function Checkactive(id){
    setPartSate(oldItems=>(
      oldItems.map((oldItem =>(
        {
          ...oldItem , isActive : oldItem.id === id ? !oldItem.isActive : oldItem.isActive
        }
      )))
    ))
    return null
  }
  return (
    <div className='booking'>
      <Sidemenu/>
      <div className="booking-contianer">
       <div className="booking-sec">
        <h2>Booking</h2>

        <div className="list">
          {
            partstate.map(({id , Alpha,name , Part ,isActive  , index})=>
            {
              return(
                <>
                 <div className='option'>
                  {isActive ? <MdVerified  className="icon-option"/> : <p>{Alpha}</p>}
                <button key={index} onClick={ () => Checkactive(id)} className={isActive ? "active" :""}>{name}</button>
              </div>
                
                <div className="list-content">
                  { isActive && Part !== null && <Part key={index} />}
                </div>
                </>
               
              )
            })
          }

      
        </div>
      
       </div>
       <div className="show-data">

       </div>
      </div>
    </div>
  )
}

export default Booking
