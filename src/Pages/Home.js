


import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
  const { data, isLoading, isError, error,refetch } = useQuery({
    queryKey: ['cat'],
    queryFn: () =>
      Axios.get('https://catfact.ninja/fact').then((res) => res.data),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error! Error: {error.message}</h2>;
  }

  return (
    <div>
      welcome to Home
      <h1>{data?.fact}</h1>
      <button onClick={refetch} >update</button>
    </div>
  );
};



























// import { useQuery } from "@tanstack/react-query"
// import { Axios } from "axios"
// export const Home = ()=>{
// const{data, isLoading, isError, error} = useQuery(["cat"], ()=>{
//    return  Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
//     })

//     if(isLoading)
//         return<h2>Loading..</h2>
//     if(isError) 
//         return <h2>there was an error! : error: {error.message}</h2>
//     return 
//     <div> Home
//     <h1>{data?.fact}</h1>
//     </div>

// }