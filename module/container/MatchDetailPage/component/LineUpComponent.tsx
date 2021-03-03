import React, { memo } from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

interface LineUpComponentType {
  benchHome: Array<LineUpType>,
  benchAway: Array<LineUpType>,
  coachesHome: Array<LineUpType>,
  coachesAway: Array<LineUpType>
  onClickPlayer ?: (id : number) => void
}
interface LineUpType {
  imageUrl: string,
  id : string,
  name: { firstName: string, lastName: string }
}

const LineUpComponent = (props: LineUpComponentType) => {
    function onclick(id : string) {
      if (props.onClickPlayer) props.onClickPlayer(parseInt(id))
    }
  // component
  function _buildItem(title: string,home : Array<LineUpType>,away : Array<LineUpType>) {
    return (
      <View style={style.item}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>{title}</Text>
        <View style={style.playerContainer}>
          <View style={style.playerClub}>
            {home.map((item: LineUpType, index: number) => {
              return (
                <TouchableOpacity key={index} style={style.playerItemContainer} onPress={() => onclick(item.id)}>
                  <Image style={{ width: 40, height: 40, marginBottom: 10 }} source={{ uri: item.imageUrl }} />
                    <Text>{item.name.firstName} {item.name.lastName}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={{ width: 1, backgroundColor: '#E5E5E5' }}></View>
          <View style={style.playerClub}>
            {away.map((item: LineUpType, index: number) => {
              return (
                <TouchableOpacity key={index} style={style.playerItemContainer} onPress={() => onclick(item.id)}>
                  <Image style={{ width: 40, height: 40, marginBottom: 10 }} source={{ uri: item.imageUrl }} />
                  <Text>{item.name.firstName} {item.name.lastName}</Text>
                </TouchableOpacity>
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
