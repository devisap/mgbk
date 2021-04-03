import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
    Home, SettingProfile, CreateReport, DailyReport, WeeklyReport, MonthlyReport, YearlyReport, Profile, AddSchool
} from '../../../../components/pages'
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();


const HomeStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} 
                options={{
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: "#48CAE4"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const CreateReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="CreteReport">
            <Stack.Screen name={"CreateReport"} component={CreateReport} 
                options={{
                    title : "Kegiatan",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}

const DailyReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="DailyReport">
            <Stack.Screen name={"DailyReport"} component={DailyReport} 
                options={{
                    title : "Laporan Harian",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}
const WeeklyReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="WeeklyReport">
            <Stack.Screen name={"WeeklyReport"} component={WeeklyReport} 
                options={{
                    title : "Laporan Mingguan",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}

const MonthlyReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="MonthlyReport">
            <Stack.Screen name={"MonthlyReport"} component={MonthlyReport} 
                options={{
                    title : "Laporan Bulanan",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}

const SemesterReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="DailyReport">
            <Stack.Screen name={"DailyReport"} component={DailyReport} 
                options={{
                    title : "Laporan Semesteran",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}

const YearlyReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="YearlyReport">
            <Stack.Screen name={"YearlyReport"} component={YearlyReport} 
                options={{
                    title : "Laporan Tahunan",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}

const ProfileStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name={"Profile"} component={Profile} 
                options={{
                    title : "Profil",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
            
        </Stack.Navigator>
    )
}

const SettingProfileStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="SettingProfile">
            <Stack.Screen name={"SettingProfile"} component={SettingProfile} 
                options={{
                    title : "Pengaturan Profil",
                    headerStyle: {
                        backgroundColor: '#48CAE4'
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="arrow-left" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.navigate('Profile')} />
                }}
            />
        </Stack.Navigator>
    )
}

const AddSchoolStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="AddSchool">
            <Stack.Screen name={"AddSchool"} component={AddSchool} 
                options={{
                    title : "Tambah Sekolah",
                    headerStyle: {
                        backgroundColor: '#48CAE4'
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}

export {
    HomeStack, CreateReportStack, DailyReportStack,
    WeeklyReportStack, MonthlyReportStack, SemesterReportStack,
    YearlyReportStack, ProfileStack, SettingProfileStack, AddSchoolStack}