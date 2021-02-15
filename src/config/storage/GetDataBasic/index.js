import AsyncStorage from "@react-native-async-storage/async-storage"

const GetDataBasic = async() => {
    try {
        return {
            ID_USER: await AsyncStorage.getItem('ID_USER'),
            EMAIL: await AsyncStorage.getItem('EMAIL')
        }
    } catch (error) {
        alert(error)
    }
}

export default GetDataBasic