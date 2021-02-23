import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MacthRoute } from '../../navigation';

const MatchPage = ({navigation } : any) => {
    function _handleTest() {
        navigation.navigate(MacthRoute.leagueRoute)
        console.log("helo")
    }
    return (
        <View style={{backgroundColor : 'red',flex : 1}}>
            <Text >helo</Text>
            <TouchableOpacity style={{backgroundColor : 'green'}} onPress={_handleTest}>
                <Text>hellooifkmwe</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MatchPage