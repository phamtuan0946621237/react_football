import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { memo, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { connect, useDispatch } from 'react-redux';
import { matchAction } from '../../../redux/action/match';
import { leagueAction } from '../../../redux/action/league';

import ListMatchComponent from './component/ListMatchComponent';
import { Navigator ,SearchNavigator} from '../../../navigation'

export interface RouteLeague {
    id: string,
    name: string
}
const MatchPage = (props: any) => {
    //variable
    const { macthResponse ,leagueResponse} = props
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string>(dayjs(new Date()).format('DD/MM/YYYY'))
    const [idLeague, setIdLeague] = useState<string>()
    // life cycle
    useEffect(() => {
        let day = dayjs(new Date()).format('DD')
        let month = dayjs(new Date()).format('MM')
        let year = dayjs(new Date()).format('YYYY')
        // setSelectedDate(`${day}/${month}/${year}`)
        dispatch(matchAction({ date: `${year}${month}${day}`, sortOnClient: true }))
        return () => { };
    }, [])

    useEffect(() => {
        if (!leagueResponse) return
        if (!idLeague) return
        if (leagueResponse.countries) {
            for (var i = 0; i < leagueResponse.countries.length; i++) {
                if (leagueResponse.countries[i].leagues) {
                    for (var j = 0; j < leagueResponse.countries[i].leagues.length; j++) {
                        if (leagueResponse.countries[i].leagues[j].id - parseInt(idLeague) === 0) {
                            var url = leagueResponse.countries[i].leagues[j].pageUrl
                            var first = url.slice(9)
                            var index = first.indexOf("/")
                            var id = first.slice(0, index)
                            var second = first.slice(index, first.length)
                            var name = second.slice(10, first.length)
                            navigation.navigate(Navigator.leagueDetailRoute, { id: id, name: name } as RouteLeague)
                            return
                        }
                    }
                }
            }
        }

    }, [leagueResponse])

    // action 
    function showDatepicker() {
        setShow(true)
    }
    function onChange(event: any, selectedDate: any) {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
    function _selectedDate(date: Date) {

        let day = dayjs(date).format('DD')
        let month = dayjs(date).format('MM')
        let year = dayjs(date).format('YYYY')
        setSelectedDate(`${day}/${month}/${year}`)
        dispatch(matchAction({ date: `${year}${month}${day}`, sortOnClient: true }))
        setShow(false)
    }
    function onClickChooseMatch(id: number) {
        navigation.navigate(Navigator.matchDetailRoute, { matchId: id })
    }

    function _onClickLeague(id : string) {
        dispatch(leagueAction({}))
                setIdLeague(id)
    }

    //layout
    return (
        <View style={{backgroundColor : 'rgba(124,141,163,0.2)'}}>
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
                    onClickLeague={() => _onClickLeague(item.id)}
                        items={macthResponse.leagues !== undefined ? macthResponse.leagues[index].matches : []}
                        nameLeague={macthResponse.leagues[index].name}
                        onClick={onClickChooseMatch}
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
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                        <Text onPress={() => setShow(false)} style={{ color: 'red' }}>Huỷ</Text>
                        <Text onPress={() => _selectedDate(date)} style={{ color: 'green' }}>Chọn</Text>
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
        macthResponse: state.match.matchResponse,
        leagueResponse: state.league.leagueResponse
    };
};

export default connect(mapStateToProps)(memo(MatchPage));