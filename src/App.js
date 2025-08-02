import logo from './logo.svg';
import './App.css';

function App() {
 return(
  <div>
    <Job salary={20000} posiotion="Product designerin" company="google"/>
    <Job salary={8000} posiotion="Developer" company="Audi"/>
  </div>
 )
}
// component 
const Job =(props)=>{
  return(
   <div>
     <h2>{props.salary}</h2>
    <h2>{props.posiotion}</h2>
    <h2>{props.company}</h2>
   </div>
  )
}


export default App;
