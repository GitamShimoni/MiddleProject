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
import "./CalenderPage.css"
import Divcardofshift from "./Divcardofshift";
const loginname = localStorage.getItem("login")
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
const shifts = (JSON.parse(localStorage.getItem("allshifts")))
console.log(shifts);
const worker = [{ 

  title: "Wedding",
  startDate: new Date(2023, 4, 30, 11, 0),
  endDate: new Date(2023, 4, 30, 15, 0),
  id: "29.05.2023morning",
  status: "accept",
}, { 

  title: "Gitam",
  startDate: new Date(2023, 4, 31, 13, 0),
  endDate: new Date(2023, 4, 31, 16, 0),
  id: "31.05.2023morning",
  status: "accept",
},
{
  title: "GitamOfek",
day: "tuesday",
// startDate: "2023-01-30T07:00:00.000Z",
// endDate: "2023-01-30T11:00:00.000Z",
startDate: new Date(2023, 4, 29, 13, 0),
  endDate: new Date(2023, 4, 29, 16, 0),
id: "30.05.2023morningGitamOfek",
status: "accept"
}
]


localStorage.setItem(`${loginname}`, JSON.stringify(worker));

const CalenderPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(worker) // this need to be change : set data is coming from local storage
  }, [appointments]);

//can write from here

let arrayofshiftsformanager = (JSON.parse(localStorage.getItem("allshifts")))

  return (
    <>
    <div id="calender-page-div">
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
    {arrayofshiftsformanager.map((element, index) => <Divcardofshift element={element} key={index} shiftsincalander={data} setshiftsincalander={setData} />)}
    </div>
    <br></br><br></br><br></br><br></br>
    </>
  );
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
