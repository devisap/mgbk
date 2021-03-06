import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PermissionsAndroid, ScrollView, View } from 'react-native'
import MenuHomeCard from '../../organisms/MenuHomeCard'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HasProfile from '../../../config/storage/HasProfile'
import GetDataBasic from '../../../config/storage/GetDataBasic';
import {getDataProfileApi} from '../../../config/api/user'
import StoreDataProfile from '../../../config/storage/StoreDataProfile';
import { useDispatch, useSelector } from 'react-redux';

const HomeLayout = (props) => {
    const [isProfileVerified, setIsProfileVerified] = useState('f')
    const [isFetched, setIsFetched] = useState(false)
    const globalState = useSelector(state => state.ProfileVerifiedReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(globalState)
        hasProfile()
        requestPermissions()
    }, [])

    const getDataProfile = (idUser) => {
        axios({
            url: 'https://api.mgbkkotamalang.my.id/user/profile/'+idUser,
            method: 'get'
        })
        .then(async(res) => {
            if(res.data.status){
                await AsyncStorage.setItem('IS_PROFILE_VERIFIED', 't')
                await AsyncStorage.setItem('DATA_USER', JSON.stringify(res.data.data))
                dispatch({type: "SET_ISPROFILEVERIFIED", value: true})
                dispatch({type: 'SET_PROFILES', value: res.data.data})
            }else{
                await AsyncStorage.setItem('IS_PROFILE_VERIFIED', 'f')
                dispatch({type: "SET_ISPROFILEVERIFIED", value: false})
            }
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsFetched(true)
        })
    }

    const hasProfile = async() => {
        try {
            const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
            if(IS_PROFILE_VERIFIED != null){
                const dataUser = JSON.parse(await AsyncStorage.getItem("DATA_USER"))
                if(IS_PROFILE_VERIFIED == 't')
                    dispatch({type: "SET_ISPROFILEVERIFIED", value: true})
                else
                    dispatch({type: "SET_ISPROFILEVERIFIED", value: false})

                if(dataUser != null){
                    dispatch({type: 'SET_PROFILES', value: dataUser})
                }
                setIsFetched(true)
            }else{
                const ID_USER = await AsyncStorage.getItem('ID_USER')
                getDataProfile(ID_USER)
            }

        } catch (error) {
            
        }
    }

    const requestPermissions = async () => {
        try {
          const granted = await PermissionsAndroid.requestMultiple(['android.permission.CAMERA', 'android.permission.WRITE_EXTERNAL_STORAGE']);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the file manager");
          } else {
            console.log("File Manager denied");
          }
        } catch (err) {
          console.warn(err);
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
                                globalState.isProfileVerified == false&&
                                    <View style={{marginTop: 24, marginBottom: 12}}>
                                        <MenuHomeCard onPress={props.onPressLengkapiProfil} title={"Lengkapi Profil"} content={"Lengkapi profil sebelum mengirimkan laporan"}/>
                                    </View>
                            }
                            <View style={{marginVertical: 12}}>
                                <MenuHomeCard onPress={props.onPressBuatLaporan} title={"Buat Laporan"} content={"Buat laporan kegiatan untuk dikirimkan"}/>
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