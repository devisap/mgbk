import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ScrollView, View } from 'react-native'
import MenuHomeCard from '../../organisms/MenuHomeCard'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HasProfile from '../../../config/storage/HasProfile'
import GetDataBasic from '../../../config/storage/GetDataBasic';
import {getDataProfileApi} from '../../../config/api/user'
import StoreDataProfile from '../../../config/storage/StoreDataProfile';

const HomeLayout = (props) => {
    const [isProfileVerified, setIsProfileVerified] = useState('f')
    const [isFetched, setIsFetched] = useState(false)

    useEffect(() => {
        hasProfile()
    }, [])

    const getDataProfile = (idUser) => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/user/profile/'+idUser,
            method: 'get'
        })
        .then(async(res) => {
            if(res.data.status){
                setIsProfileVerified('t')
                await AsyncStorage.setItem('IS_PROFILE_VERIFIED', 't')
                await AsyncStorage.setItem('DATA_USER', JSON.stringify(res.data.data))
            }else{
                setIsProfileVerified('f')
                await AsyncStorage.setItem('IS_PROFILE_VERIFIED', 'f')
            }
            setIsFetched(true)
        })
    }

    const hasProfile = async() => {
        try {
            const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
            const ID_USER = await AsyncStorage.getItem('ID_USER')
            if(IS_PROFILE_VERIFIED != null){
                setIsProfileVerified(IS_PROFILE_VERIFIED)
                setIsFetched(true)
            }else{
                getDataProfile(ID_USER)
            }

        } catch (error) {
            
        }
    }

    return (
        <View>
            <ScrollView>
                <View style={{flex: 1, paddingHorizontal: 13}}>
                    {
                        isFetched == false?
                        <View>
                            <SkeletonPlaceholder>
                                <View style={{marginTop: 24, marginBottom: 12}}>
                                    <View style={{width: '100%', height: 180, borderRadius: 4}}></View>
                                </View>
                                <View style={{marginVertical: 12}}>
                                    <View style={{width: '100%', height: 180, borderRadius: 4}}></View>
                                </View>
                                <View style={{marginVertical: 12}}>
                                    <View style={{width: '100%', height: 180, borderRadius: 4}}></View>
                                </View>
                            </SkeletonPlaceholder>
                        </View>
                        :
                        <View>
                            {
                                isProfileVerified == 'f'&&
                                    <View style={{marginTop: 24, marginBottom: 12}}>
                                        <MenuHomeCard onPress={props.onPressLengkapiProfil} title={"Lengkapi Profil"} content={"Lengkapi profil sebelum mengirimkan laporan"}/>
                                    </View>
                            }
                            <View style={{marginVertical: 12}}>
                                <MenuHomeCard onPress={props.onPressBuatLaporan} title={"Buat Laproan"} content={"Buat laporan kegiatan untuk dikirimkan"}/>
                            </View>
                            <View style={{marginVertical: 12}}>
                                <MenuHomeCard onPress={props.onPressCetakLaporan} title={"Cetak Laporan"} content={"Cetak laporan kegiatan"}/>
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeLayout