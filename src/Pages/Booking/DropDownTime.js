import { useState } from "react";
function DropdownTime({ selectedTime, setSelectedTime }) {
  const [isActive, setIsActive] = useState(false);
  const times = [
    "7:00-8:00",
    "8:00-9:00",
    "9:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-01:00",
    "01:00-02:00",
    "02:00-03:00",
    "03:00-04:00",
    "04:00-05:00",
    "05:00-06:00",
    "06:00-07:00",
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selectedTime}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {times.map((time) => (
            <div
              onClick={(e) => {
                setSelectedTime(time);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownTime;
