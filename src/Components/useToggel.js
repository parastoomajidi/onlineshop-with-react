import { useState } from "react"

export const useToggeleBtn =(intialValue= false)=>{
    const [state, setState] = useState(intialValue)

    const toggle=()=>{
        setState((prev)=> !prev)
    }
    return[state, toggle]

}