import React from 'react'

import Withnav from './Withnav'
import Withoutnav from './Withoutnav'
import { useEffect, useState } from 'react'

// const ProtectedRoute = () => {

// const[auth1 , setAuth]=useState()

//     useEffect(() => {
//         const auth = localStorage.getItem("auth");
//         setAuth(auth)
        
//     }, []);




//   return (
//     <div>
//       {auth1 ==="admin"?<Withoutnav/>:<Withnav/>}
//       </div>
//   )
// }

// export default ProtectedRoute;

import { Outlet, Navigate } from 'react-router-dom'
const ProtectedRoute = () => {
    // const[auth1 , setAuth]=useState()

    // useEffect(() => {
    //     const auth = localStorage.getItem("auth");
    //     setAuth(auth)
        
    // }, []);
            const auth = localStorage.getItem("auth");

return (
    auth ==="admin" ? <Outlet/> : <Navigate to="/"/>
  )
}

export default ProtectedRoute;