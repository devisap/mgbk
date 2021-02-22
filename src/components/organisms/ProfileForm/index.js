import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import BasicField from '../../molecules/forms/BasicField'
import UploadField from '../../molecules/forms/UploadField'
import SelectField from '../../molecules/forms/SelectField'
import axios from 'axios'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../../molecules/Loader'
import { useDispatch, useSelector } from 'react-redux'


const ProfileForm = (props) => {
    const [listSchool, setListSchool] = useState([])
    const [dataProfile, setDataProfile] = useState({})
    const [isFetched, setIsFetched] = useState(false)
    const [isLoader, setIsLoader] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        console.log(dataProfile)
    }, [dataProfile])

    onChangeValue = (inpuType, value) => {
        setDataProfile({
            ...dataProfile,
            [inpuType]: value
        })
    }

    onChangeNamaLengkap = val => {
        let newDatas = {...dataProfile}
        newDatas.nama_lengkap = val
        setDataProfile(newDatas)
    }
    onChangeAlamatSekolah = val => {
        let newDatas = {...dataProfile}
        newDatas.alamat_sekolah = val
        setDataProfile(newDatas)
    }
    onChangeNamaKepalaSekolah = val => {
        let newDatas = {...dataProfile}
        newDatas.nama_kepala_sekolah = val
        setDataProfile(newDatas)
    }
    onChangeTambahanInformasi = val => {
        let newDatas = {...dataProfile}
        newDatas.tambahan_informasi = val
        setDataProfile(newDatas)
    }
    onChangeAsalSekolah = val => {
        let newDatas = {...dataProfile}
        newDatas.id_sekolah = val
        setDataProfile(newDatas)
    }
    onChangeFotoProfile = val => {
        let newDatas = {...dataProfile}
        newDatas.foto_profil = val
        setDataProfile(newDatas)
    }
    onChangeLogoSekolah = val => {
        let newDatas = {...dataProfile}
        newDatas.logo_sekolah = val
        setDataProfile(newDatas)
    }

    const getProfile = async() => {
        try {
            const ID_USER = await AsyncStorage.getItem('ID_USER')
            const DATA_USER = await AsyncStorage.getItem('DATA_USER')
            const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
            await getListSchool()
            if(IS_PROFILE_VERIFIED == 't'){
                const dataProfile = JSON.parse(DATA_USER)
                setDataProfile({
                    id_user: ID_USER,
                    nama_lengkap: dataProfile.nama_lengkap,
                    foto_profil: {
                        uri: `https://api-mgbk.bgskr-project.my.id/upload/fotoProfil/${dataProfile.foto_profil}`,
                        name: dataProfile.foto_profil
                    },
                    id_sekolah: dataProfile.id_sekolah,
                    logo_sekolah: {
                        uri: `https://api-mgbk.bgskr-project.my.id/upload/logoSekolah/${dataProfile.logo_sekolah}`,
                        name: dataProfile.logo_sekolah
                    },
                    alamat_sekolah: dataProfile.alamat_sekolah,
                    nama_kepala_sekolah: dataProfile.nama_kepala_sekolah,
                    tambahan_informasi: dataProfile.tambahan_informasi
                })
                setIsFetched(true)
            }else{
                setDataProfile({
                    id_user: ID_USER,
                    nama_lengkap: '',
                    foto_profil: {uri: '', name: ''},
                    id_sekolah: '',
                    logo_sekolah: {uri: '', name: ''},
                    alamat_sekolah: '',
                    nama_kepala_sekolah: '',
                    tambahan_informasi: ''
                })
                setIsFetched(true)
            }
        } catch (error) {
            alert(error)
        }
    }

    const getListSchool = async() => {
        await axios.get('https://api-mgbk.bgskr-project.my.id/school')
            .then(res => {
                const list = res.data.data.map(obj => ({label: obj.nama_sekolah, value: obj.id_sekolah}))
                setListSchool(list)
                console.log(list)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const postData = async() => {
        setIsLoader(true)
        let formData = new FormData()
        const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
        if(IS_PROFILE_VERIFIED == 't'){
            const DATA_USER = await AsyncStorage.getItem('DATA_USER')
            const dataUser = JSON.parse(DATA_USER)
            
            if(dataProfile.foto_profil.name != dataUser.foto_profil){
                formData.append('foto_profil', dataProfile.foto_profil)
            }
            
            if(dataProfile.logo_sekolah.name != dataUser.logo_sekolah){
                formData.append('logo_sekolah', dataProfile.logo_sekolah)
            }
    
            formData.append('id_user', dataProfile.id_user)
            formData.append('nama_lengkap', dataProfile.nama_lengkap)
            formData.append('id_sekolah', dataProfile.id_sekolah)
            formData.append('alamat_sekolah', dataProfile.alamat_sekolah)
            formData.append('nama_kepala_sekolah', dataProfile.nama_kepala_sekolah)
            formData.append('tambahan_informasi', dataProfile.tambahan_informasi)
        }else{
            formData.append('id_user', dataProfile.id_user)
            formData.append('nama_lengkap', dataProfile.nama_lengkap)
            formData.append('foto_profil', dataProfile.foto_profil)
            formData.append('id_sekolah', dataProfile.id_sekolah)
            formData.append('logo_sekolah', dataProfile.logo_sekolah)
            formData.append('alamat_sekolah', dataProfile.alamat_sekolah)
            formData.append('nama_kepala_sekolah', dataProfile.nama_kepala_sekolah)
            formData.append('tambahan_informasi', dataProfile.tambahan_informasi)
        }
        
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/user/profile',
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
        .then(res => {
            if(res.data.status){
                setProfile()
                dispatch({type: "SET_ISPROFILEVERIFIED", value: res.data.status})
                props.navigation.navigate('Home')
            }else{
                console.log(res.data)
            }
        })
        .catch(err => {
            alert(err)
            console.log(err)
        })
        .finally(status => {
            setIsLoader(false)
        })
    }

    const setProfile = async() => {
        const ID_USER = await AsyncStorage.getItem('ID_USER')
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/user/profile/'+ID_USER,
            method: 'get'
        })
        .then(async(res) => {
            if(res.data.status){
                await AsyncStorage.setItem('IS_PROFILE_VERIFIED', 't')
                await AsyncStorage.setItem('DATA_USER', JSON.stringify(res.data.data))
                dispatch({type: 'SET_PROFILES', value: res.data.data})
            }else{
                await AsyncStorage.setItem('IS_PROFILE_VERIFIED', 'f')
            }
        })
    }
    
    return (
        <View>
            {
                isFetched == false?
                <SkeletonPlaceholder>
                    <View>
                        <View style={{width: 125, height: 25}} />
                        <View style={{marginTop:8, width:'100%', height: 35}} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <View style={{width: 125, height: 25}} />
                        <View style={{marginVertical: 8, flexDirection: 'column', alignItems: 'center'}}>
                            <View style={{width: 128, height: 128, borderRadius: 100}} />
                        </View>
                        <View style={{marginTop:8, width:'100%', height: 35}} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <View style={{width: 125, height: 25}} />
                        <View style={{marginTop:8, width:'100%', height: 35}} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <View style={{width: 125, height: 25}} />
                        <View style={{marginVertical: 8, flexDirection: 'column', alignItems: 'center'}}>
                            <View style={{width: 128, height: 128, borderRadius: 100}} />
                        </View>
                        <View style={{marginTop:8, width:'100%', height: 35}} />
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
                        isLoader == true? <Loader /> : void 0
                    }
                    <View>
                        <BasicField value={dataProfile.nama_lengkap} onChangeValue={onChangeValue} inputType={'nama_lengkap'} label={"Nama Lengkap"}  placeholder={"Nama Lengkap"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <UploadField label={"Foto Profil"} onChangeValue={onChangeValue} inputType={'foto_profil'} source={dataProfile.foto_profil.uri} fileName={dataProfile.foto_profil.name} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <SelectField  items={listSchool} value={dataProfile.id_sekolah} onChangeValue={onChangeValue}  inputType={"id_sekolah"} label={"Asal Sekolah"}/>
                    </View>
                    <View style={{marginTop: 24}}>
                        <UploadField label={"Logo Sekolah"} source={dataProfile.logo_sekolah.uri} onChangeValue={onChangeValue} inputType={'logo_sekolah'} fileName={dataProfile.logo_sekolah.name} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={dataProfile.alamat_sekolah} onChangeValue={onChangeValue} inputType={'alamat_sekolah'} label={"Alamat Sekolah"} placeholder={"Alamat Sekolah"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={dataProfile.nama_kepala_sekolah} onChangeValue={onChangeValue} inputType={'nama_kepala_sekolah'} label={"Nama Kepala Sekolah"} placeholder={"Nama Kepala Sekolah"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={dataProfile.tambahan_informasi} label={"Tambahan Informasi"} onChangeValue={onChangeValue} inputType={'tambahan_informasi'} placeholder={"Tambahan Informasi"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <ButtonSuccess text={"Simpan"} onPress={() => postData()} />
                    </View>
                </View>
            }
        </View>
    )
}

export default ProfileForm