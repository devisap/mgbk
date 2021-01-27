import React from 'react'
import ProfileLayout from '../../templates/ProfileLayout'

const Profile = ({navigation}) => {
    return (
        <ProfileLayout onPressSettingProfile={() => navigation.navigate('SettingProfile')} />
    )
}

export default Profile