import { Link, Outlet } from "react-router-dom";
import "./Workernavbar.css";
function Workernavbar() {
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

  return (
    <div>
      <div id="navbardiv">
        <div id="divoflogo">
          <img
            id="imgLogo"
            src="https://cdn-icons-png.flaticon.com/512/5774/5774430.png"
            alt="pic"
          ></img>
        </div>
        <div id="goodhour-div">
          <h3 id="goodhour-h3">{`Good ${stringhour}, ${firstName}`}</h3>
        </div>
        <Link to={"/worker"}>
          <div className="object-nav">Shifts</div>
        </Link>
        <Link to={"availability"}>
          <div className="object-nav">Availability</div>
        </Link>
        <Link to={"phonelist"}>
          <div className="object-nav">Phones list</div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
export default Workernavbar;
