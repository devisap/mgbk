import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import Heading3 from '../../atoms/texts/Heading3'
import LabelUnderline from '../../atoms/texts/LabelUnderline'
import Icon from 'react-native-vector-icons/FontAwesome'

const ReportCard = (props) => {
    return (
        <View style={styles.box}>
            <View style={{paddingHorizontal: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
                    <View style={{flex: 1}}>
                        <Heading2 text={props.title? props.title : "Heading 2"}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={{color: "#737373", fontSize: 12, fontFamily: "Lato"}}>{props.date? props.date : "dd MM YY"}</Text>
                    </View>
                </View>
                <View style={{marginTop: 8, marginBottom: 26}}>
                    <Heading3 color={"#737373"} text={props.content? props.content : "Uraian kegiatan Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eos ea et sit ad laborum ipsum earum sequi odio sed..."}/>
                </View>
                <View style={{flexDirection: 'column', marginTop: 16}}>
                    <View style={{borderColor: "#4a4a4a", borderWidth: 1}} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'row'}} onPress={() => props.onDelete? props.onDelete(props.idReport, props.title) : alert('klik')}>
                        <View style={{marginRight: 8, justifyContent: 'center'}}>
                            <Icon name={'trash'} size={18} color={'#4a4a4a'}/>
                        </View>
                        <LabelUnderline text={"Hapus"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 5
    }
})

export default ReportCard