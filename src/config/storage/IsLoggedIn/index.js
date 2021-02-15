import AsyncStorage from "@react-native-async-storage/async-storage"

const IsLoggedIn = async() => {
    try {
        const IS_LOGGED_IN = await AsyncStorage.getItem('IS_LOGGED_IN')
        if(IS_LOGGED_IN != null && IS_LOGGED_IN == 'y')
            return true
        else
            return false
    } catch (error) {
        alert(error)
        return false
    }
}

export default IsLoggedIn