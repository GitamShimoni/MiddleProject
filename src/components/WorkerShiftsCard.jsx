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

   const newdate = formatDate(element.startDate)


  return (
    <>
        <li className="cardofshift-div">
            <div>{`${newdate}`}</div>
            <div>{`${element.day} ${element.hour}`}</div> 
            <div>{`Shift Hours: ${element.startShiftHour}:${element.startShiftMinutes} - ${element.endShiftHour}:${element.endShiftMinutes}`}</div>

        </li>
    </>
  )
}

export default WorkerShiftsCard