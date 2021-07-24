import { useState } from "react";
function DropdownArena({ selectedArena, setSelectedArena }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Gokarna Futsal",
    "Imadol Futsal",
    "Thimi Futsal",
    "Gongabu Futsal",
    "Taudaha Futsal",
    "Shantinagar Futsal",
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selectedArena}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelectedArena(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownArena;
