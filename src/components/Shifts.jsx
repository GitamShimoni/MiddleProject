import {useState, useEffect} from "react";
import WorkerShiftsCard from "./WorkerShiftsCard";
import './Shifts.css';
function Shifts() {
  const [shifts] = useState(JSON.parse(localStorage.getItem("allshifts")) || []);
  const [filteredShifts, setFilteredShifts] = useState();
  const [nextWeekfilteredShifts, setNextWeekFilteredShifts] = useState();
  const loginName = (localStorage.getItem("login"));
  const name = loginName.replace(/([A-Z])/g, ' $1');

    let today = new Date();
    let currentDayOfWeek = today.getDay(); // 0 (Sunday) through 6 (Saturday)
    let saturdayOffset = 6 - currentDayOfWeek; // Number of days until Saturday
    let saturdayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + saturdayOffset);

  useEffect(() => {
    function isEarlierDate(dateString1, dateString2) {
      const date1 = new Date(dateString1);
      const date2 = new Date(dateString2);
    
      return date1 > date2;
    }
    let myfilteredshifts = [];
    myfilteredshifts = shifts.filter((obj) => {
      return obj.title==loginName && obj.status == "accept"
    })
    let filteredshiftThisWeek = myfilteredshifts.filter((obj) => {
      return !isEarlierDate(obj.startDate, saturdayDate)
    })
    console.log(filteredshiftThisWeek);
    filteredshiftThisWeek = filteredshiftThisWeek.sort(function(a, b) {
      var dateA = new Date(a.endDate);
      var dateB = new Date(b.endDate);
      return dateA - dateB;
    });
    // filteredshiftThisWeek = filteredshiftThisWeek.sort((a,b) => { a.endDate - b.endDate})
    console.log(filteredshiftThisWeek);
    setFilteredShifts(filteredshiftThisWeek)

    
    let NextWeekfilteredshifts = myfilteredshifts.filter((obj) => {
      return isEarlierDate(obj.startDate, saturdayDate)
    })
    NextWeekfilteredshifts = NextWeekfilteredshifts.sort(function(a, b) {
      var dateA = new Date(a.endDate);
      var dateB = new Date(b.endDate);
      return dateA - dateB;
    });
    setNextWeekFilteredShifts(NextWeekfilteredshifts)
  }, [shifts])

  return(
    <>
      <div>
        <h1 id="shifts-page-header"> {`Hello ${name}, These are your shifts:`} </h1>
      </div>
      <div>
        <h1>This week shifts:</h1>
        <ul id="unordered-list-ofshifts">
         {filteredShifts?.map((element, index) =>
         <WorkerShiftsCard element={element} key={index}/>)}
        </ul>
      </div>
      <div>
        <h1>Next Weeks shifts:</h1>
        {nextWeekfilteredShifts?.map((element, index) =>
         <WorkerShiftsCard element={element} key={index}/>)}
      </div>
    </>
  )
}
export default Shifts;
