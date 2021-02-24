import React,{memo, useEffect} from 'react';
import { Text, TouchableOpacity, View ,FlatList} from 'react-native';
import { MacthRoute } from '../../../navigation';
import { connect, useDispatch } from 'react-redux';
import ListMatchComponent from './component/ListMatchComponent'
import {matchAction} from '../../../redux/action/match'
import {
    useFocusEffect,
    useNavigation,
  } from '@react-navigation/native';

const MatchPage = (props : any) => {
    //variable
    const { macthResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    // life cycle
    useEffect(() => {
        dispatch(matchAction({date : "20210224",sortOnClient : true}))
        return () => {};
    },[])

    useEffect(() => {
        console.log("macthResponse",macthResponse)
        
    },[macthResponse])

    return (
        <View style={{flex : 1}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={macthResponse !== undefined ? macthResponse.leagues : []}
                renderItem={({ item,index }) => (
                  <ListMatchComponent 
                  items={macthResponse.leagues !== undefined ? macthResponse.leagues[index].matches : []}
                  nameLeague={macthResponse.leagues[index].name}
                     />
                )}
                keyExtractor={(_, index) => index.toString()}
              />
        </View>
    )
}
const mapStateToProps = (state: any) => {
    return {
        macthResponse : state.match.matchResponse
    };
  };
  
  export default connect(mapStateToProps)(memo(MatchPage));