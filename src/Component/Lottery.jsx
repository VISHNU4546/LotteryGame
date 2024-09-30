import { useState } from "react"
import { genTicket } from "./helper";
export default function Lottery(){
  let[ticket,setTicket] = useState(genTicket(3));

    return(
        <>
        <h1>Lottery Game!</h1>
        <div>
            <span>
                {ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        {/* <button onClick={ticketBuy}>Buy Ticket</button> */}
        </>
    )
}