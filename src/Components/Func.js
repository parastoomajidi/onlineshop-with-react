import { Axios } from "axios";
import react from "react";
import { useReducer, useState } from "react";
import { factReducer, initialState } from "./FactRedeucer";
import { type } from "@testing-library/user-event/dist/type";
import { data } from "react-router-dom";

export const Fact =()=>{


    const[stat, dispatch] = useReducer(factReducer, initialState)

    const HandelFetch=()=>{
        dispatch({type:"fetch_start"})
        Axios.get("https://catfact.ninja/fact")
        .then((res)=>{
            dispatch({type: "fetch_success", data:res.data.fact})
            console.log(res)
        }).catch((error)=>{
            dispatch({type:"fetch_error"})
            console.log(error)
        })
    }

    return(
        <div>
            <button onClick={HandelFetch}>
                {state.loading ? "is laoding.." : "fetch Cat Fact"}
            </button>
            {state.error && (<p>Error, some things went wrong</p>)}

            <h1>{state.Fact}</h1>
        </div>
    )

}