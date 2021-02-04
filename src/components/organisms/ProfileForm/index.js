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
    const [namaValue, setNamaValue] = useState('')
    const [fotoProfilValue, setFotoProfilValue] = useState('')
    const [asalSekolahValue, setAsalSekolahValue] = useState('')
    const [logoSekolahValue, setLogoSekolahValue] = useState('')
    const [alamatSekolahValue, setAlamatSekolah] = useState('')
    const [namaKepalaSekolahValue, setNamaKepalaSekolahValue] = useState('')
    const [tambahanInformasiValue, setTambahanInformasiValue] = useState('')
    const [isFetched, setIsFetched] = useState(false)

    useEffect(() => {
        
        // axios({
        //     url: 'https://api-mgbk.bgskr-project.my.id/user/profile/'+7,
        //     method: 'get'
        // })
        // .then((res) => {
        //     if(res.data.status){
        //         setNamaValue(res.data.data.nama_lengkap)
        //         setAsalSekolahValue(res.data.data.id_sekolah)
        //         setAlamatSekolah(res.data.data.alamat_sekolah)
        //         setNamaKepalaSekolahValue(res.data.data.nama_kepala_sekolah)
        //         setTambahanInformasiValue(res.data.data.tambahan_informasi)
        //         setIsFetched(true)
        //     }else{
        //         setIsFetched(true)
        //     }
        // })
        getProfile()
    }, [])

    const onChangeNamaValue = (value) => setNamaValue(value)
    const onChangeAsalSekolahValue = (value) => setAsalSekolahValue(value)
    const onChangeAlamatSekolahValue = (value) => setAlamatSekolah(value)
    const onChangeNamaKepalaSekolahValue = (value) => setNamaKepalaSekolahValue(value)
    const onChangeTambahanInformasiValue = (value) => setTambahanInformasiValue(value)
    
    const getDataProfile = async() => {
        try {
            const IS_PROFILE_VERIFIED = await AsyncStorage.getItem('IS_PROFILE_VERIFIED')
            if(IS_PROFILE_VERIFIED != null && IS_PROFILE_VERIFIED == 't'){
                const DATA_USER = JSON.parse(await AsyncStorage.getItem('DATA_USER'))
                setNamaValue(DATA_USER.nama_lengkap)
                setFotoProfilValue(DATA_USER.foto_profil)
                setAsalSekolahValue(DATA_USER.id_sekolah)
                setLogoSekolahValue(DATA_USER.logo_sekolah)
                setAlamatSekolah(DATA_USER.alamat_sekolah)
                setNamaKepalaSekolahValue(DATA_USER.nama_kepala_sekolah)
                setTambahanInformasiValue(DATA_USER.tambahan_informasi)
                setIsFetched(true)
            }else{
                setIsFetched(true)
            }


        } catch (error) {
            alert(error)
        }
    }

    const getProfile = () => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/school/',
            method: 'get'
        })
        .then((res) => {
            const list = res.data.data.map(obj => ({label: obj.nama_sekolah, value: obj.id_sekolah}))
            setListSchool(list)
            getDataProfile()
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
                        <BasicField value={namaValue} onChangeValue={onChangeNamaValue} label={"Nama Lengkap"} placeholder={"Nama Lengkap"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        {
                            fotoProfilValue != ''?
                            <UploadField label={"Foto Profil"} source={`https://api-mgbk.bgskr-project.my.id/upload/user/fotoProfil/${fotoProfilValue}`} fileName={fotoProfilValue} />
                            :
                            <UploadField label={"Foto Profil"} fileName={fotoProfilValue} />
                        }
                    </View>
                    <View style={{marginTop: 24}}>
                        <SelectField items={listSchool} value={asalSekolahValue} onChangeValue={onChangeAsalSekolahValue} label={"Asal Sekolah"}/>
                    </View>
                    <View style={{marginTop: 24}}>
                        {
                            logoSekolahValue != ''?
                            <UploadField label={"Logo Sekolah"} source={`https://api-mgbk.bgskr-project.my.id/upload/user/logoSekolah/${logoSekolahValue}`} fileName={logoSekolahValue} />
                            :
                            <UploadField label={"Logo Sekolah"} fileName={logoSekolahValue} />
                        }
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={alamatSekolahValue} onChangeValue={onChangeAlamatSekolahValue} label={"Alamat Sekolah"} placeholder={"Alamat Sekolah"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={namaKepalaSekolahValue} onChangeValue={onChangeNamaKepalaSekolahValue} label={"Nama Kepala Sekolah"} placeholder={"Nama Kepala Sekolah"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField value={tambahanInformasiValue} onChangeValue={onChangeTambahanInformasiValue} label={"Tambahan Informasi"} placeholder={"Tambahan Informasi"} />
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