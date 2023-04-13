import React from 'react'
import "./favourite.css"
import Sidemenu from '../../component/sidemenu/Sidemenu'
const Favourite = () => {
  return (
   <div className="fav">
    <Sidemenu/>
    <div className="fav-contianer">
      <h1 className="text-white">Favourite page</h1>
    </div>
  </div>
  )
}

export default Favourite
