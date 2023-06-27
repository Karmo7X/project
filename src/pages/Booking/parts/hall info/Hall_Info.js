import{ VscPackage } from "react-icons/vsc"
import  { FaHotel } from "react-icons/fa"
import "./hall.css"

export const Hall_Info =()=>
{
       return( 
        <div className="Hall_info">
            <div className="Hall">
            <div className="Hall-input">
               <FaHotel className="icon-input"/>
               <input type="text" placeholder="Hall Name" />
            </div>
           </div>
           <div className="package">
            <div className="package-input">
               <VscPackage className="icon-input"/>
               <input type="text" placeholder="Package Name" />
            </div>
            <div className="package-option">
                  <input type="text" placeholder="200 Person" />
                  <input type ="text" placeholder="18500 EGP" />
               </div>
           </div>
           <div className="action">
             <button className="btn">Continue</button>
           </div>
        </div>
         
        
       )
} 