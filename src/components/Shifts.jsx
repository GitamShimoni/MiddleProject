import {useState, useEffect} from "react";
function Shifts() {
  // const [shifts, setShifts] = useState(JSON.parse(localStorage.getItem("allshifts")));
  // const [filteredShifts, setFilteredShifts] = useState();
  // const loginName = (localStorage.getItem("login"));

  // useEffect(() => {
  //   setFilteredShifts(shifts);

  //   setFilteredShifts(filteredShifts.filter((obj) => (obj.title==loginName && obj.status =="approved")))
  //   setFilteredShifts([...filteredShifts].filter(
  //     (object) => loginName == object.title
  //   ));
  //   console.log(filteredShifts);
  // }, [shifts])
  return(
    <>
      <div>
        <h1>These are your shifts:</h1>
      </div>
      <div>
        <ul>

        </ul>
      </div>
    </>
  )
}
export default Shifts;
