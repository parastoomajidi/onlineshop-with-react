export const initialState={
    loading :false,
    fact:"",
    error:false
}

export const factReducer =(stat, action)=>{
    switch(action.type){
        case "fetch_start":
            return {loading:true,
                fact:"",
                error:false
            };
        case "fetch_success":
            return{loading:true,
                fact: action.data,
                error:false
            };
        case "fetch_error":
            return{loading:false,
                fact:"",
                error:true
            };
        default:
            return stat;
    }
}