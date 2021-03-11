import React from 'react'
import { View } from 'react-native'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import Heading2 from '../../atoms/texts/Heading2'
import BasicField from '../../molecules/forms/BasicField'
import AddSchoolLayout from '../../templates/AddSchoolLayout'

const AddSchool = ({navigation}) => {
    return (
        <AddSchoolLayout navigation={navigation} />
    )
}

export default AddSchool