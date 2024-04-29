import { useState } from "react";
import Header from "./component/Header.jsx";
import UserInput from "./component/UserInput.jsx";
import Results from "./component/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleChange = (InputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [InputIdentifier]: +newValue,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={UserInput} handleChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid input</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
