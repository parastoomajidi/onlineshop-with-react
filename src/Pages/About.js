import React  from "react"
import { useNavigate } from "react-router-dom" 

  const About = ()=>{
    let navigate = useNavigate()
    return 
   (
    <React.Fragment>
        <div> <h1>About page</h1></div>
        <button onClick={()=> {navigate("/")} }> Go to home</button>

     </React.Fragment>
   )
}

export default About;