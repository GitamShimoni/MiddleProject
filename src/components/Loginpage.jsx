import './Loginpage.css';
import { BiUserCircle } from "react-icons/bi";
import {RiLockPasswordLine} from "react-icons/Ri";
import {useForm} from 'react-hook-form';
function Loginpage() {
    const {register, handleSubmit}=useForm();
    return(
    <div id="login-container">
        <div id="login-inner">
          <h1 id='login-tittle'>Log in</h1>
          <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
          <div> 
            <h3>Username:</h3>
            <div className="login-div">
              <span>{<BiUserCircle/>}</span>
              <input className='login-input' type='text' placeholder='enter your user name...' {...register("username")}></input>
            </div>
          </div>
          <div>
            <h3>Password:</h3>
            <div className="login-div">
              <span>{<RiLockPasswordLine/>}</span>
              <input className="login-input" type='password' placeholder='enter your password...' {...register("password")}></input>
            </div>
          </div>
          <div id="divofsubmit-btn"><button id="login-btn" type="submit">Log in</button></div>
          </form>      
        </div>
    </div>
    )
  }
  
  export default Loginpage