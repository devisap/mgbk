import AsyncStorage from "@react-native-async-storage/async-storage"

const StoreDataBasic = async(param) => {
    try {
        await AsyncStorage.setItem('ID_USER', ""+param.id_user)
        await AsyncStorage.setItem('EMAIL', ""+param.email)
        await AsyncStorage.setItem('IS_LOGGED_IN', 'y')
    } catch (error) {
        alert(error)
    }
}

export default StoreDataBasic