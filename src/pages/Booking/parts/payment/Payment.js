

import "./payment.css"


export const Payment =()=>
{
  

    return (
        <>
    <div className="payment">
    <div class="dropdown">
    <button class="dropbtn" >Pay With</button>
    <div class="dropdown-content" id="dropdownContent">
      <a>Credit Card</a>
      <a>Paypal</a>
      
    </div>
  </div>
   <div className="credit-info">
   <div className="info">
            <label>Credit Holder Name</label>
            <input type="text"/>
         </div>
         <div className="info">
            <label>Credit Number</label>
            <div className="credit_num">
            <input type="text" maxlength="4" pattern="\d{4}" required/>
            <input type="text" maxlength="4" className="input-none" pattern="\d{4}" required/>
            <input type="text" maxlength="4" className="input-none" pattern="\d{4}" required/>
            <input type="text" maxlength="4" className="input-none" pattern="\d{4}" required/>
            </div>
           <div className="security">
            <div className="Security-code ">
            <label>Security Code</label>
            <input type="text"/>
            </div>
            <div className="Expir-code ">
            <label>Expiration Date</label>
            <input type="text"/>
            </div>
           </div>
           <div className="action">
             <button className="btn">Continue</button>
           </div>
         </div>
        
   </div>
    </div>
        </>
      
    )  
}