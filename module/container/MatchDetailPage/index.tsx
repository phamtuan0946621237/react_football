import { useNavigation, useRoute } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View,Linking } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { matchDetailAction } from '../../../redux/action/match';
import style from './style';
import MatchFactsComponent from './component/MatchFactsComponent'
import LiveTickerComponent,{LiveTickerItemType} from './component/LiveTickerComponent'
import StatsComponent from './component/StatsComponent'
import HeadToHeadComponent from './component/HeadToHeadComponent'
import LineUpComponent from './component/LineUpComponent'
import { Navigator } from '../../../navigation'

export interface RouteClubType {
    idTeam : string,
    nameClub : string
}
const MatchDetailPage = (props: any) => {
    //variable
    const { macthDetailResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [selectedIndexType, setSelectedIndexType] = useState(0)
    const routeParams = useRoute().params as any
    const [liveTickerData, setLiveTickerData] = useState<Array<LiveTickerItemType>>()
    const [type,setType] = useState<Array<string>>([])
    // life cycle
    useEffect(() => {
        dispatch(matchDetailAction({
            matchId: routeParams.matchId,
            ccode3: "VNM"
        }))

        return () => { };
    }, [routeParams.matchId])

    useEffect(() => {
        if (macthDetailResponse === undefined) return
        fetch(`http://${macthDetailResponse.content.liveticker.url}`, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                setLiveTickerData(response.Events)
            })
            .catch(err => {
                // console.log(err);
            });
    }, [macthDetailResponse])


    // action 
    function _selectedType(index: number) {
        setSelectedIndexType(index)
    }
    function _onClickClub(pageUrl?: string) {
        if (pageUrl !== undefined) {
            var first = pageUrl.slice(7)
            var index = first.indexOf("/")
            var id = first.slice(0, index)
            var second = first.slice(index, first.length)
            var name = second.slice(10, first.length)
            navigation.navigate(Navigator.clubRoute, { idTeam: id, nameClub: name } as RouteClubType)
        }

    }
    function _onClickPlayer(id : number) {
        navigation.navigate(Navigator.playerRoute,{idPlayer : id} )
    }
    function _onClickOpenBrower(url : string) {
        Linking.openURL(url);
    }
    function _onClickClubForm(id : string,name : string) {
        navigation.navigate(Navigator.clubRoute, { idTeam: id, nameClub: name } as RouteClubType)
    }
    var team = macthDetailResponse && macthDetailResponse.header && macthDetailResponse.header.teams

    //layout
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={style.infoMatch}>
                <TouchableOpacity style={style.infoTeam} onPress={() => _onClickClub(team[0].pageUrl)}>
                    <Image style={{ width: 60, height: 60 }} source={{ uri: `https://www.fotmob.com${macthDetailResponse !== undefined && macthDetailResponse?.header?.teams && macthDetailResponse?.header?.teams[0].imageUrl}` }} />
                    <Text style={style.titleNameClub}>{macthDetailResponse  && macthDetailResponse?.header && macthDetailResponse?.header?.teams && macthDetailResponse.header.teams[0] && macthDetailResponse.header.teams[0].name}</Text>
                </TouchableOpacity>
                <View style={style.result}>
                    {macthDetailResponse && macthDetailResponse.header && macthDetailResponse.header.status &&
                    <Text style={style.titleResult}>{macthDetailResponse.header.status.started === true ? macthDetailResponse.header.status.scoreStr : macthDetailResponse.header.status.startTimeStr}</Text>
                    }
                    {macthDetailResponse !== undefined && macthDetailResponse.header && macthDetailResponse.header.status.scoreStr && macthDetailResponse.header.status.started === false ?
                        <Text style={{ fontSize: 12, marginTop: 5 }}>{macthDetailResponse.header.status.startDateStr}</Text> : null
                    }
                </View>
                <TouchableOpacity style={style.infoTeam} onPress={() => _onClickClub(team[1].pageUrl)}>
                    <Image style={{ width: 60, height: 60 }} source={{ uri: `https://www.fotmob.com${macthDetailResponse !== undefined && macthDetailResponse?.header && macthDetailResponse?.header?.teams && macthDetailResponse?.header?.teams[1].imageUrl}` }} />
                    <Text style={style.titleNameClub}>{macthDetailResponse !== undefined && macthDetailResponse?.header?.teams && macthDetailResponse.header.teams[1].name}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: 'white', minHeight: 50 }}>
                {macthDetailResponse !== undefined && macthDetailResponse.nav.map((item: string, index: number) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => _selectedType(index)} style={{ paddingVertical: 16, paddingHorizontal: 24, borderBottomWidth: selectedIndexType === index ? 1 : 0, borderColor: selectedIndexType === index ? 'green' : 'black' }}>
                            <Text style={{ color: selectedIndexType === index ? 'green' : 'black' }}>{item.toUpperCase()}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            {macthDetailResponse !== undefined &&
                <View >
                    {macthDetailResponse.nav[selectedIndexType] === "match facts" ?
                        <MatchFactsComponent
                        onClickClub={_onClickClubForm}
                            onClickOpenBrower={_onClickOpenBrower}
                            highlights = {macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.matchFacts && macthDetailResponse.content.matchFacts.highlights}
                            onClick={_onClickPlayer}
                            playerOfTheMatch={macthDetailResponse !== undefined && macthDetailResponse.content.matchFacts.playerOfTheMatch}
                            teamFormHome={macthDetailResponse !== undefined ? macthDetailResponse.content.matchFacts.teamForm[0] : []}
                            teamFormAway={macthDetailResponse !== undefined ? macthDetailResponse.content.matchFacts.teamForm[1] : []}
                            macthDate={macthDetailResponse !== undefined && macthDetailResponse.content.matchFacts.infoBox["Match Date"]}
                            referee={macthDetailResponse !== undefined && macthDetailResponse.content.matchFacts.infoBox.Referee && macthDetailResponse.content.matchFacts.infoBox.Referee.text}
                            Stadium={macthDetailResponse !== undefined && macthDetailResponse.content.matchFacts.infoBox.Stadium && macthDetailResponse.content.matchFacts.infoBox.Stadium.name}
                            Tournament={macthDetailResponse !== undefined && macthDetailResponse.content.matchFacts.infoBox.Tournament && macthDetailResponse.content.matchFacts.infoBox.Tournament.text}
                            events={macthDetailResponse !== undefined && macthDetailResponse.content.matchFacts.events ? macthDetailResponse.content.matchFacts.events.events : []}
                        />
                        : macthDetailResponse.nav[selectedIndexType] === "live ticker" ?
                            <LiveTickerComponent
                                onClickPlayer={_onClickPlayer}
                                livetickerData={liveTickerData}
                                nameHome={macthDetailResponse && macthDetailResponse.header && macthDetailResponse.header.teams && macthDetailResponse.header.teams[0].name}
                                nameAway={macthDetailResponse && macthDetailResponse.header && macthDetailResponse.header.teams && macthDetailResponse.header.teams[1].name}
                            />
                            : macthDetailResponse.nav[selectedIndexType] === "stats" ?
                                <StatsComponent
                                    teamColors={macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.stats && macthDetailResponse.content.stats.teamColors}
                                    statsData={macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.stats && macthDetailResponse.content.stats.stats} />
                                : macthDetailResponse.nav[selectedIndexType] === "head to head" ?
                                    <HeadToHeadComponent h2h={macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.h2h} />
                                    : macthDetailResponse.nav[selectedIndexType] === "lineup" ?
                                        <LineUpComponent
                                            benchAway={macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.lineup && macthDetailResponse.content.lineup.bench && macthDetailResponse.content.lineup.bench[1]}
                                            benchHome={macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.lineup && macthDetailResponse.content.lineup.bench && macthDetailResponse.content.lineup.bench[0]}
                                            coachesAway={macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.lineup && macthDetailResponse.content.lineup.coaches && macthDetailResponse.content.lineup.coaches[1]}
                                            coachesHome={macthDetailResponse && macthDetailResponse.content && macthDetailResponse.content.lineup && macthDetailResponse.content.lineup.coaches && macthDetailResponse.content.lineup.coaches[0]}
                                            onClickPlayer={_onClickPlayer}
                                        /> : null
                    }
                </View>
            }
        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        macthDetailResponse: state.match.matchDetailResponse
    };
};

export default connect(mapStateToProps)(memo(MatchDetailPage));

