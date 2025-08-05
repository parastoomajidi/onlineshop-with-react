import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Course from './Course';

// task 2 map the list
function App() {
  // **add crad item project
  const [coursList, setCourseList] = useState([]);
  // we create another stat for accsess the details of what ever is in input
  const [newCourse, setNewCourse] = useState("");

  const handelChange = (event)=>{
    setNewCourse(event.target.value)
  }




// add course list
    const addCourse =() =>{
      // we create a new paramether for the compate 2 word that the are same

    const course ={
      // too find the andiss  of array
      id:coursList.length === 0? 1: coursList[coursList.length -1].id +1 ,
      courseName: newCourse,
      isCompleted : false
  }
    const newCourseList = [...coursList, course]
    setCourseList(newCourseList)
  }
  // we are delte the course in here
  const deleteCourse =(courseId) =>{
    setCourseList(coursList.filter((course)=> courseId !== course.id))
  }
   const compeletCourse =(courseId)=>{
    const newCourseList = coursList.map((course)=>{
      if(course.id === courseId) return{...course, isCompleted:true}
      else  return course
    })
   }
  return(
    <div className='App'>
      <div className=' add-course'>
        <input type='text' onChange={handelChange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      <div className='list'>
        {coursList.map((course, index)=>{
          return (
           <Course key={index} course={course}
            deleteCourse={deleteCourse}
            compeletCourse={compeletCourse}/>
          )
        })}
      </div>

    </div>
  )

}
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



