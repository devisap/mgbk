import React from 'react'
import { StyleSheet, View } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import Heading3 from '../../atoms/texts/Heading3'

const InfoProfileCard = (props) => {
    return (
        <View style={styles.box}>
            <View style={{marginVertical: 16, paddingHorizontal: 16}}>
                <Heading3 text={props.namaSekolah} color={"#737373"} textAlign={"center"} />
            </View>
            <View style={{flex: 1, borderColor: "#4a4a4a", borderWidth: 1}}></View>
            <View style={{flexDirection: 'column', alignItems: 'center', marginVertical: 16, paddingHorizontal: 16}}>
                <Heading2 text={props.namaLengkap} textAlign={"center"} />
                <View style={{marginTop: 4}}>
                    <Heading3 text={props.email} color={"#737373"} textAlign={"center"} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box : {
        backgroundColor: "#F5F5F5", 
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'center',
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
    }
})

export default InfoProfileCard