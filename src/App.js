import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// task 2 map the list
function App() {
  const [age, setAge] = useState(0);

  const increaseAge = ()=>{
    setAge(age +1)
  }
  const decreaseAge =()=>{
    setAge(age -1)
  }

  return<div className='App'>
    <h1>{age}</h1>
    <button onClick={increaseAge}>Increase age</button>
    <button onClick={decreaseAge}> Decearese age</button>
  </div>

}

export default App;



