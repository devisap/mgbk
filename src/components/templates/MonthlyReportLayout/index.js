import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SelectFilterField from '../../molecules/forms/SelectFilterField'
import ImgNoData from '../../../assets/images/no_data.svg'
import Heading2 from '../../atoms/texts/Heading2'
import Heading3 from '../../atoms/texts/Heading3'
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'

const MonthlyReportLayout = () => {
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 32, marginBottom: 24}}>
                        <View style={{marginTop: 24}}>
                            <SelectFilterField label={'Pilih Tahun'} />
                        </View>
                        <View style={{marginTop: 8}}>
                            <SelectFilterField label={'Pilih Bulan'} />
                        </View>
                        <View style={{marginTop: 36}}>
                            <View style={style.box}>
                                <View style={{flexDirection: 'row', marginVertical: 16, paddingHorizontal: 16}}>
                                    <View style={{flex: 2}}>
                                        <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 20, fontWeight: '800'}}>No</Text>
                                    </View>
                                    <View style={{flex: 8}}>
                                        <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 20, fontWeight: '800'}}>Nama Kegiatan</Text>
                                    </View>
                                    <View style={{flex: 4}}>
                                        <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 20, fontWeight: '800'}}>Ekivalensi</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1, borderWidth: 1, borderColor: "#D9D9D9"}}></View>
                                <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
                                    <View style={{flex: 2}}>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>1</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>2</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>3</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>4</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>5</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 8}}>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>Kegiatan 1</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>Kegiatan 2</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>Kegiatan 3</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>Kegiatan 4</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>Kegiatan 5</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 4}}>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>1 Kali</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>2 Kali</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>3 Kali</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>4 Kali</Text>
                                        </View>
                                        <View style={{marginVertical: 8}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 16}}>5 Kali</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* <View style={{marginTop: 36, alignItems: 'center'}}>
                            <ImgNoData width={150} height={150} />
                            <View style={{marginTop: 24}}>
                                <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 20}}>Tidak ada data</Text>
                            </View>
                        </View> */}
                    </View>
                </ScrollView>
            </View>
            <View style={{borderTopWidth: 1.5, borderTopColor: 'rgba(10, 10, 10, 0.15)'}}>
                <View style={{marginVertical: 16, marginHorizontal: 32}}>
                    <ButtonSubmit title={"Cetak Semua"} onPress={() => alert('berhasil')} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    box : {
        backgroundColor: "#F5F5F5", 
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: 5,
        marginTop: 5,
        marginHorizontal: -10
    }
})

export default MonthlyReportLayout