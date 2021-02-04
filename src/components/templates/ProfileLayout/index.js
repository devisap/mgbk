import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import CircleImage from '../../atoms/images/CircleImage'
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import InfoProfileCard from '../../organisms/InfoProfileCard'
import Navbar from '../Navbar'

const ProfileLayout = (props) => {
    const [isFetched, setIsFetched] = useState(false)
    const [fotoProfil , setFotoProfil] = useState('')
    const [namaLengkap, setNamaLengkap] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        getDataUser()
    }, [])

    const getDataUser = async() => {
        const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
        const DATA_USER = await AsyncStorage.getItem('DATA_USER')
        const EMAIL = await AsyncStorage.getItem('EMAIL')
        let dataUser = JSON.parse(DATA_USER)
        if(IS_PROFILE_VERIFIED == 't'){
            setFotoProfil(`https://api-mgbk.bgskr-project.my.id/upload/user/fotoProfil/${dataUser.foto_profil}`)
            setNamaLengkap(dataUser.nama_lengkap)
            setEmail(EMAIL)
            setIsFetched(true)
        }else{
            setIsFetched(true)
        }
    }

    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <ScrollView>
                <View style={{paddingHorizontal: 32, marginTop: 24}}>
                    {
                        isFetched == false?
                        <SkeletonPlaceholder>
                            <View style={{flexDirection: "column", alignItems: 'center'}}>
                                <View style={{width: 128, height: 128, borderRadius: 100}} />
                            </View>
                            <View style={{marginTop: 24}}>
                                <View style={{width: '100%', height: 140, borderRadius: 8, marginTop: 5}} />
                            </View>
                            <View style={{marginVertical: 24}}>
                                <View style={{width: '100%', height: 50, borderRadius: 8}} />
                            </View>
                        </SkeletonPlaceholder>
                        :
                        <View>
                            <View style={{flexDirection: "column", alignItems: 'center'}}>
                                <CircleImage source={fotoProfil} />
                            </View>
                            <View style={{marginTop: 24}}>
                                <InfoProfileCard namaLengkap={namaLengkap} email={email} />
                            </View>
                            <View style={{marginVertical: 24}}>
                                <ButtonSubmit onPress={props.onPressSettingProfile} title={"Perbarui Profil"} />
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileLayout