import './Manager.css';
import CalenderPage from './CalenderPage';
    let loginname = localStorage.getItem("login")
    const firstName = loginname.split(/(?=[A-Z])/)[0];
    const date = new Date();
    const hour = date.getHours();
    let stringhour;
    if (hour >= 6 && hour < 12) {
    stringhour = "Morning";
    } else if (hour >= 12 && hour < 17) {
    stringhour = "Noon";
    } else if (hour >= 17 && hour < 21) {
    stringhour = "Evening";
    } else {
    stringhour = "Night";
    }
function Manager (){
    return (
        <>
        <div id="headline-manager-page">
            <div id='manager-logo-h1'>
                <img id="logo-manager"src="https://cdn-icons-png.flaticon.com/512/5774/5774430.png" alt="pic"></img>
                <h1 id="headline-tittle">Manager</h1>
            </div>
            <div>
            <h3 id="goodhour-h3">{`Good ${stringhour}, ${firstName}`}</h3>
            </div>
        </div>
        <CalenderPage></CalenderPage>
        </>
    )  
}
export default Manager