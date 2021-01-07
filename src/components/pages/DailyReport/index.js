import React from 'react'
import { StyleSheet, View } from 'react-native'
import DailyReportLayout from '../../templates/DailyReportLayout'

const DailyReport = ({navigation}) => {
    const linkWithBack = (screen) => {
        alert(screen);
    }
    return (
        <DailyReportLayout />
    )
}

const styles = StyleSheet.create({
    
})

export default DailyReport