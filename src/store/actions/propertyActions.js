export const createProperty =(property)=>{
    return(dispatch, getState) => {
        //make async call to database (pausing the dispatch)
        dispatch({type:'CREATE_PROPERTY', property});
    }
};
