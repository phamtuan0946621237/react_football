import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { memo, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { connect, useDispatch } from 'react-redux';
import { leagueAction } from '../../../redux/action/league'
import { matchAction } from '../../../redux/action/match';
import ListMatchComponent from './component/ListMatchComponent';
import { Navigator, LeagueNavigator } from '../../../navigation'
import style from './style';
import { ScrollView } from 'react-native-gesture-handler';
const LeaguePage = (props: any) => {
    //variable
    const { leagueResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    let arrUp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IQCBODtt-FkmBbpDm0zUTmPzzVh91jdCYA&usqp=CAU"
    let arrDown = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-ywUVHBNam3DS8gXfLDGYf7lpS98npeAhw&usqp=CAU"
    const [isShow,setIsShow] = useState<boolean>(false)
    // const [data, setData] = useState()
    useEffect(() => {
        dispatch(leagueAction({}))
    }, [])

    useEffect(() => {
        console.log('leagueResponse', leagueResponse)
    }, [leagueResponse])
    // call API
    const fetchApiCall = () => {
        fetch("https://www.fotmob.com/allLeagues", {
            "method": "POST",
        })
            .then(response => response.json())
            .then(response => {
                console.log("response", response)
                // setData(response)
            })
            .catch(err => {
                console.log(err);
            });
    }

    function _onClickArr() {
        setIsShow(!isShow)
    }
    //layout
    console.log("Object : ", Object.values(leagueResponse))
    function onClick() {
        navigation.navigate(LeagueNavigator.leagueDetailRoute)
    }
    return (
        <ScrollView style={style.container}>
            {Object.values(leagueResponse).map((items: any, i: number) => {
                if (items !== null) {
                    return (
                        <View key={i}>
                            <Text style={style.title} onPress={onClick}>LeaguePage</Text>
                            {items.map((item: any, index: number) => {
                                    return (
                                        <View>
                                            <TouchableOpacity style={style.item}>
                                                <Image style={{ width: 24, height: 24, marginRight: 16 }} source={{ uri: item.leagues ? `https://images.fotmob.com/image_resources/logo/teamlogo/${item.ccode.toLowerCase()}.png` :`https://www.fotmob.com/images/league/${item.id}` }} />
                                                <Text style={{ flex: 1 }}>{item.name}</Text>
                                                {item.leagues &&
                                                    <TouchableOpacity style={style.iconArrContainer} onPress = {_onClickArr}>
                                                        <Image style={{ width: 16, height: 16 }} source={{ uri: isShow === false ? arrDown : arrUp }} />
                                                    </TouchableOpacity>
                                                }
                                            </TouchableOpacity>
                                            {isShow === true && item.leagues && item.leagues.map((itemLeague: any, indexLeague: number) => {
                                                return (
                                                    <Text style={{ paddingVertical: 8 }}>{itemLeague.name}</Text>
                                                )
                                            })}

                                        </View>
                                    )
                                })}

                        </View>
                    )
                }

            })}


        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        leagueResponse: state.league.leagueResponse
        // macthResponse: state.match.matchResponse
    };
};

export default connect(mapStateToProps)(memo(LeaguePage));