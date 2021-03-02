import React, { memo } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType
} from 'react-native';

interface ListNewsItemType {
  onClick?: () => void
  icon?: string
  describle?: string,
  source?: string,
  iconSource?: string,
  key : any
}

const ListNewsItem = (props: ListNewsItemType) => {

  return (
    <TouchableOpacity key={props.key} style={style.container} onPress={props.onClick}>
      <Image style={style.icon} source={{ uri: props.icon }} />
      <Text style={{ fontSize: 16, marginVertical: 16 }}>{props.describle}</Text>
      <View style={style.source}>
        <Image style={{ width: 16, height: 16 }} source={{ uri: props.iconSource }} />
        <Text style={{ fontSize: 12, color: 'gray', marginLeft: 10 }}>{props.source}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListNewsItem.defaultProps = {

};

export default memo(ListNewsItem);
const style = StyleSheet.create({
  container: {
    padding: 16
  },
  icon: {
    width: Dimensions.get('window').width - 32,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 16
  },
  source: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
