import React, { useEffect } from 'react'
import CreateReportLayout from '../../templates/CreateReportLayout'

const CreateReport = ({navigation}) => {
    // useEffect(() => {
    //     navigation.replace('Home')
    // }, [])
    return (
        <CreateReportLayout navigation={navigation} />
    )
}

export default CreateReport