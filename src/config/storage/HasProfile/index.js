import AsyncStorage from "@react-native-async-storage/async-storage"

const HasProfile = async() => {
    try {
        const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
        if(IS_PROFILE_VERIFIED != null){
            return true
        }else{
            return false
        }

    } catch (error) {
        alert(error)
        return false
    }
}

export default HasProfile