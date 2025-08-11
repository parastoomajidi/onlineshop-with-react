import { useForm } from "react-hook-form"
import * as yup from 'yup'
export const SubmitForm=()=>{
    const schemea = yup.object().shape({
        name:  yup.string().required(),
        email: yup.string().email().required(),
        age:   yup.number().positive().min(18).max(50).required(),
        password : yup.string().min(4).max(15).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password")]).required()
    })


    const {register, handleSubmit} = useForm()



    const onFormSubmit=(data)=>{
        console.log("the form is submited")
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onFormSubmit)}> 
            <input type="text" placeholder="name..." {...register("name")}/>
            <input type="text" placeholder="email"{...register("email")}/>
            <input type="number" placeholder="age"{...register("age")}/>
            <input type="password" placeholder="password"{...register("password")}/>
            <input type="password" placeholder="confirm password"{...register("confrm password")}/>
            <input type="submit"/>
        </form>
    )
        
}