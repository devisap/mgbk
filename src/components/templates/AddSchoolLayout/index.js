import axios from 'axios'
import React, { useState } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import Heading2 from '../../atoms/texts/Heading2'
import BasicField from '../../molecules/forms/BasicField'
import Loader from '../../molecules/Loader'

const AddSchoolLayout = (props) => {
    const [dataSekolah, setDataSekolah] = useState({sekolah: ''})
    const [isLoading, setIsLoading] = useState(false)

    const onChangeValue = (inputType, value) => {
        setDataSekolah({
            ...dataSekolah,
            [inputType]: value
        })
    }

    const postData = () => {
        setIsLoading(true)
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/school',
            method: 'post',
            data: {
                nama_sekolah: dataSekolah.sekolah
            }
        })
        .then(res => {
            if(res.data.status == true){
                Alert.alert(
                    "Info",
                    res.data.message,
                    [
                        { text: "OK", onPress: () =>  props.navigation.replace('Home')}
                    ],
                    { cancelable: false }
                );
            }else{
                alert(res.data.message)
            }
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 32}}>
                        {
                            isLoading == true? <Loader /> : void 0
                        }
                        <View style={{marginTop: 24}}>
                            <Heading2 text={"Tambahkan Sekolah"} />
                        </View>
                        <View style={{marginTop: 32}}>
                            <BasicField onChangeValue={onChangeValue} inputType={'sekolah'} label={"Nama Sekolah"} placeholder={"Nama Sekolah"} />
                        </View>
                        <View style={{marginTop: 24}}>
                            <ButtonSuccess text={"Simpan"} onPress={() => postData()} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AddSchoolLayout