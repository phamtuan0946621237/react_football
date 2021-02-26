import React, { memo } from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';
import { StatusListMatchesItem } from '../../MatchPage/component/ListMatchComponent'
interface HeadToHeadComponentType {
  h2h: H2hType
}
interface H2hType {
  summary: Array<number>
  matches: Array<MatchH2hType>
}
interface MatchH2hType {
  away: { id: string, name: string },
  home: { id: string, name: string },
  league: { name: string, pageUrl: string },
  matchUrl: string,
  status: StatusListMatchesItem,
  time: string
}


const HeadToHeadComponent = (props: HeadToHeadComponentType) => {
  return (
    <View>
      <View style={style.headToHeadContainer}>
        <View style={style.headToHeadItemContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 5 }}>{props.h2h.summary[0]}</Text>
          <Text>Win</Text>
        </View>
        <View style={style.headToHeadItemContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 5 }}>{props.h2h.summary[1]}</Text>
          <Text>Draw</Text>
        </View>
        <View style={style.headToHeadItemContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 5 }}>{props.h2h.summary[2]}</Text>
          <Text>Win</Text>
        </View>
      </View>
      {props.h2h.matches.map((item: MatchH2hType, index: number) => {
        return (
          <View style={style.headToHeadItem} key={index}>
            <View style={style.timeItem}>
              <Text style={{ fontSize: 14, color: 'gray' }}>{item.time}</Text>
              <Text style={{ fontSize: 14, color: 'gray' }}>{item.league.name}</Text>
            </View>
            <View style={style.infoMatchItem}>
              <View style={[style.infoTeamItem, { justifyContent: 'flex-end' }]}>
                <Text>{item.home.name}</Text>
                <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={{ uri: `https://www.fotmob.com/images/team/${item.home.id}` }} />
              </View>
              <View style={style.result}>
                <Text>{item.status.scoreStr}</Text>
              </View>
              <View style={style.infoTeamItem}>
                <Image style={{ width: 30, height: 30, marginRight: 10 }} source={{ uri: `https://www.fotmob.com/images/team/${item.away.id}` }} />
                <Text>{item.away.name}</Text>
              </View>
            </View>
          </View>
        )
      })}
    </View>
  )
};

HeadToHeadComponent.defaultProps = {

};

export default memo(HeadToHeadComponent);
const style = StyleSheet.create({
  headToHeadContainer: {
    flexDirection: 'row',
    paddingVertical: 24,
    paddingHorizontal: 16

  },
  headToHeadItemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeItem: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  headToHeadItem: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E5E5E5'
  },
  infoTeamItem: {
    flex: 3,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center'
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  infoMatchItem: {
    flexDirection: 'row',
    padding: 16
  }
});
