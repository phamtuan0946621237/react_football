import React, { memo } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';

interface LiveTickerComponentType {
  livetickerData: Array<LiveTickerItemType>
  nameHome : string,
  nameAway : string
}
interface LiveTickerItemType {
  IncidentCode: string,
  Elapsed: number,
  ElapsedPlus: number,
  Description: string,
  Players ?: Array<{Id : number,Name : string,TeamId : number}>
  HometeamEvent : boolean
}

const LiveTickerComponent = (props: LiveTickerComponentType) => {
  function _buildCardView(item : LiveTickerItemType) {
    return (
      <View style={style.infoCardContainer}>
        <Image style={{ width: 36, height: 36 }} source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${item.Players[0].Id}.png` }} />
        <View style={style.infoPlayer}>
            <Text>{item && item.Players !== undefined && item.Players[0].Name}</Text>
          <View style={style.infoClub}>
            <Image style={{ width: 16, height: 16 ,marginRight : 5}} source={{ uri: `https://www.fotmob.com/images/team/${item.Players[0].TeamId}` }} />
          <Text>{item.HometeamEvent === true ? props.nameHome :  props.nameAway}</Text>
          </View>
        </View>
        {item.IncidentCode === "YR" || item.IncidentCode === "YC" ? 
        <View style={{ width: 20, height: 28, backgroundColor: item.IncidentCode === "YR" ? 'red' : "yellow", borderRadius: 5 }}></View>
        : item.IncidentCode === "G" ? <Image style={{ width: 20, height: 20, }} source={{ uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/soccer_ball.png" }} />
        : <Text>AS</Text>
    }
      </View>
    )
  }

  function _buildSubstitution(item : LiveTickerItemType) {
    return (
      <View style={style.SubstitutionContainer}>
        <View style={style.infoPlayerSubstitution}>
          <Image style={{ width: 36, height: 36 }} source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${item.Players[0].Id}.png` }} />
          <Text style={{ marginVertical: 5 }}>{item && item.Players !== undefined && item.Players[0].Name}</Text>
          <View style={[style.infoClub,]}>
            <Image style={{ width: 16, height: 16 }} source={{ uri: `https://www.fotmob.com/images/team/${item && item.Players !== undefined && item.Players[0].TeamId}` }} />
            <Text> {item.HometeamEvent === true ? props.nameHome :  props.nameAway}</Text>
          </View>
        </View>
        <View style={style.infoPlayerSubstitution}>
          <Image style={{ width: 36, height: 36 }} source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${item.Players[1].Id}.png` }} />
          <Text style={{ marginVertical: 5 }}>{item && item.Players !== undefined && item.Players[1].Name}</Text>
          <View style={[style.infoClub,]}>
            <Image style={{ width: 16, height: 16 }} source={{ uri: `https://www.fotmob.com/images/team/${item && item.Players !== undefined && item.Players[0].TeamId}` }} />
            <Text>{item.HometeamEvent === true ? props.nameHome :  props.nameAway}</Text>
          </View>
        </View>
        <Image style={style.iconSubtitution} source={{ uri: "https://p.kindpng.com/picc/s/377-3772518_transfer-transparent-images-png-green-and-red-arrows.png" }} />
      </View>
    )
  }
  return (
    <View >
      {props.livetickerData.map((item: LiveTickerItemType, index: number) => {
        return (
          <View style={style.item}>
            <View style={{ marginRight: 16 }}>
              {item.Elapsed === 0 ? 
              <Image style={{ width: 24, height: 24 }} source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAASFBMVEVHcEwyMjIvLy8yMjIxMTEzMzMyMjIvLy8vLy8vLy8yMjIyMjIzMzMyMjIyMjIxMTEyMjIzMzMyMjIyMjIzMzMwMDAzMzMzMzOJbhwxAAAAF3RSTlMA4DBggPDvQCAQsH9Qv3CQwKBv0F8/r8m6EIEAAACvSURBVBgZhcFZVsMwFETBq/lJ8ZiB3v9OcSyRQ/IBVfxjuhwmPjUdGp9qOVQ+1Os8z1/XypuY1V2CPD92pWhgMUnJGFbdKphBvWlnKHKVkKUcqE5G11SIOkWKGp0cpsFwmZPXxqJhYZPxVLQSNURWFZ68NoKGwCY6ZWrSKVVSotu1MCUd0sSiSGfKHmvONcNnVYZFuXAqWYGXVZrvj8d9liK/TE4nV3jn475Gz9++AUdFDQ8/i/tbAAAAAElFTkSuQmCC" }} />
              : 
              <View >
              <Text>{item.Elapsed} </Text>
              <Text>{item.ElapsedPlus < 0 ? null : `+${item.ElapsedPlus}`}</Text>
              </View>
              }
            </View>
            <View style={{ flex: 1 }}>
              {/* {item.IncidentCode === "YC" || item.IncidentCode === "YR" || item.IncidentCode === "SI" || item.IncidentCode === "AS" || item.IncidentCode === "G" && 
              <Text style={{ fontWeight: "bold", marginBottom: 8 }}>ege</Text> 
            } */}
                {item.IncidentCode === "YC" ? 
                <Text style={{ fontWeight: "bold", marginBottom: 8 ,color : 'yellow'}}>YELLOW CARD</Text> 
                :  item.IncidentCode === "YR" ? 
                <Text style={{ fontWeight: "bold", marginBottom: 8,color : 'red' }}>RED CARD</Text> :
                item.IncidentCode === "AS" ? 
                <Text style={{ fontWeight: "bold", marginBottom: 8,color : 'blue' }}>ASSIST</Text> : 
                item.IncidentCode === "SI" ? 
                <Text style={{ fontWeight: "bold", marginBottom: 8 ,color : 'black'}}>SUBSTITUTION</Text> : 
                item.IncidentCode === "G" ? 
                <Text style={{ fontWeight: "bold", marginBottom: 8 ,color : 'green'}}>GOALS</Text> : null
              }
              <Text >{item.Description}</Text>
              {/* {} */}
              {item.IncidentCode === "YC" || item.IncidentCode === "YR" || item.IncidentCode === "G" || item.IncidentCode === "AS"?
                  _buildCardView(item) : 
                  item.IncidentCode === "SI" ? 
                  _buildSubstitution(item) : null
              }
            </View>
          </View>
        )
      })}

    </View>
  );
};

LiveTickerComponent.defaultProps = {

};

export default memo(LiveTickerComponent);
const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop : 16
  },
  infoClub: {
    flexDirection: 'row',
    marginTop: 5
  },
  infoCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#E5E5E5',
    flex: 1,
    marginTop: 16

  },
  infoPlayer: {
    flex: 1,
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  SubstitutionContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  infoPlayerSubstitution: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    marginHorizontal: 5,
    paddingVertical : 8
  },
  iconSubtitution: {
    width: 30,
    height: 30,
    position: 'absolute',
    alignSelf: 'center',
    left: '45%',
    backgroundColor: 'white',
    borderRadius: 16
  }
});
