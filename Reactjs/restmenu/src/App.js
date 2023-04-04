import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";


function App() {
  return (
    <div className="App">
      <Header />
      <Button btnName='Todo'/>
      <Button btnName='Breakfast'/>
      <Button btnName='Lunch'/>
      
    </div>
  );
}

export default App;
