import './Loginpage.css';
import { BiUserCircle } from "react-icons/bi";
import {RiLockPasswordLine} from "react-icons/Ri";
import {useForm} from 'react-hook-form';
import data from './workers.json';
import { useNavigate } from 'react-router-dom';
function Loginpage() {
    const navigate = useNavigate();
    let arrayofworkers = data.workers;
    console.log(arrayofworkers);
    const {register, handleSubmit}=useForm();
    return(
    <div id="login-container">
        <div id="login-inner">
          <h1 id='login-tittle'>Log in</h1>
          <form onSubmit={handleSubmit((data)=>{checkUser(data)})}>
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
  function checkUser(objofinput){
    console.log("im here")
    console.log(objofinput.username);
    console.log(objofinput.password);
    let admincheck = null
    let check=false;
    for (let i=0; i<arrayofworkers.length;i++){
       if (arrayofworkers[i].Username==objofinput.username&&arrayofworkers[i].Password==objofinput.password){
        check=true;
        admincheck = arrayofworkers[i].Admin;
       }
    }
    console.log(check);
    console.log(admincheck);
    if (check==true){
        if(admincheck==true){
          //lead to admin page
          console.log("go to admin")
          navigate('Manager');
        }else{
          //lead to worker page
          console.log("go to worker")
          navigate('Worker');
        }
    }else{
      alert("username / password is incorrect")
    }
    
  }
  }
  
  export default Loginpage