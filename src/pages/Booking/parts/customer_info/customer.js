
import "./customer.css"

export const Customer_info =()=>
{
    return(
        <div className="Customer_info">
         <div className="Customer">
            <label>Customer Name</label>
            <input type="text"/>
         </div>
          <div className="Customer">
            <p>Customer ID</p>
            <input type="tel"/>
         </div>
         <div className="Customer">
            <label>Garantor Name</label>
            <input type="text"/>
         </div>
         <div className="Customer">
            <p>Guarantor ID</p>
         </div>
         <div className="action">
             <button className="btn">Continue</button>
           </div>
        </div>
    )
}