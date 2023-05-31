import './Manager.css';
import CalenderPage from './CalenderPage';

function Manager (){
    // let keysoflocalstorage = Object.keys(localStorage); // this is array of keys in the local storage
    // console.log (keysoflocalstorage);
    // let arrayofshowingdata = 
    return (
        <>
        <div id="headline-manager-page">
            <div><img id="logo-manager"src="https://cdn-icons-png.flaticon.com/512/5774/5774430.png" alt="pic"></img></div>
            <div id="headline-tittle">Manager</div>
        </div>
        <CalenderPage></CalenderPage>
        </>
    )  
}
export default Manager