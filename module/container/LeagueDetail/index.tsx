import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { memo, useEffect, useState } from 'react';
import { FlatList, Linking,Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { connect, useDispatch } from 'react-redux';
import { matchAction } from '../../../redux/action/match';
import TableComponent from './component/TableComponent';
import { Navigator, LeagueNavigator } from '../../../navigation'
import { RouteLeague } from '../League'
import { leagueDetailAction, statsLeagueAction } from '../../../redux/action/league';
import style from './style'
import { ListNewsItem } from '../../component';
import { NewsType } from '../../type'
import { transferAction,matchesLeagueAction } from '../../../redux/action/league';
import TransferComponent from './component/TransferComponent'
import MatchesComponent from './component/MatchesComponent'
import StatsComponent from './component/StatsComponent';
import {RouteClubType} from '../../type'
import { leagueRoute } from '../../../navigation/leaguenavigation';
const LeagueDetailPage = (props: any) => {
    //variable
    const { leagueDetailResponse, transferResponse ,macthesResponse,statsResponse} = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const routeParams = useRoute().params as RouteLeague
    const [selectedTypeIndex, setSelectedTypeIndex] = useState<number>(0)
    const [type, setType] = useState<Array<string>>([])

    // life cycle
    useEffect(() => {
        dispatch(leagueDetailAction({
            id: routeParams.id,
            tab: "overview",
            type: "league",
            timeZone: "Asia%2FSaigon",
            seo: routeParams.name
        }))

        dispatch(transferAction({
            id: routeParams.id,
            tab: "transfers",
            type: "league",
            timeZone: "Asia%2FSaigon",
            seo: routeParams.name
        }))

        dispatch(matchesLeagueAction({
            id: routeParams.id,
            tab: "matches",
            type: "league",
            timeZone: "Asia%2FSaigon",
            seo: routeParams.name
        }))
        dispatch(statsLeagueAction({
            id: routeParams.id,
            tab: "stats",
            type: "league",
            timeZone: "Asia%2FSaigon",
            seo: routeParams.name
        }))
        return () => {}
    }, [])

    useEffect(() => {
        if (leagueDetailResponse === undefined) return
        var arrayTab: Array<string> = []
        // arrayTab.push("Table")
        if (leagueDetailResponse.tabs !== undefined) {
            for (let i = 0; i < leagueDetailResponse.tabs.length; i++) {
                if (leagueDetailResponse.tabs[i] !== "Overview") {
                    arrayTab.push(leagueDetailResponse.tabs[i])
                }
            }
            if (leagueDetailResponse.tableData && leagueDetailResponse.tableData.tables && leagueDetailResponse.tableData.tables[0].tables) {
                let a = arrayTab.filter((item) => item !== "Table" && item !== "Playoff")
                setType(a)
            }else {
                setType(arrayTab)
            }
            
        }
    }, [leagueDetailResponse])

    // action 
    function _chooseType(index: number) {
        setSelectedTypeIndex(index)
    }

    function _onClickClub(id: string, name: string) {
        navigation.navigate(LeagueNavigator.clubRoute,{idTeam: id,nameClub: name} as RouteClubType)
    }

    function _onClickMatches(id ?: string) {
        navigation.navigate(LeagueNavigator.matchDetailRoute,{matchId : id})
    }

    function onClickDetailNew(url : string) {
        console.log("url.slice(0,4)",url.slice(0,4))
        if (url.slice(0,4) === "http") {
            Linking.openURL(url);
        }else {
            Linking.openURL("https://www.fotmob.com" + url);
        }
    }
    function _onClickPlayer(id : number) {
        navigation.navigate(LeagueNavigator.playerRoute,{idPlayer : id})
    }
    function _onClickTeam(id : number) {
        // navigation.navigate(LeagueNavigator.clubRoute,{})
    }


    //layout

    function _buildMainView(type: string) {
        switch (type) {
            case "News":
                return (
                    <View>
                        {leagueDetailResponse && leagueDetailResponse.news.map((item: NewsType, index: number) => {
                            return (
                                <ListNewsItem
                                    key={index}
                                    onClick={() => onClickDetailNew(item.page.url)}
                                    describle={item.title}
                                    icon={item.imageUrl}
                                    source={item.sourceStr}
                                    iconSource={item.sourceIconUrl}
                                />
                            )
                        })}

                    </View>
                )
            case "Table":
                return (
                    <View>
                        {leagueDetailResponse && leagueDetailResponse.tableData &&
                            <TableComponent
                                onClickClub={_onClickClub}
                                tableData={leagueDetailResponse.tableData.tables && leagueDetailResponse.tableData.tables[0].table}
                                tableHeader={leagueDetailResponse.tableData.tableHeader && leagueDetailResponse.tableData.tableHeader.staticTableHeaders}
                                otherLeague = {leagueDetailResponse.tableData.tables && leagueDetailResponse.tableData.tables.tables && leagueDetailResponse.tableData.tables.tables.table}
                                type = {leagueDetailResponse.tableData.tables && leagueDetailResponse.tableData.tables.tables ? "quocngoai" : "quocnoi"}
                            />
                        }
                    </View>
                )
            case "Transfers":
                return (
                    <TransferComponent 
                    onClickTransfer={_onClickPlayer}
                    data={transferResponse && transferResponse.transfers && transferResponse.transfers.data} />
                )
            case "Matches":
                return (
                    <MatchesComponent
                     onClick = {_onClickMatches}
                     data = {macthesResponse && macthesResponse.matchesTab && macthesResponse.matchesTab.data && macthesResponse.matchesTab.data.matchesCombinedByRound}
                    />
                )
            case "Stats" : 
            return (
                <StatsComponent
                onClickPlayer={_onClickPlayer}
                onClickTeam = {_onClickTeam}
                dataStats={statsResponse && statsResponse.stats}/>
            )
            default:
                break;

        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.infoClub}>
                <Image style={{ width: 60, height: 60 }} source={{ uri: `https://www.fotmob.com/images/league/${leagueDetailResponse && leagueDetailResponse.details && leagueDetailResponse.details.id}` }} />
                <View style={style.infoClubText}>
                    <Text style={{ fontSize: 16 }}>{leagueDetailResponse && leagueDetailResponse.details && leagueDetailResponse.details.country}</Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{leagueDetailResponse && leagueDetailResponse.details && leagueDetailResponse.details.name}</Text>
                </View>
            </View>

            <ScrollView horizontal={true} style={style.scrollContainer} showsHorizontalScrollIndicator={false}>
                {type.map((item: string, index: number) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => _chooseType(index)} style={[style.scrollItem, { borderBottomWidth: index === selectedTypeIndex ? 2 : 0 }]}>
                            <Text style={{ fontWeight: '600', color: index === selectedTypeIndex ? "green" : "gray" }}>{item.toUpperCase()}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>


            {_buildMainView(type[selectedTypeIndex])}

        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        leagueDetailResponse: state.league.leagueDetailResponse,
        transferResponse: state.league.transferResponse,
        macthesResponse : state.league.macthesResponse,
        statsResponse : state.league.statsResponse
    };
};

export default connect(mapStateToProps)(memo(LeagueDetailPage));