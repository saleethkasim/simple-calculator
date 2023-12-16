
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

const [amount,setAmount]=useState(0);
const [year,setYear]=useState(0);
const [rate,setRate]=useState(0);

const [interest,setInterest]=useState(0);

console.log(amount,year,rate);

const calculate=(e)=>{
  const output=amount*year*rate/100;
  setInterest(output)
  console.log(output);
  setInterest(output)
}

const reset=()=>{
  setAmount("");
  setYear("");
  setRate("");
  setInterest(0)
}

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple interest calculator</h1>
           <p>Calculate your simple interest with us ❤️</p>
        </div>

      <div className="total">
        <h2>&#8377;{interest}</h2>
        <p>your total Interest</p>
      </div>

      <div className="form">
        <form>
          <div className="input">
          <TextField value={amount || ""} id="outlined-basic" onChange={(e) => setAmount(e.target.value)}  label="Amount" variant="outlined" /><br />
          <TextField value={year || ""}  id="filled-basic" onChange={(e)=>setYear(e.target.value)} label="Year" variant="outlined" /><br />
          <TextField value={rate || ""}  id="standard-basic" onChange={(e)=>setRate(e.target.value)}  label="Rate" variant="outlined" />
          </div>

          <div className="button">
          
            <Button variant="contained" onClick={(e)=>calculate(e)}>Calculate</Button>
            <Button onClick={(e)=>reset(e)} variant="outlined">Reset</Button>
          </div>
        </form>
      </div>

      </div>
    </div>
  );
}

export default App;
