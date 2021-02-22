import { combineReducers } from "redux"

const initialProfileVerifiedState = {
    isProfileVerified: false
}

const initialProfilesState = {
    datas: {}
}

const ProfileVerifiedReducer = (state = initialProfileVerifiedState, action) => {
    if(action.type == "SET_ISPROFILEVERIFIED"){
        return {
            isProfileVerified: action.value
        }
    }
    return state
}

const ProfilesReducer = (state = initialProfilesState, action) => {
    if(action.type == "SET_PROFILES"){
        return {
            datas: action.value
        }
    }
    return state
}

const reducer = combineReducers({
    ProfileVerifiedReducer,
    ProfilesReducer
})

export default reducer