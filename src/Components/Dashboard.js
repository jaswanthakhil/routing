import React from 'react'
import {useResolvedPath,useLocation, useParams,Route,Navigate ,Routes } from 'react-router-dom'

export default function Dashboard() {
//    const location= useLocation();
//    const {id}= useParams();
    // const history=useHistory()
    // const query = new URLSearchParams(useLocation().search)
    // console.log(query.get("location"))
    // console.log(query.get("name"))
    function Blog(){
        const url = useResolvedPath("/home/blog").pathname;
      if(url === '/home/blog'){ return(
            <div> useRouteMatch</div>
        )
      }
      else{
        return null
      }
    }
  return (
    <div>
        {/* {location.pathname} */}
        <Blog/>
    <div style={{alignItems:'center'}}>Dashboard</div>
    {/* <button onClick={()=>history.push("/about")}>navigate to about</button> */}
    <Routes>
    <Route path="/home" element={<Navigate replace to="/login" />} />
    </Routes>
   </div>
  )

}