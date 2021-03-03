import { useNavigation, useRoute } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { clubAction, fixturesAction, squadAction, transferAction } from '../../../redux/action/club';
import { ListNewsItem } from '../../component';
import { NewsType, RouteClubType } from '../../type';
import FixturesClubComponent from './component/FixturesClubComponent';
import SquadClubComponent from './component/SquadClubComponent';
import TableClubComponent from './component/TableClubComponent';
import TransfersClubComponent from './component/TransfersClubComponent';
import {Navigator} from '../../../navigation'
import style from './style';


const ClubScreen = (props: any) => {
    //variable
    const { clubResponse ,suqadResponse,fixturesResponse,transferResponse} = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [selectedTypeIndex, setSelectedTypeIndex] = useState<number>(0)
    const routeParams = useRoute().params as RouteClubType
    const [type, setType] = useState<Array<string>>([])
    // life cycle
    useEffect(() => {
        _callAPI(routeParams.idTeam,routeParams.nameClub)
        return () => { };
    }, [])

    function _callAPI(id : string,name : string) {
        dispatch(clubAction({
            id: id,
            tab: "overview",
            type: "team",
            timeZone: "Asia%2FSaigon",
            seo: name
        }))

        dispatch(squadAction({
            id: id,
            tab: "squad",
            type: "team",
            timeZone: "Asia%2FSaigon",
            seo: name
        }))

        dispatch(fixturesAction({
            id: id,
            tab: "fixtures",
            type: "team",
            timeZone: "Asia%2FSaigon",
            seo: name
        }))
        dispatch(transferAction({
            id: id,
            tab: "transfers",
            type: "team",
            timeZone: "Asia%2FSaigon",
            seo: name
        }))
    }

    useEffect(() => {
        if (clubResponse === undefined) return
        var arrayTab: Array<string> = []
        // arrayTab.push("Table")
        if (clubResponse.tabs !== undefined) {
            for (let i = 0; i < clubResponse.tabs.length; i++) {
                if (clubResponse.tabs[i] !== "Overview") {
                    arrayTab.push(clubResponse.tabs[i])
                }
            }
            setType(arrayTab)
        }
    }, [clubResponse])

    // action 
    function _chooseType(index: number) {
        setSelectedTypeIndex(index)
    }
    function onClickDetailNews(index: number) {
        console.log("index_news", index)
    }
    function _onClickClub(id : string,name : string) {
        _callAPI(id,name)
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
        navigation.navigate(Navigator.playerRoute,{idPlayer : id})
    }

    function onClickMatches(id : number) {
        navigation.navigate(Navigator.matchDetailRoute,{matchId : id})
    }
    // function _onClickTransfer(id : number) {
    //     navigation.navigate(Navigator.playerRoute,{idPlayer : id})
    // }
    //layout
    function _buildMainView(feature: string) {
        switch (feature) {
            case "Table":
                return (
                    <View>
                        {clubResponse && clubResponse.tableData  &&
                            <TableClubComponent 
                            onClickClub={_onClickClub}
                            tableData = {clubResponse.tableData.tables && clubResponse.tableData.tables[0].table}
                            tableHeader = {clubResponse.tableData.tableHeader && clubResponse.tableData.tableHeader.staticTableHeaders}
                            otherLeague = {clubResponse.tableData.tables && clubResponse.tableData.tables[1] && clubResponse.tableData.tables[1].tables}
                            otherLeagueName = {clubResponse.tableData.tables && clubResponse.tableData.tables[1] && clubResponse.tableData.tables[1].leagueName}
                            mainLeagueName = {clubResponse.tableData.tables && clubResponse.tableData.tables[0].leagueName}
                            />
                        }
                    </View>
                )
            case "News":
                return (
                    <View>
                        {clubResponse && clubResponse.news.map((item: NewsType, index: number) => {
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
            case "Squad":
                return <SquadClubComponent 
                data={suqadResponse && suqadResponse.squad ?suqadResponse.squad : [] }
                onClickPlayer = {_onClickPlayer}
                />
            case "Fixtures":
                return <FixturesClubComponent 
                fixturesData={Object.values(fixturesResponse && fixturesResponse.fixturesTab ?  fixturesResponse.fixturesTab.fixtures : [])}
                onClickMatches={onClickMatches}
                />
            case "Transfers":
                return <TransfersClubComponent 
                idclub={routeParams.idTeam} transferData={Object.values(transferResponse && transferResponse.transfers && transferResponse.transfers.data)}
                onClickTransfer={_onClickPlayer}
                />
            default:
                break
        }
    }
    if (clubResponse === undefined) return
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* info Club */}
            <View style={style.infoClub}>
                <Image style={{ width: 60, height: 60 }} source={{ uri: `https://www.fotmob.com/images/team/${clubResponse.details && clubResponse.details.id}` }} />
                <View style={style.infoClubText}>
                    <Text style={{ fontSize: 16 }}>{clubResponse.details && clubResponse.details.country}</Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{clubResponse.details && clubResponse.details.name}</Text>
                </View>
            </View>

            {/* feature */}
            <ScrollView horizontal={true} style={style.scrollContainer} showsHorizontalScrollIndicator={false}>
                {/* {clubResponse && clubResponse.tabs.map((item : string,index : number) => { */}
                {type.map((item: string, index: number) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => _chooseType(index)} style={[style.scrollItem, { borderBottomWidth: index === selectedTypeIndex ? 2 : 0 }]}>
                            <Text style={{ fontWeight: '600', color: index === selectedTypeIndex ? "green" : "gray" }}>{item.toUpperCase()}</Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>

            {/* main View */}
            {_buildMainView(type[selectedTypeIndex])}

        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        clubResponse: state.club.clubResponse,
        suqadResponse : state.club.suqadResponse,
        fixturesResponse : state.club.fixturesResponse,
        transferResponse : state.club.transferResponse
    };
};

export default connect(mapStateToProps)(memo(ClubScreen));