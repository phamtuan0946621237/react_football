import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface LineUpComponentType {
  benchHome: Array<LineUpType>,
  benchAway: Array<LineUpType>,
  coachesHome: Array<LineUpType>,
  coachesAway: Array<LineUpType>
}
interface LineUpType {
  imageUrl: string,
  name: { firstName: string, lastName: string }
}

const LineUpComponent = (props: LineUpComponentType) => {
  
  // component
  function _buildItem(title: string,home : Array<LineUpType>,away : Array<LineUpType>) {
    return (
      <View style={style.item}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>{title}</Text>
        <View style={style.playerContainer}>
          <View style={style.playerClub}>
            {home.map((item: LineUpType, index: number) => {
              return (
                <View style={style.playerItemContainer}>
                  <Image style={{ width: 40, height: 40, marginBottom: 10 }} source={{ uri: item.imageUrl }} />
                    <Text>{item.name.firstName} {item.name.lastName}</Text>
                </View>
              )
            })}
          </View>
          <View style={{ width: 1, backgroundColor: '#E5E5E5' }}></View>
          <View style={style.playerClub}>
            {away.map((item: LineUpType, index: number) => {
              return (
                <View style={style.playerItemContainer}>
                  <Image style={{ width: 40, height: 40, marginBottom: 10 }} source={{ uri: item.imageUrl }} />
                  <Text>{item.name.firstName} {item.name.lastName}</Text>
                </View>
              )
            })}
          </View>

        </View>
      </View>
    )
  }

  // main
  return (
    <View>
      {_buildItem("Coach",props.coachesHome,props.coachesAway)}
      {_buildItem("Bench",props.benchHome,props.benchAway)}
    </View>
  )
};

LineUpComponent.defaultProps = {

};

export default memo(LineUpComponent);
const style = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    marginTop: 24
  },
  playerContainer: {
    flexDirection: 'row',
    marginTop: 16

  },
  playerItemContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  playerClub: {
    flex: 1,
    flexDirection: "column",
  }
});
