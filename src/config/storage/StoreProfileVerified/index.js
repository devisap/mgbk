import AsyncStorage from "@react-native-async-storage/async-storage"
import StoreDataProfile from "../StoreDataProfile"

const StoreProfileVerified = async(param) => {
    try {
        await AsyncStorage.setItem('IS_PROFILE_VERIFIED', param.status)
    } catch (error) {
        alert(error)
    }
}

export default StoreProfileVerified