import { useNavigation, useRoute } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { playerAction } from '../../../redux/action/player';
import { ListNewsItem, ListTypeHorizontalComponent } from '../../component';
import { NewsType } from '../../type';
import CareerComponent from './component/CareerComponent';
import InfoPlayerComponent from './component/InfoPlayerComponent';
import style from './style';

const PlayerPage = (props: any) => {
    //variable
    const { playerResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const route = useRoute().params as { idPlayer: number }
    const [selectedTypeIndex, setSelectedTypeIndex] = useState<number>(0)
    const typePlayer = ["Info", "News", "Career"]

    // life cycle
    useEffect(() => {
        dispatch(playerAction({ id: route.idPlayer }))
    }, [])

    //action 
    function _chooseType(index: number) {
        setSelectedTypeIndex(index)
    }
    function onClickDetailNew(url : string) {
        if (url.slice(0,4) === "http") {
            Linking.openURL(url);
        }else {
            Linking.openURL("https://www.fotmob.com" + url);
        }
    }
    function _buildMainView() {
        switch (selectedTypeIndex) {
            case 0:
                return (
                    <InfoPlayerComponent
                        leagueInfo={playerResponse && playerResponse.lastLeague && playerResponse.lastLeague.playerProps}
                        leagueId={playerResponse && playerResponse.lastLeague && playerResponse.lastLeague.leagueId}
                        leagueName={playerResponse && playerResponse.lastLeague && playerResponse.lastLeague.leagueName}
                        playerProps={playerResponse && playerResponse.playerProps}
                        primaryPosition={playerResponse && playerResponse.origin && playerResponse.origin.positionDesc && playerResponse.origin.positionDesc.primaryPosition}
                        nonPrimaryPositions={playerResponse && playerResponse.origin && playerResponse.origin.positionDesc && playerResponse.origin.positionDesc.nonPrimaryPositions}
                    />
                );
            case 1:
                return (
                    <View>
                        {playerResponse && playerResponse.relatedNews.map((item : NewsType,index : number) => {
                            return (
                                <ListNewsItem  source={item.sourceStr} key={index} onClick={() => onClickDetailNew(item.page.url)} icon={item.imageUrl} iconSource = {item.sourceIconUrl} describle = {item.title} />
                            )
                        })}
                    </View>
                );
            case 2:
                return (
                    <CareerComponent careerData={playerResponse && playerResponse.careerHistory && playerResponse.careerHistory.careerData && playerResponse.careerHistory.careerData.careerItems} />
                )
            default:
                break;
        }
    }
    //layout
    return (
        <ScrollView>
            <View style={style.infoClub}>
                <Image style={{ width: 60, height: 60 }} source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${playerResponse && playerResponse.id}.png` }} />
                <View style={style.infoClubText}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{playerResponse && playerResponse.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 16, height: 16, marginRight: 10 }} source={{ uri: `https://www.fotmob.com/images/team/${playerResponse && playerResponse.origin && playerResponse.origin.teamId}` }} />
                        <Text style={{ fontSize: 16 }}>{playerResponse && playerResponse.origin && playerResponse.origin.teamName.toUpperCase()}</Text>
                    </View>
                </View>
            </View>
            <ListTypeHorizontalComponent
                data={typePlayer}
                onClick={_chooseType}
            />
            {_buildMainView()}
        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        playerResponse: state.player.playerResponse
    };
};

export default connect(mapStateToProps)(memo(PlayerPage));