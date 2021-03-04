import React, { memo } from 'react';
import {Image,StyleSheet, Text,TouchableOpacity, View} from 'react-native';

interface ListMatchComponent {
  items :  Array<ListMatchesItem>,
  nameLeague ?: string,
  onClick : (id : number) => void
}

interface ListMatchesItem {
  away : InfoTeam,
  home : InfoTeam,
  id : number,
  leagueId : number,
  status : StatusListMatchesItem
}
interface InfoTeam {
  id : number,
  name : string,
  score : number
}
export interface StatusListMatchesItem {
  cancelled : boolean,
  finished : boolean,
  startDateStr : string,
  startTimeStr : string,
  started : boolean,
  whoLostOnAggregated : string,
  scoreStr : string,
  reason : {long : string,short : string}
}

const ListMatchComponent = (props: ListMatchComponent) => {
  // action
  function _buildMatchItem(nameHome : string,iconHome : number,result : string,awayNameClub : string,iconAway : number,_onClick : () => void) {
    return (
      <TouchableOpacity style={styles.itemMatch} onPress={_onClick}>
          <View style={[styles.infoTeam,{justifyContent : "flex-end"}]}>
          <Text style={styles.infoHomeClub}>{nameHome}</Text>
            <Image style={{ width: 16, height: 16 }} source={{ uri: "https://www.fotmob.com/images/team/" + iconHome  }} />
          </View>
        <View style={styles.resultMatch}>
          <Text>{result}</Text>
        </View>
        <View style={styles.infoTeam}>
        <Image style={{ width: 16, height: 16 }} source={{ uri: "https://www.fotmob.com/images/team/" + iconAway }} />
        <Text style={styles.infoAwayClub}>{awayNameClub}</Text>
          
        </View>
      </TouchableOpacity>
    )
  }
  function _onClick(index : number) {
    props.onClick(index)
  }

  // layout
  return (
    <View>
      <View style={styles.section}>
      <Text>{props.nameLeague}</Text>
      </View>
      {props.items.map((item : ListMatchesItem,index : number) => {
        return (
          <View key={index}>
          {_buildMatchItem(item.home.name,item.home.id,item.status.started === true ? item.status.scoreStr : item.status.startTimeStr,item.away.name,item.away.id,() => _onClick(item.id))}
          </View>
        )
      })}
    </View>
  );
};

ListMatchComponent.defaultProps = {

};

export default memo(ListMatchComponent);
const styles = StyleSheet.create({
  infoTeam: {
    flexDirection: 'row',
    flex : 3,
    marginHorizontal : 16,
    alignItems : 'center'
  },
  itemMatch : {
    flexDirection : 'row',
    padding : 16,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderColor : '#F9F9FA',
    backgroundColor : 'white'
  },
  resultMatch : {
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  },
  infoHomeClub : {
    marginHorizontal : 16,
    textAlign : 'right'
  },
  infoAwayClub : {
    marginHorizontal : 16,
    textAlign : 'left'
  },
  section : {
    padding : 8
  }
});
