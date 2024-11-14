import React from "react";
import './LoginSignup.css'





const LoginSignup=()=>{
    const [action, setAction]= useState("Login");
    return(
        <div className="container" >
            <div className="header">
                <div className="text"> {action}</div>
                <div className="underline">
                    </div>
                    </div>  
        
        <div className="inputs">
            <div className="input">
                <img src="{user-icon}" alt="" />
                <input type="text" placeholder="Name" />
            </div>

            <div className="input">
                <img src="{email-icon}" alt="" />
                <input type="email" placeholder="Email Id" />
            </div>

            <div className="input">
                <img src="{password-icon}" alt="" />
                <input type="password" placeholder="password" />
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click Here</span></div>
        <div className="submit-container">
           <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
           <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
    )
}

export default LoginSignup

