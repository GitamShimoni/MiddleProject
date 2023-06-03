
import './WorkerInbox.css'
import {useState, useEffect} from "react";
const ClosedMessage = ({element, index, truncateString, formatDate}) => {
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("Messages")) || []);
    const [isOpen, setIsOpen] = useState(false);
    const [isRead, setIsRead] = useState(false);
    function handleClick(){
        setIsOpen(!isOpen)
        console.log(isOpen);
    }
    function toggleReadStatus(targetDate) {
        const newarray = messages;
        return newarray.map(obj => {
          if (obj.date === targetDate) {
            return { ...obj, read: !obj.read };
          }
          return obj;
        });
      }
    function toggleSetReadStatus(targetDate){
        const newarray = toggleReadStatus(targetDate);
        setMessages(newarray);
        setIsRead(!isRead)
    }
    useEffect(() => {
        let newarray = messages;
        newarray = newarray.map(obj => {
          if (obj.date === element.date) {
            return { ...obj, read: !obj.read };
          }
          return obj;
        });
        setMessages(newarray)
        localStorage.setItem("Messages", JSON.stringify(newarray))
    }, [isRead])
    
  return (
    <div className='MessageBox'>
    <button className={`${isRead ? "Message-is-read" : "Message-is-unread"}  read-button-message`} onClick={() => setIsRead(!isRead)}>Read</button>
    <button className='MessageButton' key={index*8} onClick={() => handleClick()}>
        {isOpen ? 
        <div className='CloseMessage-div'>
            <h1>{`${element.sendman.replace(/([A-Z])/g, ' $1')}`}</h1>
            <h3>{`${truncateString(element.content)}`}</h3>
            <h2>{formatDate(element.date)}</h2>
        </div>
        :
        <div className='OpenMessage-div'>
            <div className='OpenMessage-header-div'>
                <h1>{`${element.sendman.replace(/([A-Z])/g, ' $1')}`}</h1>
                <h2>{formatDate(element.date)}</h2>
            </div>
            <div className='OpenMessage-content-div'>
                <p className='OpenMessage-paragraph'>{`${element.content}`}</p>
            </div>
        </div>
    }
            
    </button>
    </div>
  )
}

export default ClosedMessage