import './Manager.css';
import CalenderPage from './CalenderPage';
import Managermessage from './Managermessage';

function Manager (){
    const nameofmanager = localStorage.getItem("login");
    console.log(nameofmanager, "nameofmanager");
    return (
        <>
        <div id="headline-manager-page">
            <div><img id="logo-manager"src="https://cdn-icons-png.flaticon.com/512/5774/5774430.png" alt="pic"></img></div>
            <div id="headline-tittle">Manager</div>
        </div>
        <CalenderPage></CalenderPage>
        <Managermessage nameofmanager={nameofmanager}></Managermessage>
        </>
    )  
}
export default Manager;