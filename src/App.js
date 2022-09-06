import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import EdiText from "react-editext";

function App() {
  const [cardName, setCardName] = useState("Initail name");

  //not working, explicitly returning
  const updateCardName = async (val) => {
    setCardName(val);
    return false;
  };

  // working
  // const updateCardName = (val) => {
  //   setCardName(val);
  //   return false
  // };

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EdiText
          submitOnEnter
          type="text"
          value={cardName}
          // validation={(val) => updateCardName(val)} // this is working as expected
          validation={async (val) => {
            await updateCardName(val);
          }} // this is not working, trying to validate thorugh API
          validationMessage="Please change the name"
          cancelOnEscape
          onSave={() => {}}
        />
      </header>
    </div>
  );
}

export default App;