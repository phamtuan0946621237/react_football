import React, { memo } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
// import style from '../../MatchDetailPage/style';

interface SearchComponentType {

}

const SearchComponent = (props: SearchComponentType) => {

  return (
    <View style={style.section}>
      <Text style={{fontWeight : 'bold',fontSize : 16,margin : 16}}>kaejnf</Text>
      <View style={style.row}>
        <Image style={{width : 30,height : 30,marginRight : 16}} source={{uri : `https://www.fotmob.com/images/team/${9906}`}}/>
        <Text>Altic Madird</Text>
      </View>
    </View>
  );
};

SearchComponent.defaultProps = {

};

export default memo(SearchComponent);
const style = StyleSheet.create({
  section : {
    // paddin
    backgroundColor : 'white'
  },
  row : {
    flexDirection : 'row',
    alignItems : 'center',
    paddingVertical : 10,
    paddingHorizontal : 16,
    backgroundColor : 'white'
  }
});
