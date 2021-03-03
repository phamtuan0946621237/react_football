import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { memo, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, TextInput, Keyboard, TextInputChangeEventData, NativeSyntheticEvent, TextInputEndEditingEventData } from 'react-native';
import Modal from 'react-native-modal';
import { connect, useDispatch } from 'react-redux';
import { matchAction } from '../../../redux/action/match';
import { Navigator } from '../../../navigation'
import { searchAction } from '../../../redux/action/search';
import { useSafeArea } from 'react-native-safe-area-context';
import SearchComponent from './component/SearchComponent'
import style from './style'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchNavigator } from '../../../navigation'
import { leagueAction } from '../../../redux/action/league';
// import {RouteLeague} from '../../type'
export interface RouteLeague {
    id: string,
    name: string
}
interface SearchType {
    text: string,
    payload: {
        id: string,
        matchDate: string,
        countryCode?: string,
        awayName?: string,
        awayTeamId?: string,
        homeName?: string,
        homeTeamId?: string
    }
}
interface SearchParrentType {
    length: number,
    offset: number,
    options: Array<SearchType>
}

const SearchPage = (props: any) => {
    //variable
    const { searchResponse, leagueResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [data, setData] = useState<Array<any>>([])
    const [key, setKey] = useState<Array<string>>([])
    const [idLeague, setIdLeague] = useState<string>()
    // life cycle
    useEffect(() => {
        if (searchResponse === undefined) return
        var a: Array<any> = []
        var b: Array<any> = []
        for (var i = 0; i < Object.values(searchResponse).length; i++) {
            if (i !== 0) {
                a.push(Object.values(searchResponse)[i])
                b.push(Object.keys(searchResponse)[i])
            }

        }
        setData(a)
        setKey(b)
    }, [searchResponse])

    useEffect(() => {
        if (!leagueResponse) return
        if (!idLeague) return
        console.log("idLeague", idLeague)
        if (leagueResponse.countries) {
            for (var i = 0; i < leagueResponse.countries.length; i++) {
                if (leagueResponse.countries[i].leagues) {
                    for (var j = 0; j < leagueResponse.countries[i].leagues.length; j++) {
                        console.log("leagueResponse.countries[i].leagues[j] : ", leagueResponse.countries[i].leagues[j].id)
                        console.log("hieu", leagueResponse.countries[i].leagues[j].id - parseInt(idLeague))
                        if (leagueResponse.countries[i].leagues[j].id - parseInt(idLeague) === 0) {
                            var url = leagueResponse.countries[i].leagues[j].pageUrl
                            var first = url.slice(9)
                            var index = first.indexOf("/")
                            var id = first.slice(0, index)
                            var second = first.slice(index, first.length)
                            var name = second.slice(10, first.length)
                            navigation.navigate(SearchNavigator.leagueDetailRoute, { id: id, name: name } as RouteLeague)
                            return
                        }
                        // if (leagueResponse.countries[i].leagues[j].id === parseInt(idLeague)) {

                        //     // console.log("url",leagueResponse.countries[i].leagues[j].pageUrl)
                        // }
                    }
                }
            }
        }

    }, [leagueResponse])

    //action 
    function _onChange(
        event: NativeSyntheticEvent<TextInputChangeEventData>
    ) {
        dispatch(searchAction({
            term: event.nativeEvent.text,
            lang: "en,vi"
        }))
    }

    function onClickDetail(type: string, id: string) {
        console.log("id", id, " - ", "type", type)
        switch (type) {
            case "squadMemberSuggest":
                navigation.navigate(SearchNavigator.playerRoute, { idPlayer: id })
                break;
            case "matchSuggest":
                navigation.navigate(SearchNavigator.matchDetailRoute, { matchId: id })
                break;
            case "leagueSuggest":
                dispatch(leagueAction({}))
                setIdLeague(id)

            // navigation.navigate(SearchNavigator.matchDetailRoute,{matchId : id})
            default:
                break
        }

    }

    //layout
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', margin: 16 }}>
                <TextInput
                    style={{ flex: 1, height: 50, borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, borderColor: '#DEDEDE', backgroundColor: 'white', marginRight: 16 }}
                    onChange={_onChange}
                    placeholder="Nhập vào bạn ơi"
                />

            </View>
            {data.map((itemss: SearchParrentType[], index: number) => {
                return (
                    <View style={style.section} key={index}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 16 }}>{key[index].slice(0, key[index].length - 7).toLocaleUpperCase()}</Text>
                        {itemss[0].options.map((item: SearchType, i: number) => {
                            return (
                                <TouchableOpacity onPress={() => onClickDetail(key[index], item.payload.id)} key={i} style={[style.row, { flexDirection: 'row' }]}>
                                    <Image style={{ width: 30, height: 30, marginRight: 16 }} source={{
                                        uri:
                                            key[index] === "matchSuggest" ? `https://www.fotmob.com/images/team/${item.payload.homeTeamId}` :
                                                key[index] === "squadMemberSuggest" ? `https://images.fotmob.com/image_resources/playerimages/${item.payload.id}.png` :
                                                    key[index] === "teamSuggest" ? `https://www.fotmob.com/images/team/${item.payload.id}` : `https://www.fotmob.com/images/league/${item.payload.id}`
                                    }} />
                                    <Text style={{ flex: 1 }}>{key[index] !== "matchSuggest" ? item.text.slice(0, item.text.length - item.payload.id.length - 1) : item.text}</Text>
                                    {key[index] == "matchSuggest" &&
                                        <Image style={{ width: 30, height: 30, marginLeft: 16 }} source={{ uri: `https://www.fotmob.com/images/team/${item.payload.awayTeamId}` }} />
                                    }
                                </TouchableOpacity>
                            )
                        })

                        }
                    </View>
                )
            })}
        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        searchResponse: state.search.searchResponse,
        leagueResponse: state.league.leagueResponse
    };
};

export default connect(mapStateToProps)(memo(SearchPage));