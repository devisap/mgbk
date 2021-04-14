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

const CreateReportLayout = (props) => {
    const [listActivity, setListActivity] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isFetched, setIsFetched] = useState(false)
    const [reportData, setReportData] = useState({
        tanggal: new Date(),
        kegiatan: '',
        detail: '',
        dokumen: {}
    })
    const [docFilename, setDocFilename] = useState('')
    
    useEffect(() => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/activity',
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
        if(inputType == 'dokumen'){
            setDocFilename(value[0].name)
        }
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
        if(reportData.dokumen.length > 2){
            alert('Data upload tidak boleh dari 2 dokumen !')
            return true;
        }
        
        const fileSizes = reportData.dokumen.map(item => item.size)
        const maxSize   = Math.max(...fileSizes)
        console.log(maxSize)
        if(maxSize > 2000000){
            alert('Data upload tidak boleh lebih dari 2 Mb !')
            return true;
        }

        const DATA_USER = await AsyncStorage.getItem('DATA_USER')
        const dataUser = JSON.parse(DATA_USER)
        
        const formData = new FormData()
        formData.append('id_user', await AsyncStorage.getItem('ID_USER'))
        formData.append('id_sekolah', dataUser.id_sekolah)
        formData.append('id_kegiatan', reportData.kegiatan)
        formData.append('tgl_transaksi', `${reportData.tanggal.getFullYear()}-${reportData.tanggal.getMonth()+1}-${reportData.tanggal.getDate()}`)
        formData.append('detail', reportData.detail)

        let x = 1
        for(const obj of reportData.dokumen){
            formData.append('upload_doc_'+x, obj)
            x++
        }
        setIsLoading(true)
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/report',
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: formData
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
                                    <View style={{marginTop:8, width:'100%', height: 45}} />
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
                                    <DocumentField
                                        fileName={docFilename} 
                                        // fileName={''} 
                                        onChangeValue={onChangeValue} 
                                        inputType={"dokumen"} 
                                        label={"Dokumen Kegiatan"} />
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