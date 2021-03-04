import React, { memo, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export interface StatsComponentType {
  dataStats: any
  onClickPlayer ?: (id : number) => void
  onClickTeam ?: (id : number) => void
}

interface StatsItemType {
  header: string,
  fetchAllUrl: string,
  topThree: Array<TopThreePlayerType>
}

interface TopThreePlayerType {
  id: number,
  name: string,
  teamId: number,
  teamName: string,
  value: string
}

interface TrophiesType {
  loser: { id: number, name: string, seasonName: string, winner: boolean }
  seasonName: string,
  winner: { id: number, name: string, seasonName: string, winner: boolean }
}

const StatsComponent = (props: StatsComponentType) => {
  // variable
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  //action
  function _onClickChooseType(index: number) {
    setSelectedIndex(index)
  }
  function onclickPlayer (id : number) {
    if (props.onClickPlayer) props.onClickPlayer(id)
  }
  function onclickTeam(id : number) {
    if (props.onClickTeam) props.onClickTeam(id)
  }

  // component
  function _buildPlayerItem(name: string, idPlayer: number, club: string, idClub: number, result: string) {
    return (
      <TouchableOpacity style={style.itemContainer} onPress={() => onclickPlayer(idPlayer)}>
        <Image style={{ width: 36, height: 36 }} source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${idPlayer}.png` }} />
        <View style={style.infoPlayer}>
          <Text style={{ fontWeight: '600' }}>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Image source={{ uri: `https://www.fotmob.com/images/team/${idClub}` }} style={{ width: 16, height: 16, marginRight: 10 }} />
            <Text>{club}</Text>
          </View>
        </View>
        <Text>{result}</Text>
      </TouchableOpacity>
    )
  }
  function _buildPlayerTopItem(name: string, idPlayer: number, club: string, idClub: number, result: string) {
    return (
      <TouchableOpacity style={style.playerTopContainer} onPress={() => onclickPlayer(idPlayer)}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '600', fontSize: 18 }}>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, marginTop: 5 }}>
            <Image source={{ uri: `https://www.fotmob.com/images/team/${idClub}` }} style={{ width: 20, height: 16, marginRight: 6 }} />
            <Text>{club}</Text>
          </View>
          <Text style={{ fontSize: 20, marginBottom: 16, fontWeight: '700', marginLeft: 10 }}>{result}</Text>
        </View>

        <Image style={{ width: 90, height: 90 }} source={{ uri: `https://images.fotmob.com/image_resources/playerimages/${idPlayer}.png` }} />
      </TouchableOpacity>
    )
  }

  function _buildTeamsTopView(nameClub: string, idClub: number, value: string) {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', padding: 16, backgroundColor: '#F5F5F5' }} onPress={() => onclickTeam(idClub)}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18 }}>{nameClub}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 16 }}>{value}</Text>
        </View>
        <Image source={{ uri: `https://www.fotmob.com/images/team/${idClub}` }} style={{ width: 60, height: 60 }} />
      </TouchableOpacity>
    )
  }

  function _buildTeamsView(nameClub: string, idClub: number, value: string) {
    return (
      <TouchableOpacity onPress={() => onclickTeam(idClub)} style={{ flexDirection: 'row', padding: 16, backgroundColor: 'white', alignItems: 'center', borderBottomWidth: 1, borderColor: '#F5F5F5' }}>
        <Image source={{ uri: `https://www.fotmob.com/images/team/${idClub}` }} style={{ width: 36, height: 36 }} />
        <Text style={{ flex: 1, marginLeft: 16, fontSize: 16, fontWeight: '500' }}>{nameClub}</Text>
        <Text style={{ fontSize: 16 }}>{value}</Text>
      </TouchableOpacity>
    )
  }

  function PlayerView() {
    return (
      <View>
        {props.dataStats && props.dataStats.players.map((items: StatsItemType, index: number) => {
          return (
            <View key={index} style={{ paddingBottom: 16, borderBottomWidth: 1, borderColor: "'rgba(255,145,173,0.5)'", paddingHorizontal: 16 }}>
              <Text style={{ marginVertical: 16, fontWeight: 'bold' }}>{items.header}</Text>
              <View style={{ borderRadius: 16, borderColor: "#F5F5F5", borderWidth: 1 }}>
                {items.topThree && items.topThree.map((item: TopThreePlayerType, index: number) => {
                  if (index === 0) {
                    return (
                      <View key ={index}>
                      {_buildPlayerTopItem(item.name, item.id, item.teamName, item.teamId, item.value)}
                      </View>
                    )
                  } else {
                    return (
                      <View key ={index}>
                      {_buildPlayerItem(item.name, item.id, item.teamName, item.teamId, item.value)}
                      </View>
                    )
                  }
                })
                }
              </View>
            </View>
          )
        })}

      </View>
    )
  }

  function _buildTrophiesView(nameUp: string, valueUp: string, idUp: number, nameDown: string, valueDown: string, idDown: number) {
    return (
      <View style={{ borderColor: 'rgba(255,145,173,0.5)', borderWidth: 1, borderRadius: 12 }}>
        <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center', borderBottomWidth: 1, borderColor: 'rgba(255,145,173,0.5)' }}>
          <Image source={{ uri: `https://www.fotmob.com/images/team/${idUp}` }} style={{ width: 36, height: 36 }} />
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text style={{ fontSize: 16, marginBottom: 8 }}>{nameUp}</Text>
            <Text style={{color : 'gray'}}>{valueUp}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>
          <Image source={{ uri: `https://www.fotmob.com/images/team/${idDown}` }} style={{ width: 36, height: 36 }} />
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text style={{ fontSize: 16, marginBottom: 8 }}>{nameDown}</Text>
            <Text style={{color : 'gray'}}>{valueDown}</Text>
          </View>
        </View>
      </View>
    )
  }

  function TeamsView() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        {props.dataStats && props.dataStats.teams.map((items: StatsItemType, index: number) => {
          return (
            <View key ={index} style={{ paddingHorizontal: 16, borderBottomWidth: 1, borderColor: 'rgba(255,145,173,0.5)' }}>
              <Text style={{ margin: 16, fontWeight: 'bold' }}>{items.header}</Text>
              <View style={{ borderRadius: 16, borderColor: "#F5F5F5", borderWidth: 1, marginBottom: 16 }}>
                {items.topThree.map((item: TopThreePlayerType, i: number) => {
                  if (i === 0) {
                    return (
                      <View key={i}>
                      {_buildTeamsTopView(item.name, item.teamId, item.value)}
                      </View>
                    )

                  } else {
                    return (
                      <View key={i}>
                      {_buildTeamsView(item.name, item.teamId, item.value)}
                      </View>
                    )
                  }

                })}
              </View>
            </View>
          )
        })}
      </View>

    )
  }

  function TrophiesView() {
    return (
      <View>
        {props.dataStats && props.dataStats.trophies.map((item: TrophiesType, index: number) => {
          return (
            <View key ={index} style={{ padding: 16, }}>
              <Text style={{ marginBottom: 16, fontWeight: 'bold' }}>{item.seasonName}</Text>
              {_buildTrophiesView(item.winner.name,"Winner",item.winner.id,item.loser.name,"Runner-up",item.loser.id)}
            </View>
          )
        })}
      </View>
    )
  }

  // main View
  return (
    <View style={style.container}>
      <ScrollView horizontal={true} style={{ backgroundColor: 'white', borderTopWidth: 1, borderColor: '#E5E5E5', borderBottomWidth: 1, }}>
        {props.dataStats && props.dataStats.tabs.map((item: string, index: number) => {
          return (
            <Text key={index} onPress={() => _onClickChooseType(index)} style={{ margin: 16, color: selectedIndex === index ? 'green' : 'black', fontWeight: 'bold' }}>{item}</Text>
          )
        })}
      </ScrollView>
      {props.dataStats && props.dataStats.tabs[selectedIndex] === "Players" ?
        PlayerView() : props.dataStats && props.dataStats.tabs[selectedIndex] === "Teams" ? TeamsView() : TrophiesView()
      }
    </View>
  );
};

StatsComponent.defaultProps = {

};

export default memo(StatsComponent);
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F5F5F5'
  },
  infoPlayer: {
    flex: 1,
    marginLeft: 16
  },
  playerTopContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#F5F5F5'
  }
});
