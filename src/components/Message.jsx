import { useEffect, useState } from "react";
function Message (keyofuser){
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("Messages")) || []);
    const [newmessage, Setnewmessage]=useState("");
    function sendMessage (newmessage1){
        let today1 = new Date;
        const blockofnewmessage = {
            sendman: keyofuser.loginname,
            isSendmanAdmin: false,
            date: today1,
            content: newmessage1,
            to: "manager",
            read: false
        }
        console.log(blockofnewmessage);
        setMessages([...messages, blockofnewmessage]);
    }
    useEffect(() =>{
        localStorage.setItem("Messages", JSON.stringify(messages));
    }, [messages])

    return(
        <div>
           <h1>Message box</h1>
           <textarea id="textplace" onChange={(e)=>Setnewmessage(e.target.value)} placeholder="send a message to the admin..."></textarea>;
           <button onClick={()=> sendMessage(newmessage)}>send the message</button>
        </div>
    )   
}
export default Message;