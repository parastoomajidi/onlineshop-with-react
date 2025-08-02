import logo from './logo.svg';
import './App.css';

// task 2 map the list
function App() {
  const classes =[
    {name:"html",finished: true},
    {name:"JS", finished: false},
    {name:"CSS", finished: true}
  ];

  return(
    <div className='App'>
      {classes.map((c, index)=>{
        // return< Class1 key={index} name={classes.name} finished={classes.finished}/>
        return c.finished && <h2 key={index}>{c.name}</h2>
      })}
    </div>
  )
}
const Class1 =(props)=>{
  return( <h2>{props.name} : {props.finished}</h2>)
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
