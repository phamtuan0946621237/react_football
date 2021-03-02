import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { memo, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { connect, useDispatch } from 'react-redux';
import { matchAction } from '../../../redux/action/match';
import ListMatchComponent from './component/TableClubComponent';
import { Navigator } from '../../../navigation'
import style from './style'
import { ScrollView } from 'react-native-gesture-handler';
import { clubAction,squadAction,fixturesAction,transferAction } from '../../../redux/action/club'
import { ListNewsItem, ListTableItem } from '../../component'
import TableClubComponent from './component/TableClubComponent'
import SquadClubComponent from './component/SquadClubComponent'
import FixturesClubComponent from './component/FixturesClubComponent'
import TransfersClubComponent from './component/TransfersClubComponent';
export interface RouteClubType {
    idTeam: string,
    nameClub: string
}
export interface NewsType {
    imageUrl: string,
    lead: string,
    page: { url: string },
    sourceIconUrl: string,
    sourceStr: string,
    title: string
}

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
        console.log('transferResponse',transferResponse)
    },[transferResponse])

    useEffect(() => {
        console.log("suqadResponse",suqadResponse)
    },[suqadResponse])

    useEffect(() => {
        console.log("fixturesResponse",fixturesResponse)
    },[fixturesResponse])

    useEffect(() => {
        console.log("clubResponse", clubResponse)
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
                            otherLeagueName = {clubResponse.tableData.tables && clubResponse.tableData.tables[1].leagueName}
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
                                    onClick={() => onClickDetailNews(index)}
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
                return <SquadClubComponent data={suqadResponse && suqadResponse.squad ?suqadResponse.squad : [] }/>
            case "Fixtures":
                return <FixturesClubComponent fixturesData={Object.values(fixturesResponse && fixturesResponse.fixturesTab ?  fixturesResponse.fixturesTab.fixtures : [])}/>
            case "Transfers":
                return <TransfersClubComponent idclub={routeParams.idTeam} transferData={Object.values(transferResponse && transferResponse.transfers && transferResponse.transfers.data)}/>
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