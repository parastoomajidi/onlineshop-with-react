import logo from './logo.svg';
import './App.css';

function App() {
  const age = 25;
  return(
   <div className='App'>
    {age >34 ? <h1>faild</h1> : <h1>passed</h1>}
    <button type='submit' className={age>24 ? "s" : "r" }>click me</button>
   </div>
  )
}



export default App;



//   <div>
//     <Job salary={20000} posiotion="Product designerin" company="google"/>
    
//   </div>
//  )
// }

// const Job =(props)=>{
//   return(
//    <div>
//      <h2>{props.salary}</h2>
//     <h2>{props.posiotion}</h2>
//     <h2>{props.company}</h2>
//    </div>
//   )
