import './Loginpage.css';
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
            
            <div className="login-div">
              <input className='login-input' type='text' {...register("username")}></input>
              <span className="user">Username</span>
            </div>
          </div>
          <div>
            
            <div className="login-div">
              <input className="login-input" type='password' {...register("password")}></input>
              <span className="user">Password</span>
            </div>
          </div>
          <div id="divofsubmit-btn"><button id="login-btn" type="submit">Sign In</button></div>
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
    let namesaved = null;
    for (let i=0; i<arrayofworkers.length;i++){
       if (arrayofworkers[i].Username==objofinput.username&&arrayofworkers[i].Password==objofinput.password){
        check=true;
        namesaved=arrayofworkers[i].FullName;
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
          localStorage.setItem("login", namesaved)
        }else{
          //lead to worker page
          console.log("go to worker")
          navigate('Worker');
          localStorage.setItem("login", namesaved)
        }
    }else{
      alert("username / password is incorrect")
    }
    
  }
  }
  
  export default Loginpage