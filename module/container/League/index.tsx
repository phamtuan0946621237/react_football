import { useNavigation } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { LeagueNavigator } from '../../../navigation';
import { leagueAction } from '../../../redux/action/league';
import style from './style';

export interface RouteLeague {
    id : string,
    name  : string
}
const LeaguePage = (props: any) => {
    //variable
    const { leagueResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    let arrUp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IQCBODtt-FkmBbpDm0zUTmPzzVh91jdCYA&usqp=CAU"
    let arrDown = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-ywUVHBNam3DS8gXfLDGYf7lpS98npeAhw&usqp=CAU"
    const [isShow,setIsShow] = useState<boolean>(false)
    const [selectedIndex,setSelectedIndex] = useState<number>()

    // life cycle
    useEffect(() => {
        dispatch(leagueAction({}))
    }, [])

    // action
    function _onClickArr(index : number) {
        setSelectedIndex(index)
        setIsShow(!isShow)
    }
    function onClick(url : string) {
        var first = url.slice(9)
      var index = first.indexOf("/")
      var id = first.slice(0, index)
      var second = first.slice(index, first.length)
      var name = second.slice(10, first.length)
        navigation.navigate(LeagueNavigator.leagueDetailRoute,{id : id,name : name} as RouteLeague)
    }

    //layout
    return (
        <ScrollView style={style.container}>
            {leagueResponse && Object.values(leagueResponse).map((items: any, i: number) => {
                if (items !== null) {
                    return (
                        <View key={i}>
                            <Text style={style.title} >{i === 1 ? "POPULAR" : i === 2 ? "WORLD" : "COUNTRIES"}</Text>
                            {items.map((item: any, index: number) => {
                                    return (
                                        <View key = {index}>
                                            <TouchableOpacity style={style.item} onPress={item.leagues ? () => {} : () => onClick(item.pageUrl)} activeOpacity = {item.leagues ? 1:  0.5}>
                                                <Image style={{ width: 24, height: 24, marginRight: 16 }} source={{ uri: item.leagues ? `https://images.fotmob.com/image_resources/logo/teamlogo/${item.ccode.toLowerCase()}.png` :`https://www.fotmob.com/images/league/${item.id}` }} />
                                                <Text style={{ flex: 1 }}>{item.name}</Text>
                                                {item.leagues &&
                                                    <TouchableOpacity style={style.iconArrContainer} onPress = {() => _onClickArr(index)}>
                                                        <Image style={{ width: 16, height: 16 }} source={{ uri: isShow === true && selectedIndex === index ? arrUp : arrDown }} />
                                                    </TouchableOpacity>
                                                }
                                            </TouchableOpacity>
                                            {
                                            selectedIndex === index && isShow === true && 
                                            item.leagues && item.leagues.map((itemLeague: any, indexLeague: number) => {
                                                return (
                                                    <Text onPress = {() => onClick(itemLeague.pageUrl)} key={indexLeague} style={{ paddingVertical: 8 }}>{itemLeague.name}</Text>
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
    };
};

export default connect(mapStateToProps)(memo(LeaguePage));