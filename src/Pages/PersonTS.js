
import PropTypes from "prop-types";

export const Person=(props)=>{
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Email:{props.email}</h1>
            {props.courses.map((courseq)=>(
                <h2 key={courseq}>{courseq}</h2>
            ))}
        </div>
    )
}

Person.propTypes={
    name:PropTypes.string,
    email:PropTypes.string,
    courses : PropTypes.arrayOf(PropTypes.string)

}