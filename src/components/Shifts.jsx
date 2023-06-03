import {useState, useEffect} from "react";
import WorkerShiftsCard from "./WorkerShiftsCard";
import './Shifts.css';
import WorkerInbox from "./WorkerInbox";
function Shifts() {
  const [shifts] = useState(JSON.parse(localStorage.getItem("allshifts")) || []);
  const [filteredShifts, setFilteredShifts] = useState();
  const [nextWeekfilteredShifts, setNextWeekFilteredShifts] = useState();
  const loginName = (localStorage.getItem("login"));
  const name = loginName.replace(/([A-Z])/g, ' $1');

  const [ThisWeeksShiftsEmpty, setThisWeeksShiftsEmpty] = useState(true)
  const [OtherWeeksShiftsEmpty, setOtherWeeksShiftsEmpty] = useState(true)
  const [AllWeeksShiftsEmpty, setAllWeeksShiftsEmpty] = useState(false)

    let today = new Date();
    let currentDayOfWeek = today.getDay(); // 0 (Sunday) through 6 (Saturday)
    let saturdayOffset = 6 - currentDayOfWeek; // Number of days until Saturday
    let saturdayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + saturdayOffset);
    saturdayDate.setHours(24);

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

    if (filteredshiftThisWeek.length > 0)
      setThisWeeksShiftsEmpty(false);
    filteredshiftThisWeek = filteredshiftThisWeek.sort(function(a, b) {
      let dateA = new Date(a.endDate);
      let dateB = new Date(b.endDate);
      return dateA - dateB;
    });
    // filteredshiftThisWeek = filteredshiftThisWeek.sort((a,b) => { a.endDate - b.endDate})
    setFilteredShifts(filteredshiftThisWeek)
    console.log(filteredshiftThisWeek);
    
    let NextWeekfilteredshifts = myfilteredshifts.filter((obj) => {
      return isEarlierDate(obj.startDate, saturdayDate)
    })
    NextWeekfilteredshifts = NextWeekfilteredshifts.sort(function(a, b) {
      let dateA = new Date(a.endDate);
      let dateB = new Date(b.endDate);
      return dateA - dateB;
    });
    if (NextWeekfilteredshifts.length > 0)
      setOtherWeeksShiftsEmpty(false);
    
    if (!(NextWeekfilteredshifts.length + filteredshiftThisWeek.length === 0))
      setAllWeeksShiftsEmpty(true);
    setNextWeekFilteredShifts(NextWeekfilteredshifts)
    console.log(NextWeekfilteredshifts);
  }, [shifts, loginName])

  return(
    <div id="shifts-page-container">
      <div>
      {AllWeeksShiftsEmpty ? <h1 id="shifts-page-header"> {`${name}, These are your shifts`} </h1> :
       <h1 id="shifts-page-header"> {`Hello ${name}, You have no accepted shifts.`} </h1>}
      </div>
      {ThisWeeksShiftsEmpty ? <></> :
      <div id="thisWeeksShifts-div">
        <div id="unordered-list-ofshifts">
          <div id="thisweeksheader-div">
            <h1 className="this-shifts-header">This week shifts:</h1>
          </div>
          <div id="thisweeksshifts-div">
            {filteredShifts?.map((element, index) =>
            <WorkerShiftsCard element={element} key={index*4}/>)}
          </div>
        </div>
      </div>}
      {OtherWeeksShiftsEmpty ? <></> : 
      <div id="otherWeeksShifts-div">
        <div id="nextweekheader-div">
        <h1 className="this-shifts-header">Next Weeks shifts:</h1>
        </div>
        <div id="nextweekshifts-div">
          {nextWeekfilteredShifts?.map((element, index) =>
          <WorkerShiftsCard element={element} key={index}/>)}
        </div>
      </div>}
            <div id="shiftpage-messages-div">
              <h1>Inbox</h1>
              <div id="inbox-messages-div">
                <WorkerInbox/>
              </div>
            </div>
    </div>
  )
}
export default Shifts;
