import React, { memo } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';

interface MatchFactsComponentType {
  playerOfTheMatch: PlayerOfTheMatchType
  teamFormHome: Array<TeamFormItemType>
  teamFormAway: Array<TeamFormItemType>
  macthDate: string,
  referee: string,
  Tournament: string,
  Stadium: string,
  events: Array<EventMatchFacts>
}
interface EventMatchFacts {
  card: string,
  minutesAddedStr : string,
  isHome: boolean,
  nameStr: string,
  overloadTimeStr: boolean,
  profileUrl: string,
  reactKey: string,
  time: string,
  timeStr: string,
  type: string,
  swap : Array<{name : string,profileUrl : string}>
}
interface TeamFormItemType {
  imageUrl: string,
  linkToMatch: string,
  result: number,
  teamPageUrl: string,
  tooltipText: string
}
interface PlayerOfTheMatchType {
  teamName: string,
  id: number,
  name: { firstName: string, lastName: string },
  pageUrl: string,
  rating: { num: string },
  teamId: number,

}

const MatchFactsComponent = (props: MatchFactsComponentType) => {
  function _buildInfoMatch(title: string, value: string) {
    return (
      <View style={style.infoMatch}>
        <Text style={{ flex: 2, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ flex: 4 }}>{value}</Text>
      </View>
    )
  }
  function _buildTeamFormItem(result: string, imageUrl: string) {
    return (
      <View>
        <View style={[style.resultContainer, { backgroundColor: result === "D" ? "gray" : result === "W" ? 'green' : "red" }]}>
          <Text>{result}</Text>
        </View>
        <Image source={{ uri: `https://www.fotmob.com/${imageUrl}` }} style={{ width: 20, height: 20 }} />
      </View>
    )
  }
  return (
    <View>
      {/* Player Match Star */}
      {props.playerOfTheMatch !== undefined ?
        <View style={style.infoPlayerOfTheMatchContainer}>
          <Text style={{ fontWeight: "500" }}>Player of the match</Text>
          <View style={style.infoPlayerOfTheMatch}>
            <Image style={{ width: 40, height: 40 }} source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${props.playerOfTheMatch.id}.png` }} />
            <View style={style.infoPlayer}>
              {props.playerOfTheMatch.name !== undefined &&
                <Text>{props.playerOfTheMatch.name.firstName} {props.playerOfTheMatch.name.lastName}</Text>
              }
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image style={{ width: 20, height: 20 }} source={{ uri: `https://www.fotmob.com/images/team/${props.playerOfTheMatch.teamId}` }} />
                <Text style={{ fontSize: 12, marginLeft: 5 }}>{props.playerOfTheMatch.teamName}</Text>
              </View>
            </View>
            <View style={{ paddingVertical: 4, paddingHorizontal: 10, backgroundColor: 'blue', borderRadius: 5, alignSelf: 'center' }}>
              <Text style={{ color: 'white' }}>{props.playerOfTheMatch && props.playerOfTheMatch.rating.num}</Text>
            </View>
          </View>
        </View>
        : null
      }

        {/* info Match */}
      <View style={style.infoMatchContainer}>
        {_buildInfoMatch("Match Date", props.macthDate)}
        {_buildInfoMatch("Tournament", props.Tournament)}
        {_buildInfoMatch("Stadium", props.Stadium)}
        {_buildInfoMatch("Referee", props.referee)}
      </View>

      {/* teamform */}
      <View style={style.teamFormLayout}>
        <View style={[style.teamFormContainer, { marginRight: 16 }]}>
          {props.teamFormHome.map((item: TeamFormItemType, index: number) => {
            return (
              <View key={index}>
              {_buildTeamFormItem(
                item.result === 0 ? "D" : item.result === 1 ? "W" : "L", item.imageUrl)}
                </View>
            )
          })}
        </View>
        <View style={[style.teamFormContainer, { marginLeft: 16 }]}>
          {props.teamFormAway.map((item: TeamFormItemType, index: number) => {
            return (
              <View key={index}>
              {_buildTeamFormItem(
                item.result === 0 ? "D" : item.result === 1 ? "W" : "L", item.imageUrl)}
                </View>
            )
          })}
        </View>
      </View>

        {/* event */}
      <View style={[style.eventContainer,]}>
        {props.events.map((item: EventMatchFacts, index: number) => {
          return (
            <View key={index} style={[style.eventItem, { flexDirection: item.isHome === true ? 'row' : "row-reverse", justifyContent : item.type !== "AddedTime" ? 'flex-start': 'center'}]}>
              {item.type !== "AddedTime" &&
                <Text style={{ fontWeight: 'bold' }}>{`${item.time}'`}</Text>
              }
              {item.type === "Card" ?
                <View style={{ width: 20, height: 30, backgroundColor: item.card === "Red" ? 'red' : "yellow", borderRadius: 5, marginHorizontal: 24 }}></View>
                :
                item.type === "Substitution" ?
                  <Image style={{ width: 30, height: 30, marginHorizontal: 24 }} source={{ uri: "https://as1.ftcdn.net/jpg/01/00/25/96/500_F_100259610_AZnqqJywN72DF88Un3sxbU2n6e6fM5xM.jpg" }} />
                  : item.type === "Goal" ?
                    <Image style={{ width: 30, height: 30, marginHorizontal: 24 }} source={{ uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/soccer_ball.png" }} />
                    : item.type === "AddedTime" ?
                      <View style={{ padding: 10, backgroundColor: '#F9F9FA', borderRadius: 10 }}>
                        <Text>{item.timeStr} {item.minutesAddedStr && item.minutesAddedStr}</Text>
                      </View>
                      : null

              }
              {item.type !== "AddedTime" &&
                item.type === "Substitution" ? 
                <View>
                  <Text style={{color : 'green'}}>{item.swap[0].name}</Text>
                  <Text style={{color : 'red'}}>{item.swap[1].name}</Text>
                </View> 
                : 
            <Text>{item.nameStr}</Text>

              }
            </View>
          )
        })}
      </View>
    </View>
  );
};

MatchFactsComponent.defaultProps = {

};

export default memo(MatchFactsComponent);
const style = StyleSheet.create({
  infoPlayerOfTheMatchContainer: {
    padding: 16,
    backgroundColor: 'white'
  },
  infoPlayerOfTheMatch: {
    flexDirection: 'row',
    paddingVertical: 16
  },
  infoPlayer: {
    flex: 1,
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  infoMatchContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#F9F9FA'
  },
  infoMatch: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  resultContainer: {
    width: 20, height: 20,

    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  teamFormContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flex: 1,

  },
  teamFormLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    backgroundColor: 'white'
  },
  eventItem: {
    alignItems: 'center',
    padding: 16,
    borderTopWidth : 1,
    borderColor : '#E5E5E5',
  },
  eventContainer: {
    backgroundColor: 'white',
    marginTop: 16
  }
});
