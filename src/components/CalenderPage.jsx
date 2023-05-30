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
const worker = {

  title: "Website Re-Design Plan",
  startDate: new Date(2023, 4, 30, 12, 0),
  endDate: new Date(2023, 4, 30, 15, 0),
  id: "29.05.2023morning",
}
localStorage.setItem(`${loginname}Selected`, JSON.stringify(worker));
const CalenderPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([JSON.parse(localStorage.getItem(`${loginname}Selected`))]);
  }, [appointments]);

  return (
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
