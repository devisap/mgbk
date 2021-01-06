import React from 'react'
import { Text, View } from 'react-native'

const StepStatus = (props) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 44, height: 44, backgroundColor: "#4a4a4a", borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: "Lato", color: "#fff", fontSize: 20}}>1</Text>
            </View>
            <View style={{borderColor: "#4a4a4a", width: 55, height: 0, borderWidth: 3, marginHorizontal: 2}}></View>
            {
                props.stepStatus == "1"?
                <View style={{width: 44, height: 44, backgroundColor: "#fff", borderColor: "#4a4a4a", borderWidth: 3, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: "Lato", color: "#4a4a4a", fontSize: 20}}>2</Text>
                </View>
                :
                <View style={{width: 44, height: 44, backgroundColor: "#4a4a4a", borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: "Lato", color: "#fff", fontSize: 20}}>2</Text>
                </View>
            }

            
        </View>
    )
}

export default StepStatus