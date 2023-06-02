import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  DateNavigator,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";
import { appointments } from "./appointments";
import { useEffect, useState } from "react";
import "./CalenderPage.css";
import Divcardofshift from "./Divcardofshift";
const loginname = localStorage.getItem("login");
const currentDate = getCurrentFormattedDate();

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: "red",
      borderRadius: "10px",
    }}
  >
    {children}
  </Appointments.Appointment>
);

const shifts = JSON.parse(localStorage.getItem("allshifts"));
console.log(shifts);
// const worker = [{


//   title: "Wedding",
//   startDate: new Date(2023, 4, 30, 11, 0),
//   endDate: new Date(2023, 4, 30, 15, 0),
//   id: "29.05.2023morning",
//   status: "selected",
// }, {

//   title: "Gitam",
//   startDate: new Date(2023, 4, 31, 13, 0),
//   endDate: new Date(2023, 4, 31, 16, 0),
//   id: "31.05.2023morning",
//   status: "accept",
// },
// {
//   title: "GitamOfek",
// day: "tuesday",
// startDate: new Date(2023, 4, 29, 13, 0),
//   endDate: new Date(2023, 4, 29, 16, 0),
// id: "30.05.2023morningGitamOfek",
// status: "accept"
// }
// ]

let arrayofshifts = JSON.parse(localStorage.getItem("allshifts")) || []; //  this 2 lines
const acceptedshift = arrayofshifts.filter((obj) => obj.status === "accept"); //  is for make the array of accept shift

const CalenderPage = () => {
  const [test, setTest] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(acceptedshift);
  }, [appointments]);

  //can write from here

  const [morningcheck, setMorningcheck]=useState(true);
  const [lunchcheck, setLunchcheck]=useState(true);
  const [eveningcheck, setEveningcheck]=useState(true);

  const [arrayofshiftsformanager, setArrayofshiftsformanager] = useState(JSON.parse(localStorage.getItem("allshifts"))); // this is in usestate to present it in filter
  const [savearrayofshiftsformanager, setsaveArrayofshiftsformanager] = useState(JSON.parse(localStorage.getItem("allshifts"))); // this is for save
  // let arrayofshiftsformanager = (JSON.parse(localStorage.getItem("allshifts")))
  useEffect (()=>{
    let arraybycheckbox = savearrayofshiftsformanager;
    if (morningcheck!=true) {
      arraybycheckbox = arraybycheckbox.filter((element) => element.hour !== "morning");
    }
    if (lunchcheck!=true) {
      arraybycheckbox = arraybycheckbox.filter((element) => element.hour !== "lunch");
    }
    if (eveningcheck!=true) {
      arraybycheckbox = arraybycheckbox.filter((element) => element.hour !== "evening");
    }
    setData(arraybycheckbox);
    console.log("hi");
 }, [morningcheck, lunchcheck, eveningcheck])
  return (
    <>
      <div id="calender-page-div">
        <div id="filternavbar-calander">
          <div className="divcheckbox">
            <input type="checkbox" defaultChecked={true} onClick={() => setMorningcheck(!morningcheck)}></input>
            <span>morning</span>
          </div>
          <div className="divcheckbox">
            <input type="checkbox" defaultChecked={true} onClick={()=> setLunchcheck(!lunchcheck)}></input>
            <span>lunch</span>
          </div>  
          <div className="divcheckbox">
            <input type="checkbox" defaultChecked={true} onClick={()=> setEveningcheck(!eveningcheck)}></input>
            <span>evening</span>
          </div>
          <input type="text" placeholder="search for worker in the calander..." onChange={(e)=>searchWorkerinCalander(e.target.value)}></input>
        </div>
        <Paper>
          <Scheduler data={data}>
            <ViewState defaultCurrentDate={currentDate} />
            <WeekView startDayHour={9} endDayHour={22} />
            <h1 id="worker-shift-calender-header">Worker Shift Calender</h1>
            <Toolbar />
            <DateNavigator />
            <Appointments appointmentComponent={Appointment} />
            <AppointmentTooltip />
          </Scheduler>
        </Paper>
      </div>
      <div id="container-all-ater-calender">
        <input type="text" placeholder="search specific worker..." onChange={(e)=>searchWorkerFunction(e.target.value)}></input>
        <select
          defaultValue={"0"}
          id="sort-select"
          onChange={(e) => sortfunctionofshowingshifts(e.target.value)}
        >
          <option value="0">first sended shifts</option>
          <option value="1">last sended shifts</option>
          <option value="2">worker name</option>
          <option value="3">by dates from erlier</option>
          <option value="4">by dates from latest</option>
        </select>
        {arrayofshiftsformanager.map((element, index) => (
          <Divcardofshift
            element={element}
            key={index}
            shiftsincalander={data}
            setshiftsincalander={setData}
          />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
  
 

  function searchWorkerinCalander(workernameincalander){
    workernameincalander=workernameincalander.toLowerCase();
    console.log(workernameincalander);
    setData(savearrayofshiftsformanager.filter((element) => element.title.toLowerCase().includes(workernameincalander )));
    setTest(!test); 
  }

  function searchWorkerFunction (workername){
    console.log(workername);
    workername=workername.toLowerCase()
    setArrayofshiftsformanager(savearrayofshiftsformanager.filter((element) => element.title.toLowerCase().includes(workername)));
    setTest(!test); 
  }

  function sortfunctionofshowingshifts(value1) {
    if (value1 == "0") {
      console.log(0);
      setArrayofshiftsformanager(savearrayofshiftsformanager);
      console.log(savearrayofshiftsformanager)
      setTest(!test); 
    }
    if (value1 == "1") {
      console.log(1);
      const update1= arrayofshiftsformanager.slice().reverse();
      console.log(update1);
      setArrayofshiftsformanager(update1);
      setTest(!test);
    }
    if (value1 == "2") {
      console.log(2);
      const update2 = arrayofshiftsformanager.sort((a, b) => a.title.localeCompare(b.title));
      console.log(update2)
      setArrayofshiftsformanager(update2);
      setTest(!test);
    }
    if (value1 == "3") {
      console.log(3);
      const update3=arrayofshiftsformanager.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      console.log(update3)
      setArrayofshiftsformanager(update3);
      setTest(!test);
    }
    if (value1 == "4") {
      console.log(4);
      const update4=arrayofshiftsformanager.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      console.log(update4)
      setArrayofshiftsformanager(update4);
      setTest(!test);
    }
  }
};

export default CalenderPage;

function getCurrentFormattedDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  var day = currentDate.getDate().toString().padStart(2, "0");

  var formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}
