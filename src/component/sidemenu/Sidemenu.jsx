import React from 'react'
import "./sidemenu.css"
import { Link } from 'react-router-dom'
import { CgHomeAlt , CgProfile} from "react-icons/cg"
import { FaMap } from "react-icons/fa"
import { BiSearchAlt ,BiMenuAltLeft } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"

const Sidemenu = () => {
  return (
    <div className='side-menu'>
      <div className="center">
        <ul className='ul-item'>
            <li>
                <Link to="/"> <CgHomeAlt  className="icon"/></Link>
            </li>
            <li>
                <Link to="/map"> <FaMap  className="icon"/></Link>
            </li>
            <li>
                <Link to="/"> <BiSearchAlt  className="icon"/></Link>
            </li>
            <li>
                <Link to="/"> <AiOutlineHeart  className="icon"/></Link>
            </li>
            <li>
                <Link to="/profile"> <CgProfile  className="icon"/></Link>
            </li>
           
        </ul>
        
      </div>
    </div>
  )
}

export default Sidemenu
