import React from 'react'
import { StyleSheet, View } from 'react-native'
import CreateReportLayout from '../../templates/CreateReportLayout'
import DailyReportLayout from '../../templates/DailyReportLayout'

const CreateReport = ({navigation}) => {
    const linkWithBack = (screen) => {
        alert(screen);
    }
    return (
        <CreateReportLayout />
    )
}

const styles = StyleSheet.create({
    
})

export default CreateReport