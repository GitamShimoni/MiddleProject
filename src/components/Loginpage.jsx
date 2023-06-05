import './Loginpage.css';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import data from './workers.json';
import { useNavigate } from 'react-router-dom';
import PaymentForm from "./PaymentForm";
function Loginpage() {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    let arrayofworkers = data.workers;
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
          <div>
            <button onClick={() => setClicked(!clicked)} id='buymembership-button'>Buy Membership</button>
            {clicked &&
            <div id='credit-card-container'>
              <PaymentForm/>
            </div> }
          </div>
        </div>
    </div>
    )
  function checkUser(objofinput){
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

    if (check==true){
        if(admincheck==true){
          //lead to admin page
          
          navigate('Manager');
          localStorage.setItem("login", namesaved)
        }else{
          //lead to worker page
         
          navigate('Worker');
          localStorage.setItem("login", namesaved)
        }
    }else{
      alert("username / password is incorrect")
    }
    
  }
  }
  
  export default Loginpage
