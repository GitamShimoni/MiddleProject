import './WorkerInbox.css'
import {useState, useEffect} from "react";
import ClosedMessage from './ClosedMessage';

const WorkerInbox = () => {
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("Messages")) || []);
    const [sortedMessages, setSortedMessages] = useState(JSON.parse(localStorage.getItem("Messages")) || []);
    const [openCards, setOpenCards] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const loginName = localStorage.getItem("login");
    const name = loginName.replace(/([A-Z])/g, ' $1');
    const ResetOpenCards = [];


    const sortMessages = (a, b) => {
        if (a.read === b.read) {
          return 0;
        }
        if (a.read) {
          return 1;
        }
        return -1;
      };

    const myMessages = messages.filter((obj) => {
        return obj.to==loginName
      })
    
    const myMessagesSorted = myMessages.sort(sortMessages)
    
    //   function resetCards(){
    //       setOpenCards(myMessagesSorted.map(() => false));
    //   }
      useEffect(() => {
            // resetCards();
            setSortedMessages(myMessagesSorted);
            console.log(openCards);
      }, [messages])

      function handleOnButtonClick(index){
        !setOpenCards(!openCards[index])
      }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        };
        const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
        return formattedDate.replace(',', ' -');
      }
      function truncateString(str) {
        if (str.length <= 10) {
          return str;
        }
        return str.slice(0, 10) + "...";
      }

  return (
    <div id="WorkerInbox-div">
        {sortedMessages.map((element, index) => { return(
            <>
            <ClosedMessage key={index*5} element={element} index={index}
             truncateString={truncateString} formatDate={formatDate} />
            </>
        )})}
    </div>
  )
}

export default WorkerInbox
{/* <button key={index*8} onClick={() => setIsOpen(!isOpen)}>
            <div className='OpenMessage-div'>
                <h1>{`${element.sendman.replace(/([A-Z])/g, ' $1')}`}</h1>
                <h3>{`${truncateString(element.content)}`}</h3>
                <h2>{formatDate(element.date)}</h2>
            </div>
            <div className={`${isOpen ? "OpenCard" : "ClosedCard" }`}>
            <h1>{`${element.content}`}</h1>
            </div>
            </button> */}

{/* <button key={index*11}>
            <div className='Message-div'>
                <h1>{`${element.sendman.replace(/([A-Z])/g, ' $1')}`}</h1>
                <h3>{`${truncateString(element.content)}`}</h3>
                <h2>{formatDate(element.date)}</h2>
            </div>
            </button> */}