import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// task 2 map the list
function App() {
  // const [age, setAge] = useState(0);
  // const increaseAge = ()=>{
  //   setAge(age +1)
  // }
  // const decreaseAge =()=>{
  //   setAge(age -1)
  // }
  // return<div className='App'>
  //   <h1>{age}</h1>
  //   <button onClick={increaseAge}>Increase age</button>
  //   <button onClick={decreaseAge}> Decearese age</button>
  // </div>
  /////////////////////////////////////////////////////
  // const [inputvalue, setInputValue]= useState("")
  // const handelInputChange =()=>{
  //   console.log(event.target.value)
  //   setInputValue(event.target.value)
  // }
  // return<div className='App'>
  //   <input type='text' onChange={handelInputChange}></input>
  //   <h1>{inputvalue}</h1>
  // </div>

  const [showText, setShowText]= useState(true);

  const toggelText =()=>{
    // update stat
    setShowText(!showText);


  return<div className='App'>
    <button onClick={toggelText} > show/heide</button>
    {showText && <h1>Parastoo Style codeing</h1>}


  </div>

}

export default App;



