import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReportEkuivalen = () => {
    return (
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

export default ReportEkuivalen