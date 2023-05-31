import "./availability.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const Availability = () => {
  const [dates, setDates] = useState([]);
  const [dateCounter, setDateCounter] = useState(0);
  const loginname = localStorage.getItem("login");
  //   const [workerShifts, setWorkerShifts] = useState([]);
  const [checkboxes, setCheckBoxes] = useState();

  useEffect(() => {
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let daysSinceSunday = currentDayOfWeek === 0 ? 0 : currentDayOfWeek;
    let sundayDate = new Date();
    sundayDate.setDate(
      currentDate.getDate() - daysSinceSunday + 7 * dateCounter
    );

    function calculateWeekDates() {
      let weekDates = [];
      for (let i = 0; i < 7; i++) {
        let date = new Date(sundayDate);
        date.setDate(sundayDate.getDate() + i);

        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");

        let formattedDate = day + "." + month + "." + year;
        weekDates.push(formattedDate);
      }

      setDates(weekDates);
    }

    calculateWeekDates();
  }, [dateCounter]);

  function handleLeftClick() {
    setDateCounter((prev) => prev - 1);
  }
  function handleRightClick() {
    setDateCounter((prev) => prev + 1);
  }

  let allshifts;
  if (JSON.parse(localStorage.getItem("allshifts")) == undefined) {
    allshifts = [];
    localStorage.setItem("allshifts", JSON.stringify(allshifts));
  } else {
    allshifts = JSON.parse(localStorage.getItem("allshifts"));
  }

  function handleInputClick(date, day, hour) {
    let starthourindex = null;
    let endhourindex = null;
    if (hour === "morning") {
      starthourindex = 9;
      endhourindex = 13;
    } else if (hour === "lunch") {
      starthourindex = 14;
      endhourindex = 18;
    } else {
      starthourindex = 19;
      endhourindex = 22;
    }
    const shift = {
      title: loginname,
      startDate: new Date(
        date.slice(-4),
        date.slice(2, 4),
        date.slice(0, 2),
        starthourindex
      ),
      endDate: new Date(
        date.slice(-4),
        date.slice(2, 4),
        date.slice(0, 2),
        endhourindex
      ),
      id: date + hour + loginname,
      day: day,
      hour: hour,
      status: "selected",
    };

    // allshifts.push(shift)
    // localStorage.setItem("allshifts", JSON.stringify(allshifts))

    if (
      allshifts.some((obj) => {
        return obj.id == shift.id
        // && obj.title == shift.title;
      })
    ) {
      allshifts = [...allshifts].filter(
        (object) => object.id != shift.id
        // object.title == shift.title && 
      );
      allshifts && localStorage.setItem("allshifts", JSON.stringify(allshifts));
    } else {
      allshifts.push(shift);
      localStorage.setItem("allshifts", JSON.stringify(allshifts));
      console.log("koosoomo");
    }
  }

  function HighlightCurrentDay(date) {
    let todaysdate = new Date();
    let year1 = todaysdate.getFullYear();
    let month1 = (todaysdate.getMonth() + 1).toString().padStart(2, "0");
    let day1 = todaysdate.getDate().toString().padStart(2, "0");

    let formattedDate1 = day1 + "." + month1 + "." + year1;

    if (date == formattedDate1) return true;
    else return false;
  }

  const [checkboxValues, setCheckboxValues] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({ ...prevState, [name]: checked }));
  };

  useEffect(() => {
    // Retrieve saved checkbox values from local storage
    const savedCheckboxValues = localStorage.getItem("checkboxValues");
    if (savedCheckboxValues) {
      setCheckboxValues(JSON.parse(savedCheckboxValues));
    }
  }, []);

  useEffect(() => {
    // Save checkbox values to local storage whenever they change
    localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
  }, [checkboxValues]);

  function isCheckSelected(date, day, hour) {
    let mySelected = localStorage.getItem(`${loginname}Selected`);
  }

  return (
    <div id="availble-main-div">
      <div id="availble-buttons-div">
        <Button onClick={handleLeftClick} variant="contained">
          ←
        </Button>
        <Button onClick={handleRightClick} variant="contained">
          →
        </Button>
      </div>
      <table id="availble-table">
        <tbody>
          <tr>
            <td>Day / Availble</td>
            <td
              className={
                HighlightCurrentDay(dates[0]) ? "boldHighlightDate" : ""
              }
            >{`Sunday ${dates[0]}`}</td>
            <td
              className={
                HighlightCurrentDay(dates[1]) ? "boldHighlightDate" : ""
              }
            >{`Monday ${dates[1]}`}</td>
            <td
              className={
                HighlightCurrentDay(dates[2]) ? "boldHighlightDate" : ""
              }
            >{`Tuesday ${dates[2]}`}</td>
            <td
              className={
                HighlightCurrentDay(dates[3]) ? "boldHighlightDate" : ""
              }
            >{`Wednsday ${dates[3]}`}</td>
            <td
              className={
                HighlightCurrentDay(dates[4]) ? "boldHighlightDate" : ""
              }
            >{`Thursday ${dates[4]}`}</td>
            <td
              className={
                HighlightCurrentDay(dates[5]) ? "boldHighlightDate" : ""
              }
            >{`Friday ${dates[5]}`}</td>
            <td
              className={
                HighlightCurrentDay(dates[6]) ? "boldHighlightDate" : ""
              }
            >{`Saturday ${dates[6]}`}</td>
          </tr>
          <tr>
            <td>Morning</td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[0], "sunday", "morning")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[1], "monday", "morning")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[2], "tuesday", "morning")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() =>
                  handleInputClick(dates[3], "wednesday", "morning")
                }
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() =>
                  handleInputClick(dates[4], "thursday", "morning")
                }
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[5], "friday", "morning")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() =>
                  handleInputClick(dates[6], "saturday", "morning")
                }
              />
            </td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[0], "sunday", "lunch")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[1], "monday", "lunch")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[2], "tuesday", "lunch")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[3], "wednesday", "lunch")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[4], "thursday", "lunch")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[5], "friday", "lunch")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[6], "saturday", "lunch")}
              />
            </td>
          </tr>
          <tr>
            <td>Evening</td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[0], "sunday", "evening")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[1], "monday", "evening")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[2], "tuesday", "evening")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() =>
                  handleInputClick(dates[3], "wednesday", "evening")
                }
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() =>
                  handleInputClick(dates[4], "thursday", "evening")
                }
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() => handleInputClick(dates[5], "friday", "evening")}
              />
            </td>
            <td>
              <Checkbox
                color="success"
                onClick={() =>
                  handleInputClick(dates[6], "saturday", "evening")
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      </div>
    </div>
  );
};

export default Availability;
