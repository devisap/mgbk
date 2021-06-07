import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import DateField from '../../molecules/forms/DateField'
import SelectField from '../../molecules/forms/SelectField'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import TextAreaField from '../../molecules/forms/TextAreaField'
import axios from 'axios'
import DocumentField from '../../molecules/forms/DocumentField'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../../molecules/Loader'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import BasicField from '../../molecules/forms/BasicField'

const CreateReportLayout = (props) => {
    const [listActivity, setListActivity] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isFetched, setIsFetched] = useState(false)
    const [reportData, setReportData] = useState({
        tanggal: new Date(),
        kegiatan: '',
        detail: '',
        upload_doc1: '',
        upload_doc2: '',
    })
    
    useEffect(() => {
        axios({
            url: 'https://api.mgbkkotamalang.my.id/activity',
            method: 'get'
        })
        .then(async res => {
            const list = res.data.data.map(obj => ({label: obj.kegiatan, value: obj.id_kegiatan}))
            setListActivity(list)
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsFetched(true)
        })
    }, [])

    useEffect(() => {
        // console.log(reportData)
    }, [reportData])

    const onChangeValue = (inputType, value) => {
        setReportData({
            ...reportData,
            [inputType]: value
        })
    }

    const confirmationAlert = () => {
        Alert.alert(
            "Konfirmasi",
            "Apakah anda yakin untuk membuat laporan ?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Canceled')
                },
                {
                    text: 'Ok',
                    onPress: () => postData(),
                    style: 'default'
                }
            ]
        )
    }

    const postData = async() => {

        const DATA_USER = await AsyncStorage.getItem('DATA_USER')
        const dataUser = JSON.parse(DATA_USER)

        setIsLoading(true)
        axios({
            url: 'https://api.mgbkkotamalang.my.id/report',
            method: 'post',
            data: {
                id_user: dataUser.id_user,
                id_sekolah: dataUser.id_sekolah,
                id_kegiatan: reportData.kegiatan,
                tgl_transaksi: `${reportData.tanggal.getFullYear()}-${reportData.tanggal.getMonth()+1}-${reportData.tanggal.getDate()}`,
                detail: reportData.detail,
                upload_doc_1: reportData.upload_doc1,
                upload_doc_2: reportData.upload_doc2
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
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 32, marginBottom: 24}}>
                        <View style={{marginTop: 39}}>
                            <Heading2 text={"Buat Laporan"} />
                        </View>
                        {
                            isFetched == false?
                            <SkeletonPlaceholder>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: 125, height: 25}} />
                                    <View style={{marginTop:8, width:'100%', height: 35}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: 125, height: 25}} />
                                    <View style={{marginTop:8, width:'100%', height: 35}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: 125, height: 25}} />
                                    <View style={{marginTop:8, width:'100%', height: 185}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: 125, height: 25}} />
                                    <View style={{marginTop:8, width:'100%', height: 35}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: 125, height: 25}} />
                                    <View style={{marginTop:8, width:'100%', height: 35}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{marginTop:8, width:'100%', height: 35}} />
                                </View>
                            </SkeletonPlaceholder>
                            :
                            <View>
                                {
                                    isLoading == true&&
                                    <Loader />
                                }
                                <View style={{marginTop: 24}}>
                                    <DateField onChangeValue={onChangeValue} inputType={"tanggal"}  label={"Tanggal"} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <SelectField value={reportData.kegiatan} items={listActivity} onChangeValue={onChangeValue} inputType={"kegiatan"} label={"Kegiatan"} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <TextAreaField value={reportData.detail} onChangeValue={onChangeValue} inputType={"detail"} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <BasicField label={"Link Dokumen 1"} onChangeValue={onChangeValue} inputType={"upload_doc1"}/>
                                </View>
                                <View style={{marginTop: 24}}>
                                    <BasicField label={"Link Dokumen 2"} onChangeValue={onChangeValue} inputType={"upload_doc2"}/>
                                </View>
                                <View style={{marginTop: 24}}>
                                    <ButtonSuccess text={"Simpan"} onPress={() => confirmationAlert()} />
                                </View>
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
            
    )
}

export default CreateReportLayout