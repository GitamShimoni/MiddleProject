
import './Divcardofshift.css';
function Divcardofshift({element, key, shiftsincalander, setshiftsincalander}) {
    let obj=element;
    console.log(obj);
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
        const dateforset = new Date(obj.startDate);
        console.log(dateforset);
        const day1set = dateforset.getDate();
        console.log(day1set);
        const month1set = dateforset.getMonth();
        console.log(month1set);
        const year1set = dateforset.getFullYear();
        console.log(year1set);

        let starthour=null;
        let endhour=null;
        if(obj.hour=="morning"){
            console.log("this is morning");
            starthour=8;
            endhour=12;
            console.log(starthour, endhour);
        }
        if(obj.hour=="lunch"){
            console.log("this is lunch");
            starthour=13;
            endhour=16;
            console.log(starthour, endhour);
        }
        if(obj.hour=="evening"){
            console.log("this is evening");
            starthour=17;
            endhour=20;
            console.log(starthour, endhour);
        }
        
        let newShiftinCalender ={
            title: obj.title,
            startDate: new Date(year1set, month1set, day1set, starthour, 0),
            endDate: new Date(year1set, month1set, day1set, endhour, 0),
            id: obj.id,
            status: "approved",
        }
        setshiftsincalander([...shiftsincalander, newShiftinCalender]);
        console.log(shiftsincalander);
    }
    function takeOutDataInCalender(obj){
        console.log("take shift out function");
    }
    
}
export default Divcardofshift;