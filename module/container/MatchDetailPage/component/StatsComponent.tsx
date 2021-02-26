import React, { memo } from 'react';
import {
  StyleSheet, Text,View
} from 'react-native';

interface StatsComponentType {
  statsData: Array<StatsSectionType>
  teamColors?: { home: string, away: string }
}
interface StatsSectionType {
  title: string,
  stats: Array<StatsRowType>
}
interface StatsRowType {
  highlighted: string,
  stats: Array<any>,
  title: string,
  type: string
}


const StatsComponent = (props: StatsComponentType) => {
  return (
    <View>
      <Text style={style.title}>Top Stats</Text>
      {props.statsData.map((itemStas, index) => {
        return (
          <View style={style.statsSection} key={`section_stats _ ${index}`}>
            {props.statsData[index].stats.map((item, index) => {
              if (item.title === "Ball possession") {
                return (
                  <View key={`row_stats _ ${index}`}>
                    <Text style={{textAlign : "center",marginVertical : 8}}>{item.title}</Text>
                  <View style={style.statsRow} >
                    <View style={[style.info, { marginRight : 5,backgroundColor: props.teamColors?.home,width : `${parseInt(item.stats[0])}%` }]}>
                    <Text style={{color : 'white'}}>{item.stats[0]}%</Text>
                    </View>
                    <View style={[style.info, { backgroundColor: props.teamColors?.away ,width : `${parseInt(item.stats[1])}%` }]}>
                    <Text style={{textAlign : 'right',color : 'white'}}>{item.stats[1]}%</Text>
                    </View>
                  </View>
                  </View>
                )
              } else {
                return (
                  <View style={style.statsRow} key={`row_stats _ ${index}`}>
                    <View style={[style.info, { backgroundColor: props.teamColors?.home }]}>
                      <Text style={{color : 'white'}}>{item.stats[0]}</Text>
                    </View>
                    <Text style={style.titleStatsItem}>{item.title}</Text>
                    <View style={[style.info, { backgroundColor: props.teamColors?.away }]}>
                      <Text style={{color : 'white'}}>{item.stats[1]}</Text>
                    </View>
                  </View>
                )
              }

            })}
          </View>
        )
      })}
    </View>
  )
};

StatsComponent.defaultProps = {

};

export default memo(StatsComponent);
const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 16
  },
  info: {
    paddingVertical: 5,
    paddingHorizontal : 8,
    borderRadius: 5
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleStatsItem: {
    flex: 1,
    textAlign: 'center'
  },
  statsSection: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingBottom: 16
  }
});
