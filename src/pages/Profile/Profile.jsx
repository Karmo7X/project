import React from 'react'
import avatar from "../../assets/image/Ellipse 3.png"
import bg from "../../assets/image/Rectangle 4233.png"
import ReactStars from "react-rating-stars-component";
import "./profile.css"
import Sidemenu from '../../component/sidemenu/Sidemenu'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoCalendar } from 'react-icons/io5'
import  { MdReviews } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Profile = () => {


  const data=[
    
      {
        id: 1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg ,
      },
      {
        id: 2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover:bg,
      },
      {
        id: 3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg,
      },
      {
        id: 4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg,
      },
      {
        id: 5,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg,
      },
      {
        id: 6,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg,
      },
      {
        id: 7,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg,
      },
      {
        id: 8,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg,
      },
      {
        id: 9,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: bg,
      },


    
  ]
 
  return (
    <div className="profile">
      <Sidemenu />
      <div className="profile-contianer">
        <div className="container">
          <div className="avatar">
            <img src={avatar} alt="" />
            <div className="details">
              <h2>Khaled Noor</h2>
              <p>Cairo-Egypt</p>
            </div>
          </div>

          <hr />
          <div className="center-profile ">
            <ul className="d-flex  justify-content-center gap-5 prof-item">
              <li className="prof_options">
                <IoIosInformationCircleOutline className="icons" />
                <Link to="" className="info  ">
                  Information
                </Link>
              </li>
              <li  className="prof_options">
                <IoCalendar className="icons" />
                <Link to="" className="info ">
                  Reservation
                </Link>
              </li>
              <li  className="prof_options">
                <MdReviews className="icons" />
                <Link to="" className="info ">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div className="boxs">

            {data.map(({desc,cover})=>
            {
              return(
                
                
                <div className="box">
               <div className="left">
                 <img src={cover} alt="" />
                 <h3 className="mt-4">Name of place </h3>
               </div>
               <div className="right">
                 <div className="box-details">
                   <p className="box-info">
                      {desc}
                    </p>
                   <div className="review">
                     <ReactStars count={5} size={20} activeColor="#ffd700" />
                     <p >5days</p>
                   </div>
                 </div>
               </div>
             </div>
             
             
           
              )
            })}
 
</div>

         
          
        </div>
      </div>
    </div>
  );
}

export default Profile
