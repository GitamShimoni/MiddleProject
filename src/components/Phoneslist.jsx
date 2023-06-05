import './Phoneslist.css';
import data from "./workers.json";
import Workercard from "./Workercard"
function Phoneslist (){
   let arrayofworkers = data.workers;
   arrayofworkers.sort((a, b) => (b.Admin ? 1 : -1) - (a.Admin ? 1 : -1));
   return(
    <div id="Phoneslist-container">
      <div id="Phoneslist-inner">
      {arrayofworkers.map((element,index) => (
        <Workercard data={element} key={index}/>
      ))}
      </div>
   </div>
   )
}
export default Phoneslist