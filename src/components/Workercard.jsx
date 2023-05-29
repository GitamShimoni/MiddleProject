import './Workercard.css';
import { AiTwotonePhone } from "react-icons/ai";

function Workercard ({data}){
    console.log(data.FullName)
    console.log(data.Phone)
   return(
    <div className="workercard-container">
       <div className='workercard-fullname'><h4>{data.FullName}</h4></div>
       <div className='workercard-phone' ><h4>{data.Phone}</h4></div>
       <div className='linktocall'>
       <a href={`tel:${data.Phone}`}>
       <AiTwotonePhone/>
       </a>
       </div>
    </div>
   )
}
export default Workercard;