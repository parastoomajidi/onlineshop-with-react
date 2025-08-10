import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Course from './Course';
import Axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';
import { Nav } from './Pages/Nav';
import {Profile} from './Pages/Profile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App(){
  const client = new QueryClient()
  return <div className='App'>
     <QueryClientProvider client={client}>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<div>Not Found</div>}/>
      </Routes>
    </Router>
     </QueryClientProvider>
  </div>
  
}






















// useEffect Hook
// function App(){
//   return(
//     <div className='App '>
//       <Router>
//         <div>Parastoo</div>
//         <Nav/>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path='/about' element={<About/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='/profile/:name' element={ <Profile/>} />
//           <Route path='*' element={<div>Not found</div>}/>
//         </Routes>
//         <div> this is footer</div>
//       </Router>
//     </div>
//   )  
// }

// generate excuse
// function App(){
//   const [generateExcuse, setGenerateExcuse] =useState("");

//   const fetchExcuse = (excuses) => {
//     Axios.get (`https://excuser-three.vercel.app/v1/excuse/${excuses}/`).then((resurce)=>{
//      setGenerateExcuse(resurce.data[0].excuses)
//     })
//   }
//   return (
//     <div className='App'>
//       <h1>Generate an excuse</h1>
//       <button onClick={()=> fetchExcuse("Party")}>Party</button>
//       <button onClick={()=> fetchExcuse("Family")}>Family</button>
//       <button onClick={()=> fetchExcuse("Office")}>Office</button>
//       <h1>is:{generateExcuse}</h1>
//     </div>
//   );
// }

// function App(){
//   const[name, setName] =useState("")
//   const [predictedAge, setPridectedAge] = useState(0)

//   const fetchAge =()=>{
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
//       console.log(res.data);
//       setPridectedAge(res.data.age)
//     })
//   }

//   return(
//     <div className='App'>
//       <input placeholder='ex, parastoo...' onChange={(event)=> setName(event.target.value)}></input>
//       <button onClick={fetchAge}>Predict age</button>
//       <h1 >Age is:{predictedAge}</h1>
//     </div>
//   )
// }
// function App() {
//   const[catFact, setCatFact] = useState("")
//   useEffect(()=>{
//     fetchFact()
// }, []);

// // a func for fetch data
// const fetchFact=()=>{
//     Axios.get("https://catfact.ninja/fact").then((res)=>{
//     console.log(res.data)
//     setCatFact(res.data.fact)
//   });
// }
//   return(
//     <div className='App'>
//       <button onClick={fetchFact}>fech data</button>
//       <p>{catFact}</p>
//     </div>
//   )
// }
//   // **add crad item project
//   const [coursList, setCourseList] = useState([]);
//   // we create another stat for accsess the details of what ever is in input
//   const [newCourse, setNewCourse] = useState("");

//   const handelChange = (event)=>{
//     setNewCourse(event.target.value)
//   }

// // add course list
//     const addCourse =() =>{
//       // we create a new paramether for the compate 2 word that the are same

//     const course ={
//       // too find the andiss  of array
//       id:coursList.length === 0? 1: coursList[coursList.length -1].id +1 ,
//       courseName: newCourse,
//       isCompleted : false
//   }
//     const newCourseList = [...coursList, course]
//     setCourseList(newCourseList)
//   }
//   // we are delte the course in here
//   const deleteCourse =(courseId) =>{
//     setCourseList(coursList.filter((course)=> courseId !== course.id))
//   }
//    const compeletCourse =(courseId)=>{
//     const newCourseList = coursList.map((course)=>{
//       if(course.id === courseId) return{...course, isCompleted:true}
//       else  return course
//     })
//    }
//   return(
//     <div className='App'>
//       <div className=' add-course'>
//         <input type='text' onChange={handelChange}></input>
//         <button onClick={addCourse}>Add Course</button>
//       </div>
//       <div className='list'>
//         {coursList.map((course, index)=>{
//           return (
//            <Course key={index} course={course}
//             deleteCourse={deleteCourse}
//             compeletCourse={compeletCourse}/>
//           )
//         })}
//       </div>

//     </div>
//   )

// }
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
////////////////////////////////////////////////////////////////
//   const [showText, setShowText]= useState(true);

//   const toggelText =()=>{
//     // update stat
//     setShowText(!showText);

//   return<div className='App'>
//     <button onClick={toggelText} > show/heide</button>
//     {showText && <h1>Parastoo Style codeing</h1>}
//   </div>
///////////////////////////////////////////////////////////
// ///task 4
// const[count, setCount] = useState(0);

// const increaseCount =()=>{
//   setCount(count+1)
// }
// const decreseCount =()=>{
//   setCount(count-1)
// }

// const resetCount =()=>{
//   setCount(0);
// }
// return(
//   <div className='App'>
//     <button onClick={increaseCount} >increase</button>
//     <button onClick={decreseCount}>decrease</button>
//     <button  onClick={resetCount}>set to 0</button>
//     <h1>{count}</h1>
//   </div>
// );
// }


export default App;



