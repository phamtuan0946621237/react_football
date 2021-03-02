import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { memo, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { connect, useDispatch } from 'react-redux';
import { matchAction } from '../../../redux/action/match';
import ListMatchComponent from './component/ListMatchComponent';
import {Navigator} from '../../../navigation'
const LeagueDetailPage = (props: any) => {
    //variable
    // const { macthResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    
    // https://www.fotmob.com/allLeagues
    //layout
    return (
        <View >
           <Text>LeagueDetailPage</Text>
        </View>
    )
}
const mapStateToProps = (state: any) => {
    return {
        // macthResponse: state.match.matchResponse
    };
};

export default connect(mapStateToProps)(memo(LeagueDetailPage));