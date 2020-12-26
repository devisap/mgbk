import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import Heading3 from '../../atoms/texts/Heading3'
import Paragraph from '../../atoms/texts/Paragraph'
import LinkMulai from '../../molecules/links/LinkMulai'

const DailyReportCard = (props) => {
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
                <View style={{marginTop: 8}}>
                    <Heading3 color={"#737373"} text={props.content? props.content : "Uraian kegiatan Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eos ea et sit ad laborum ipsum earum sequi odio sed..."}/>
                </View>
            </View>
            <View style={{flex: 1, borderColor: "#4a4a4a", borderWidth: 1, marginTop: 8}}></View>
            <View style={{alignItems: 'flex-end', marginVertical: 16, paddingHorizontal: 16}}>
                <LinkMulai title={"Cetak"} />
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

export default DailyReportCard