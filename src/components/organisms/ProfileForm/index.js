import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import BasicField from '../../molecules/forms/BasicField'
import UploadField from '../../molecules/forms/UploadField'
import SelectField from '../../molecules/forms/SelectField'
import axios from 'axios'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const ProfileForm = (props) => {
    const [listSchool, setListSchool] = useState([])
    const [namaValue, setNamaValue] = useState('')
    const [asalSekolahValue, setAsalSekolahValue] = useState('')
    const [alamatSekolahValue, setAlamatSekolah] = useState('')
    const [namaKepalaSekolahValue, setNamaKepalaSekolahValue] = useState('')
    const [tambahanInformasiValue, setTambahanInformasiValue] = useState('')
    const [isFetched, setIsFetched] = useState(false)

    useEffect(() => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/user/profile/'+7,
            method: 'get'
        })
        .then((res) => {
            if(res.data.status){
                setNamaValue(res.data.data.nama_lengkap)
                setAsalSekolahValue(res.data.data.id_sekolah)
                setAlamatSekolah(res.data.data.alamat_sekolah)
                setNamaKepalaSekolahValue(res.data.data.nama_kepala_sekolah)
                setTambahanInformasiValue(res.data.data.tambahan_informasi)
                setIsFetched(true)
            }
        })
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/school/',
            method: 'get'
        })
        .then((res) => {
            const list = res.data.data.map(obj => ({label: obj.nama_sekolah, value: obj.id_sekolah}))
            setListSchool(list)
        })
    }, [])

    useEffect(() => {
        console.log("nama"+namaValue)
    })

    const onChangeNamaValue = (value) => setNamaValue(value)
    const onChangeAsalSekolahValue = (value) => setAsalSekolahValue(value)
    const onChangeAlamatSekolahValue = (value) => setAlamatSekolah(value)
    const onChangeNamaKepalaSekolahValue = (value) => setNamaKepalaSekolahValue(value)
    const onChangeTambahanInformasiValue = (value) => setTambahanInformasiValue(value)



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
                        <UploadField label={"Foto Profil"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <SelectField items={listSchool} value={asalSekolahValue} onChangeValue={onChangeAsalSekolahValue} label={"Asal Sekolah"}/>
                    </View>
                    <View style={{marginTop: 24}}>
                        <UploadField label={"Logo Sekolah"} />
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