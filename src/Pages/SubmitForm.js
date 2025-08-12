import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolver/yup"

export const SubmitForm=()=>{
    const schemea = yup.object().shape({
        name:  yup.string().required("requeired field!"),
        email: yup.string().email("the email format is wrong").required("requeired field!"),
        age:   yup.number().positive().min(18).max(50).required(),
        password : yup.string().min(4).max(15).required(),   
        confirmPassword : yup.string().oneOf([yup.ref("password")],"password not match!").required()
    })
    // regular expresstion


    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schemea)})



    const onFormSubmit=(data)=>{
        console.log("the form is submited")
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onFormSubmit)}> 
            <input type="text" placeholder="name..." {...register("name")}/>
            {errors.name &&(<p>errors.name? .message</p>)}
            
            <input type="text" placeholder="email"{...register("email")}/>
            {errors.email &&(<p>errors.name? .message</p>)}

            <input type="number" placeholder="age"{...register("age")}/>
            {errors.age &&(<p>errors.name? .message</p>)}

            <input type="password" placeholder="password"{...register("password")}/>
            {errors.password &&(<p>errors.name? .message</p>)} 

            <input type="password" placeholder="confirm password"{...register("confrm password")}/>
            {errors.password &&(<p>errors.name? .message</p>)}
            <input type="submit"/>
        </form>
    )
        
}