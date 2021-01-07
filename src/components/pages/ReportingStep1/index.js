import React from 'react'
import { StyleSheet, View } from 'react-native'
import ReportingStep1Layout from '../../templates/ReportingStep1Layout'

const ReportingStep1 = ({navigation}) => {
    const linkWithBack = (screen) => {
        alert(screen);
    }
    return (
        <ReportingStep1Layout />
    )
}

const styles = StyleSheet.create({
    
})

export default ReportingStep1