import { render } from 'react-dom';
import './Divcardofshift.css';
function Divcardofshift({element, key, shiftsincalander, setshiftsincalander}) {
    let obj=element;
    console.log(element);
    console.log(obj);
    console.log(shiftsincalander);
    console.log(setshiftsincalander);
    function formatDate(dateString) {
        const date = new Date(dateString);
        
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so we add 1
        const year = date.getFullYear();
      
        return `${day}.${month}.${year}`;
      }
      
      const originalDateString = obj.startDate;
      const formattedDateString = formatDate(originalDateString);
      
    //   console.log(formattedDateString);  // Output: 30.1.2023
    return(
        <div className="cardofshift-container">
            <div>{obj.title}</div>
            <div>{obj.status}</div>
            <div>{formattedDateString}</div>
            <div>{obj.hour}</div> 
            <button onClick={()=>setDataInCalender(obj)}>accept shift</button> 
            <button onClick={()=>takeOutDataInCalender(obj)}>decline shift</button> 
        </div>
    )
    function setDataInCalender(obj){
        console.log(obj);
        let newShiftinCalender = [{
            title: "Wedding",
            startDate: new Date(2023, 4, 28, 11, 0),
            endDate: new Date(2023, 4, 28, 15, 0),
            id: "29.05.2023morning",
            status: "declined",
        } ]
        setshiftsincalander(newShiftinCalender);
        console.log("setDataInCalender")
        console.log(Date(2023, 4, 28, 11, 0));
    }
    function takeOutDataInCalender(obj){
        console.log("take shift out function");
    }
    
}
export default Divcardofshift;