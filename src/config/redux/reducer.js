const initialState = {
    isProfileVerified: false
}

const reducer = (state = initialState, action) => {
    if(action.type == "SET_ISPROFILEVERIFIED"){
        return {
            isProfileVerified: action.value
        }
    }
    return state
}

export default reducer