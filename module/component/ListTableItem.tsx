import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListTableItemType } from '../type';


const ListTableItem = (props: ListTableItemType) => {

  return (
    <TouchableOpacity style={style.container} key={props.key} onPress={props.onClick}>
      <Text style={style.stt}>{props.stt}</Text>
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        {props.isShowIcon ?
          <Image style={{ width: 16, height: 16, marginRight: 10 }} source={{ uri: `https://www.fotmob.com/images/team/${props.id}` }} />
          : null
        }

      <Text style={style.team} numberOfLines={1}>{props.name}</Text>
      </View>
      <Text style={style.info}>{props.played}</Text>
      <Text style={style.info}>{props.wins}</Text>
      <Text style={style.info}>{props.draws}</Text>
      <Text style={style.info}>{props.losses}</Text>
      <Text style={style.info}>{props.goalConDiff}</Text>
      <Text style={style.info}>{props.pts}</Text>
    </TouchableOpacity>
  );
};

ListTableItem.defaultProps = {

};

export default memo(ListTableItem);
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical : 10

  },
  team: {
    flex: 1
  },
  info: {
    marginRight: 5,
    width: 25,
    textAlign: 'center'
  },
  stt: {
    marginLeft: 10,
    width: 25,
    // textAlign: 'center'
  }
});
