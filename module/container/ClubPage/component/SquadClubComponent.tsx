import React, { memo } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { ListTableItem } from '../../../component'
import { ListTableItemType } from '../../../component/ListTableItem'

interface SquadClubComponentType {
  data: [string, Array<SquadType>]
}

interface SquadType {
  ccode: string,
  cname: string,
  id: number,
  name: string
}


const SquadClubComponent = (props: SquadClubComponentType) => {

  return (
    <View style={{ backgroundColor: 'white', borderTopWidth: 1, borderColor: '#E5E5E5' }}>

      {props.data.map((item: any, index: number) => {
        return (
          <View style={style.item}>
            <Text style={style.title}>{item[0].toUpperCase()}</Text>
            {item[1] && item[1].map((items: SquadType, i: number) => {
              return (
                <View style={style.infoItem}>
                  <Image source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${items.id}.png` }} style={style.icon} />
                  <View style={style.info}>
                    <Text style={{fontWeight : '600'}}>{items.name}</Text>
                    <Text>{items.cname}</Text>
                  </View>
                </View>
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
