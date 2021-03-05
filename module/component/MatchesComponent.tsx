import React, { memo } from 'react';
import {Image,StyleSheet, Text,TouchableOpacity, View} from 'react-native';

interface MatchesComponentType {
  onClick?: () => void
  nameHome?: string
  result?: string,
  iconHome?: string,
  iconAway?: string,
  awayNameClub : any
}

const MatchesItemComponent = (props: MatchesComponentType) => {
  return (
    <TouchableOpacity style={styles.itemMatch} onPress={props.onClick}>
          <View style={[styles.infoTeam,{justifyContent : "flex-end"}]}>
          <Text style={styles.infoHomeClub}>{props.nameHome}</Text>
            <Image style={{ width: 16, height: 16 }} source={{ uri: "https://www.fotmob.com/images/team/" + props.iconHome  }} />
          </View>
        <View style={styles.resultMatch}>
          <Text>{props.result}</Text>
        </View>
        <View style={styles.infoTeam}>
        <Image style={{ width: 16, height: 16 }} source={{ uri: "https://www.fotmob.com/images/team/" + props.iconAway }} />
        <Text style={styles.infoAwayClub}>{props.awayNameClub}</Text>
          
        </View>
      </TouchableOpacity>
  );
};

MatchesItemComponent.defaultProps = {

};

export default memo(MatchesItemComponent);
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
    borderColor : 'rgba(124,141,163,0.3)',
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
