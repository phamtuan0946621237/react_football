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
const MatchPage = (props: any) => {
    //variable
    const { macthResponse } = props
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [selectedDate,setSelectedDate] = useState<string>(dayjs(new Date()).format('DD/MM/YYYY'))

    // life cycle
    useEffect(() => {
        let day = dayjs(new Date()).format('DD')
        let month = dayjs(new Date()).format('MM')
        let year = dayjs(new Date()).format('YYYY')
        // setSelectedDate(`${day}/${month}/${year}`)
        dispatch(matchAction({ date: `${year}${month}${day}`, sortOnClient: true }))
        return () => { };
    }, [])

    // action 
    function showDatepicker() {
        setShow(true)
    }
    function onChange (event: any, selectedDate: any) {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
    function _selectedDate(date : Date) {
        
        let day = dayjs(date).format('DD')
        let month = dayjs(date).format('MM')
        let year = dayjs(date).format('YYYY')
        setSelectedDate(`${day}/${month}/${year}`)
        dispatch(matchAction({ date: `${year}${month}${day}`, sortOnClient: true }))
        setShow(false)
    }
    function onClickChooseMatch(id : number) {
        navigation.navigate(Navigator.matchDetailRoute,{matchId : id})
    }

    //layout
    return (
        <View >
            <TouchableOpacity style={{
                backgroundColor: 'white',
                borderColor: '#E6E7E8',
                borderWidth: 1,
                borderRadius: 16,
                padding: 16,
                margin: 16
            }}
                onPress={showDatepicker}
            >
                <Text>{selectedDate}</Text> 
            </TouchableOpacity>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={macthResponse !== undefined ? macthResponse.leagues : []}
                renderItem={({ item, index }) => (
                    <ListMatchComponent
                        items={macthResponse.leagues !== undefined ? macthResponse.leagues[index].matches : []}
                        nameLeague={macthResponse.leagues[index].name}
                        onClick = {onClickChooseMatch}
                    />
                )}
                keyExtractor={(_, index) => index.toString()}
            />
            <Modal
                style={{ margin: 0 }}
                isVisible={show}
                animationIn="fadeInUp"
                animationInTiming={500}
                animationOut="fadeOutDown"
                animationOutTiming={500}
                backdropTransitionOutTiming={0}>
                    <View style={{backgroundColor : 'white'}}>
                        <View style={{flexDirection : 'row',justifyContent : 'space-between',padding : 16}}>
                            <Text onPress={() => setShow(false)} style={{color : 'red'}}>Huỷ</Text>
                            <Text onPress={() => _selectedDate(date)} style={{color : 'green'}}>Chọn</Text>
                        </View>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
                </View>
            </Modal>
        </View>
    )
}
const mapStateToProps = (state: any) => {
    return {
        macthResponse: state.match.matchResponse
    };
};

export default connect(mapStateToProps)(memo(MatchPage));