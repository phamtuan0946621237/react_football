import React, { memo } from 'react';
import {Image,StyleSheet, Text,View} from 'react-native';

interface InfoPlayerComponentType {
  playerProps: Array<PlayerPropsType>
  primaryPosition: string,
  nonPrimaryPositions?: string
  leagueId: number,
  leagueName: string,
  leagueInfo: Array<PlayerPropsType>
}
interface PlayerPropsType {
  value: string,
  title: string,
  ratingProps?: { num: string, bgcolor: string }
}

const InfoPlayerComponent = (props: InfoPlayerComponentType) => {
  // layout
  return (
    <View>
      <View style={style.playerPropsContainer}>
        <View style={style.playerProps}>
          {props.playerProps && props.playerProps.map((item: PlayerPropsType, index: number) => {
            if (index < 3) {
              return (
                <View key={index} style={style.itemPlayerProps}>
                  <Text style={{ color: 'gray', marginBottom: 10 }}>{item.title}</Text>
                  <Text>{item.value}</Text>
                </View>
              )
            }

          })}
        </View>
        {props.playerProps && props.playerProps.length > 2 &&
          <View style={style.playerProps}>
            {props.playerProps && props.playerProps.map((item: PlayerPropsType, index: number) => {
              if (index > 2) {
                return (
                  <View key={index} style={style.itemPlayerProps}>
                    <Text style={{ color: 'gray', marginBottom: 10 }}>{item.title}</Text>
                    <Text>{item.value}</Text>
                  </View>
                )
              }
            })}
          </View>
        }
      </View>
      <View style={style.playerPositionContainer}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Player Positions</Text>
        <Text style={{ fontWeight: '700', marginTop: 16, marginBottom: 8 }}>Primary</Text>
        <Text>{props.primaryPosition}</Text>
      </View>
      {props.nonPrimaryPositions &&
        <View style={style.playerPositionContainer}>
          <Text style={{ fontWeight: '700', marginBottom: 8, color: 'gray' }}>Other</Text>
          <Text>{props.nonPrimaryPositions}</Text>
        </View>
      }
      {props.leagueInfo &&
        <View style={style.leagueContainer}>
          <View style={style.infoLeague}>
            <Image source={{ uri: `https://www.fotmob.com/images/league/${props.leagueId}` }} style={{ width: 24, height: 24 }} />
            <Text style={{ fontWeight: 'bold', marginLeft: 16 }}>{props.leagueName}</Text>
          </View>
          <View style={style.playerProps}>
            {props.leagueInfo && props.leagueInfo.map((item: PlayerPropsType, index: number) => {
              if (index < 2) {
                return (
                  <View key={index} style={style.itemPlayerProps}>
                    <Text style={{ color: 'gray', marginBottom: 10 }}>{item.title}</Text>
                    <Text style={{ fontSize: 20 }}>{item.value}</Text>
                  </View>
                )
              }
            })}
          </View>
          <View style={style.playerProps}>
            {props.leagueInfo && props.leagueInfo.map((item: PlayerPropsType, index: number) => {
              if (index > 1) {
                return (
                  <View key={index} style={style.itemPlayerProps}>
                    <Text style={{ color: 'gray', marginBottom: 10 }}>{item.title}</Text>
                    {item.ratingProps ?
                      <View style={{ paddingHorizontal: 5, backgroundColor: item.ratingProps.bgcolor, borderRadius: 5 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{item.ratingProps.num}</Text>
                      </View>
                      :
                      <Text style={{ fontSize: 20 }}>{item.value}</Text>
                    }
                  </View>
                )
              }
            })}
          </View>
        </View>
      }
    </View>
  );
};

InfoPlayerComponent.defaultProps = {

};

export default memo(InfoPlayerComponent);
const style = StyleSheet.create({
  playerProps: {
    flexDirection: 'row',
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'rgba(124,141,163,0.5)'
  },
  itemPlayerProps: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  playerPropsContainer: {
    margin: 16,
    borderWidth: 1,
    borderColor: 'rgba(124,141,163,0.5)',
  },
  playerPositionContainer: {
    paddingVertical: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(124,141,163,0.5)'
  },
  infoLeague: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(124,141,163,0.5)'
  },
  leagueContainer: {
    margin: 16
  }
});
