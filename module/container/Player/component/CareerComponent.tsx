import React, { memo } from 'react';
import {Image,StyleSheet, Text,View} from 'react-native';

interface CareerComponentType {
  careerData: Array<CareerItemType>[]
}

interface CareerItemType {
  appearances: string
  endDate: string
  goals: string
  hasUncertainData: boolean
  participantId: number
  startDate: string
  team: string
  teamId: number
}

const CareerComponent = (props: CareerComponentType) => {
  // layout
  return (
    <View>
      <View style={style.titleContainer}>
        <Text style={{ fontWeight: 'bold', flex: 1 }}>CAREER</Text>
        <Image style={{ width: 24, height: 24 }} source={{ uri: "https://cdn2.iconfinder.com/data/icons/soccer-and-football-match-1/48/08_stadium_arena_soccer_football_sport_competition_field-512.png" }} />
        <Image style={{ width: 24, height: 24, marginLeft: 16 }} source={{ uri: "https://cdn1.iconfinder.com/data/icons/education-259/100/education-19-512.png" }} />
      </View>
      {props.careerData && Object.values(props.careerData).map((itemss: Array<CareerItemType>, i: number) => {
        return (
          <View key={i} style={{ paddingHorizontal: 16, backgroundColor: 'white', }}>
            <Text style={{ marginVertical: 16 }}>{Object.keys(props.careerData)[i].toUpperCase()}</Text>
            {itemss.map((item: CareerItemType, index: number) => {
              return (
                <View style={style.careerItemContainer} key={index}>
                  <Image style={{ width: 32, height: 32 }} source={{ uri: `https://www.fotmob.com/images/team/${item.teamId}` }} />
                  <View style={style.infoText}>
                    <Text>{item.team}</Text>
                    <Text style={{ color: 'gray', marginTop: 5 }}>{item.startDate} - {item.endDate}</Text>
                  </View>
                  <Text>{item.appearances}</Text>
                  <Text style={{ marginLeft: 16 }}>{item.goals}</Text>
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  );
};

CareerComponent.defaultProps = {

};

export default memo(CareerComponent);
const style = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DEDEDE'
  },
  careerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor : 'white',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#DEDEDE'

  },
  infoText: {
    flex: 1,
    marginHorizontal: 16
  }
});
