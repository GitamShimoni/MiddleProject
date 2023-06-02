
import './Divcardofshift.css';
function Divcardofshift({element, key, shiftsincalander, setshiftsincalander}) {
    let obj=element;
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
            <button onClick={()=>takeOutDataInCalender(obj.id)}>decline shift</button> 
        </div>
    )
    function setDataInCalender(obj){
        const dateforset = new Date(obj.startDate);
        const day1set = dateforset.getDate();
        const month1set = dateforset.getMonth();
        const year1set = dateforset.getFullYear();

        let starthour=null;
        let endhour=null;
        if(obj.hour=="morning"){
            starthour=9;
            endhour=12;
        }
        if(obj.hour=="lunch"){
            starthour=13;
            endhour=16;
        }
        if(obj.hour=="evening"){
            starthour=17;
            endhour=20;
        }
        
        let newShiftinCalender ={
            day: obj.day,
            title: obj.title,
            startDate: new Date(year1set, month1set, day1set, starthour, 0),
            endDate: new Date(year1set, month1set, day1set, endhour, 0),
            id: obj.id,
            hour: obj.hour,
            status: "accept",
        }
        //check if newshift that u want to put in is already there
        
        if(shiftsincalander.some(element => element.id == newShiftinCalender.id)){
            alert("shift is already accepted");
        }else{
            
        setshiftsincalander([...shiftsincalander, newShiftinCalender]);
         //now i need to push the aprroved object to local storage in the format and take out the same object with the status of selected
        const existingArray = JSON.parse(localStorage.getItem("allshifts")) || [];
        console.log("existingarray", existingArray);
        for (let i = 0; i < existingArray.length; i++) {
            if (existingArray[i].id === newShiftinCalender.id) {
                existingArray[i].status = "accept";
              break; // Stop the loop once the update is done
            }
          }
          localStorage.setItem("allshifts", JSON.stringify(existingArray));
        }
        }
    function takeOutDataInCalender(idofobj){
        if (shiftsincalander.some(element => element.id == idofobj)){
             console.log("should be delete");
             // now delete from array of shift in calander
               let updatearray = shiftsincalander.filter(element=>element.id!==idofobj)
               setshiftsincalander(updatearray);
             // now change in local storage the shift to selected instead of accept
             const existingArraybeforedeletelocal = JSON.parse(localStorage.getItem("allshifts")) || [];
             for (let i = 0; i < existingArraybeforedeletelocal.length; i++) {
                if (existingArraybeforedeletelocal[i].id === idofobj) {
                    existingArraybeforedeletelocal[i].status = "selected";
                  break; // Stop the loop once the update is done
                }
              }
              localStorage.setItem("allshifts", JSON.stringify(existingArraybeforedeletelocal));
        }else{
            alert("shift is not accept yet and beacuse of that cant be delete")
        }
    }
    
}
export default Divcardofshift;