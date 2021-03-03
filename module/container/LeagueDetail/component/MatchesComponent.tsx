import React, { memo } from 'react';
import {
  StyleSheet, Text,

  View
} from 'react-native';
import MatchesItem from '../../../component/MatchesComponent';
import { MatchesItemType } from '../../../type';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface MatchesComponentType {
  data: Array<any>
  onClick : (id ?: string) => void
}
const MatchesComponent = (props: MatchesComponentType) => {

  function _onClickDetail(item : MatchesItemType) {
    props.onClick(item.id)
  }
  return (
    <View>
      {Object.values(props.data).map((itemGrand: MatchesItemType[][], indexGrand: number) => {
        return (
          <View key = {indexGrand}>
            {Object.values(itemGrand).map((itemParrent: MatchesItemType[], indexParrent: number) => {
              return (
                <View key = {indexParrent}>
                  <Text style={{margin : 10}}>{Object.keys(itemGrand)[indexParrent]}</Text>
                  {itemParrent.map((item: MatchesItemType, index: number) => {
                    return (
                      <TouchableOpacity key={index} onPress={() => _onClickDetail(item)}>
                      <MatchesItem nameHome={item.home.name} iconHome={item.home.id} iconAway={item.away.id} awayNameClub={item.away.name} result={item.status?.started === true ? item.status.scoreStr : item.status?.startTimeStr} />
                      </TouchableOpacity>
                    )
                  })}
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  );
};

MatchesComponent.defaultProps = {

};

export default memo(MatchesComponent);
const style = StyleSheet.create({

});
