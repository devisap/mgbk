import React from 'react'
import { StyleSheet, View } from 'react-native'
import IcArrowLongRightBlack from '../../atoms/icons/IcArrowLongRightBlack'
import Heading2 from '../../atoms/texts/Heading2'
import LabelUnderline from '../../atoms/texts/LabelUnderline'
import Paragraph from '../../atoms/texts/Paragraph'
import LinkMulai from '../../molecules/links/LinkMulai'

const MenuHomeCard = (props) => {
    return (
        <View style={styles.box}>
            <View style={{paddingLeft: 15}}>
                <View style={{marginTop: 10}}>
                    <Heading2 text={props.title? props.title : "Lorep Ipsum"} />
                </View>
                <View style={{marginTop: 16}}>
                    <Paragraph text={props.content? props.content : "Lorep Ipsum"} />
                </View>
            </View>
            <View style={{flexDirection: 'column', marginTop: 16}}>
                <View style={{borderColor: "#4a4a4a", borderWidth: 1}}></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 20, marginRight: 20}}>
                <LinkMulai />
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

export default MenuHomeCard