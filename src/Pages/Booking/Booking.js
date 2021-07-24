import "./Booking.css";


import DropDownArena from "./DropDownArena";
import DropDownTime from "./DropDownTime";
import { useState } from "react";
export const Booking= () => {
  const [selectedArena, setSelectedArena] = useState("Choose Futsal");
  const [selectedTime, setSelectedTime] = useState("Choose Your Time");

  function handleClick() {
    console.log("Futsal name: ", selectedArena);
    console.log("Time: ", selectedTime);
  }
  return (
    <div className="App">
      {/* custom dropdown menu */}
      <div className="booking-box">
        <div className="booking-section">
         
             
                <label htmlFor="">Arena:</label>
                <DropDownArena
                  selectedArena={selectedArena}
                  setSelectedArena={setSelectedArena}
                />
            
                <DropDownArena
                  selectedArena={selectedArena}
                  setSelectedArena={setSelectedArena}
                />
             
                <DropDownTime
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
            
                <button size="sm" onClick={handleClick}>
                  Check availability
                </button>
             
          
                <button
                  className="check-button"
                  size="sm"
                  onClick={handleClick}
                >
                  Check availability
                </button>
        </div>
        <br />
        {selectedArena}
        {selectedTime}
      </div>
    </div>
  );
}

export default Booking;