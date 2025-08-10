import { useForm } from "react-hook-form"
export const SubmitForm=()=>{
    const {register, handleSubmit} = useForm()
    const onFormSubmit=(data)=>{
        console.log("the form is submited")
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