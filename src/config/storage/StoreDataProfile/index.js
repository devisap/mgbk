import AsyncStorage from "@react-native-async-storage/async-storage"

const StoreDataProfile = async(param) => {
    try {
        await AsyncStorage.setItem('DATA_USER', JSON.stringify(param))
    } catch (error) {
        alert(error)
    }
}

export default StoreDataProfile