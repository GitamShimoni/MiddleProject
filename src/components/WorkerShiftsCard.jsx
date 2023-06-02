import './Divcardofshift.css';
const WorkerShiftsCard = ({element}) => {

    function formatDate(dateString) {
        const date = new Date(dateString);
        
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so we add 1
        const year = date.getFullYear();
      
        return `${day}.${month}.${year}`;
      }
    //   const originalDateString = obj.startDate;
    //   const formattedDateString = formatDate(originalDateString);
    let startFixedMinutes = element.startShiftMinutes;
    let endFixedMinutes = element.endShiftMinutes;

   const newdate = formatDate(element.startDate)
      if(startFixedMinutes == "0"){
        startFixedMinutes="00";
      }
      if(endFixedMinutes == "0"){
        endFixedMinutes="00";
      }

  return (
    <>
        <li className="cardofshift-div">
            <div>{`${newdate}`}</div>
            <div>{`${element.day} ${element.hour}`}</div> 
            <div>{`Shift Hours: ${element.startShiftHour}:${startFixedMinutes} - ${element.endShiftHour}:${endFixedMinutes}`}</div>

        </li>
    </>
  )
}

export default WorkerShiftsCard