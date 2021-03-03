import React, { memo } from 'react';
import {
  Image,

  StyleSheet, Text,

  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SquadClubComponentType {
  data: [string, Array<SquadType>]
  onClickPlayer ?: (id : number) => void
}

interface SquadType {
  ccode: string,
  cname: string,
  id: number,
  name: string
}


const SquadClubComponent = (props: SquadClubComponentType) => {

  function _onClickPlayer(id : number) {
    if (props.onClickPlayer) props.onClickPlayer(id)
  }
  return (
    <View style={{ backgroundColor: 'white', borderTopWidth: 1, borderColor: '#E5E5E5' }}>

      {props.data.map((item: any, index: number) => {
        return (
          <View key={index} style={style.item}>
            <Text style={style.title}>{item[0].toUpperCase()}</Text>
            {item[1] && item[1].map((items: SquadType, i: number) => {
              return (
                <TouchableOpacity key={i} style={style.infoItem} onPress={() => _onClickPlayer(items.id)}>
                  <Image source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${items.id}.png` }} style={style.icon} />
                  <View style={style.info}>
                    <Text style={{fontWeight : '600'}}>{items.name}</Text>
                    <Text>{items.cname}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}



          </View>
        )
      })}



    </View>
  );
};

SquadClubComponent.defaultProps = {

};

export default memo(SquadClubComponent);
const style = StyleSheet.create({
  item: {
    padding: 16
  },
  title: {
    // marginBottom : 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  icon: {
    width: 40, height: 40
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 16
  },
  infoItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 16,
    borderRadius: 16,
    marginTop: 16
  }

});
