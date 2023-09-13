import React from 'react';
import './App.css';
import BeerList from './components/BeerList';

function App() {
  return (
    <div className="App">
      <h1 style={
        {backgroundColor: "#70d7ba",
        height: "60px", 
        marginTop: "0px", 
        paddingTop: "15px", 
        fontFamily: "cursive"}}>BEER CATALOG</h1>
      <BeerList />
    </div>
  );
}

export default App;
