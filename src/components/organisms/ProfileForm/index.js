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

const ProfileForm = (props) => {
    const [listSchool, setListSchool] = useState([])
    const [dataProfile, setDataProfile] = useState({})
    const [isFetched, setIsFetched] = useState(false)

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        console.log(dataProfile)
    }, [dataProfile])

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

    const getProfile = async() => {
        try {
            const DATA_USER = await AsyncStorage.getItem('DATA_USER')
            const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
            await getListSchool()
            if(IS_PROFILE_VERIFIED == 't'){
                const dataProfile = JSON.parse(DATA_USER)
                setDataProfile({
                    nama_lengkap: dataProfile.nama_lengkap,
                    foto_profil: dataProfile.foto_profil,
                    id_sekolah: dataProfile.id_sekolah,
                    logo_sekolah: dataProfile.logo_sekolah,
                    alamat_sekolah: dataProfile.alamat_sekolah,
                    nama_kepala_sekolah: dataProfile.nama_kepala_sekolah,
                    tambahan_informasi: dataProfile.tambahan_informasi
                })
                setIsFetched(true)
            }else{
                setDataProfile({
                    nama_lengkap: '',
                    foto_profil: '',
                    id_sekolah: '',
                    logo_sekolah: '',
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
                console.log(res.data.data)
                console.log(list)
            })
            .catch(err => {
                console.log(err)
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
                    <View>
                        <BasicField value={dataProfile.nama_lengkap} onChangeValue={onChangeNamaLengkap} label={"Nama Lengkap"} placeholder={"Nama Lengkap"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        {
                            dataProfile.foto_profil != ''?
                            <UploadField label={"Foto Profil"} source={`https://api-mgbk.bgskr-project.my.id/upload/user/fotoProfil/${dataProfile.foto_profil}`} fileName={dataProfile.foto_profil} />
                            :
                            <UploadField label={"Foto Profil"} fileName={dataProfile.foto_profil} />
                        }
                    </View>
                    <View style={{marginTop: 24}}>
                        <SelectField items={listSchool} onChangeValue={onChangeAsalSekolah} value={dataProfile.id_sekolah} label={"Asal Sekolah"}/>
                    </View>
                    <View style={{marginTop: 24}}>
                        {
                            dataProfile.logo_sekolah != ''?
                            <UploadField label={"Logo Sekolah"} source={`https://api-mgbk.bgskr-project.my.id/upload/user/logoSekolah/${dataProfile.logo_sekolah}`} fileName={dataProfile.logo_sekolah} />
                            :
                            <UploadField label={"Logo Sekolah"} fileName={dataProfile.logo_sekolah} />
                        }
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={dataProfile.alamat_sekolah} onChangeValue={onChangeAlamatSekolah} label={"Alamat Sekolah"} placeholder={"Alamat Sekolah"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={dataProfile.nama_kepala_sekolah} onChangeValue={onChangeNamaKepalaSekolah} label={"Nama Kepala Sekolah"} placeholder={"Nama Kepala Sekolah"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={dataProfile.tambahan_informasi} label={"Tambahan Informasi"} onChangeValue={onChangeTambahanInformasi} placeholder={"Tambahan Informasi"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <ButtonSuccess text={"Simpan"} />
                    </View>
                </View>
            }
        </View>
    )
}

export default ProfileForm