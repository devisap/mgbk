const initialState = {
    isProfileVerified: false
}

const reducer = (state = initialState, action) => {
    if(action.type == "SET_ISPROFILEVERIFIED"){
        return {
            isProfileVerified: action.inputValue
        }
    }
    return state
}

export default reducer