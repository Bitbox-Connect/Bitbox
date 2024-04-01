import { useState } from 'react'
import avatar from '../../../assets/images/Dropdown/avatar.jpg'
export default function Youtube() {
  // const [isLoggedIn,setIsLoggedIn]= useState(false);
  // const handleLogin: any =(username)=>{
  //           setIsLoggedIn(true)
  // }

  return (
    <div>
     {
      isLoggedIn ? (
        <div> 
          
           </div>
      ) : (

        <otpLogin onLogin={handleLogin}></otpLogin>
      )
     }


    </div>
  )
}
