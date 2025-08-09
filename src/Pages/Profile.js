
import React  from "react"
import { useParams } from "react-router-dom"

export const Profile =()=>{
   const {name} = useParams()
   return<div>test profile {name}</div>
}