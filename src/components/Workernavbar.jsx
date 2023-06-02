import { Link, Outlet } from "react-router-dom";
import "./Workernavbar.css";
function Workernavbar() {
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
