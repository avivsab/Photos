import React, { useState } from "react";
import Images from './components/Images/Images';
import useTextAnimator from "./hooks/textAnimator";
import './App.css';

function App() {
  const [isRTL, setIsRTL] = useState(false);

  const toggleDirection = () => {
    setIsRTL((prevState) => !prevState);
  };

  return (
    <div className={`App ${isRTL ? "rtl" : "ltr"}`}>
      <h1>{useTextAnimator('Photo App')}</h1>
      <button onClick={toggleDirection}>{isRTL ? "Switch to LTR" : "Switch to RTL"}</button>
      <Images />
    </div>
  );
}

export default App;
