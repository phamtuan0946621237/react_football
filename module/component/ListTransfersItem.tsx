import React, { memo } from 'react';
import {Image,StyleSheet, Text,TouchableOpacity, View} from 'react-native';

export interface ListTableItemType {
  key: any,
  marketValue: string,
  contract: string,
  titleContract: string,
  fee: string,
  club: string,
  idClub: number,
  fromTO: string,
  namePlayer: string,
  position: string,
  idPlayer: number,
  time: string,
  title: string
  isLeague ?: boolean,
  fromClub ?: string,
  fromClubId ?: number,
  toClubId ?: number,
  toClub ?: string,
  onClick ?: () => void
}

const ListTransfersItem = (props: ListTableItemType) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={{ marginTop: 16 }} key={props.key}>
      <View style={style.containerItem}>
        <Text style={style.time}>{props.time}</Text>
        <View>
          <Image style={style.iconPlayer} source={{ uri: props.idPlayer !== 0 ? `https://images.fotmob.com/image_resources/playerimages/${props.idPlayer}.png`: "https://prepa-sante-l1.com/wp-content/uploads/2020/10/professeur-medecine-prepa-sante-montpellier.png" }} />
          {props.position &&
            <View style={style.position}>
              <Text>{props.position}</Text>
            </View>
          }
        </View>

        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{props.namePlayer}</Text>

          {props.isLeague ? 
            <View style={{flexDirection : 'row',alignItems : 'center'}}>
              <View style={{flex : 1,flexDirection : 'row',alignItems : 'center',justifyContent : 'flex-end'}}>
                <Text style={{flex : 1,textAlign : 'right'}}>{props.fromClub}</Text>
                <Image source={{ uri: "https://www.fotmob.com/images/team/" + props.fromClubId }}  style={{width : 24,height : 24,marginLeft : 10}}/>
              </View>
              <Image source={{uri : "https://www.pinclipart.com/picdir/middle/129-1290254_arrow-right-2-buy-clip-art-green-arrow.png"}} style={{width : 16,height : 16,marginHorizontal : 10}}/>
              <View style={{flex : 1,flexDirection : 'row',alignItems : 'center'}}>
              <Image source={{ uri: "https://www.fotmob.com/images/team/" + props.toClubId }}  style={{width : 24,height : 24 , marginRight : 10}}/>
                <Text style={{flex : 1}}>{props.toClub}</Text>
              </View>
            </View>
          :  
          <View style={style.infoClub}>
          {props.title !== "contract" &&
            <Text>{props.fromTO} </Text>
          }
          {props.idClub &&
            <Image style={{ width: 20, height: 20, marginRight: 5 }} source={{ uri: "https://www.fotmob.com/images/team/" + props.idClub }} />
          }
          <Text>{props.club}</Text>
        </View>
        }
        

        <View style={style.fee}>
          {props.title !== "contract" &&
            <Text style={{ marginRight: 10 }}><Text style={{ fontWeight: 'bold' }}>Fee </Text> {props.fee}</Text>
          }
          <Text><Text style={{ fontWeight: '500' }}>{props.titleContract}</Text> {props.contract}</Text>
        </View>
        {props.marketValue &&
          <Text><Text style={{ fontWeight: '500' }}>Market Value</Text>{props.marketValue}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

ListTransfersItem.defaultProps = {

};

export default memo(ListTransfersItem);
const style = StyleSheet.create({
  iconPlayer: {
    width: 50, height: 50,
    borderRadius : 25
  },
  position: {
    padding: 5,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -10,
    left: 30,
    borderRadius: 10
  },
  infoClub: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10

  },
  fee: {
    flexDirection: 'row',
    marginVertical: 10
  },
  containerItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 16
  },
  time: {
    position: 'absolute',
    top: 16, right: 16,
    color: 'gray'
  }
});
