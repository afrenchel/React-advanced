import React, { useState } from "react";

const UseStateCounterMeyer = () => {
  const [value, setValue] = useState(11);

  const increaseCounter = () => {
    if (value === 10) {
      setValue(value);
    } else setValue(value + 1);
  };
  const decreaseCounter = () => {
    if (value === 0) {
      setValue(value);
    } else setValue(value - 1);
  };
  return (
    <>
      <button type="button" className="btn" onClick={decreaseCounter}>
        Decrease
      </button>
      <span>{value}</span>
      <button type="button" className="btn" onClick={increaseCounter}>
        Increase
      </button>
    </>
  );
};

const UseStateHideElement = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [value, setValue] = useState(0);

  const handleHide = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {/* <p className={`${isHidden ? "show-content" : ""} `}>Content</p> */}
      {/* {!isHidden ? <p>Content</p> : null} */}
      {isHidden && value}
      <button type="button" className="btn" onClick={handleHide}>
        {isHidden ? "show" : "hide"}
      </button>
    </>
  );
};

export default UseStateHideElement;
