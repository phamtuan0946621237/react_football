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
import { StatusListMatchesItem } from '../../MatchPage/component/ListMatchComponent';

interface FixturesClubComponentType {
  fixturesData: [FixturesDataType][]
}
interface FixturesDataType {
  id: number,
  isPastMatch: boolean,
  lnameArr: Array<string>,
  monthYearKey: string,
  notStarted: string,
  opponent: { id: number, name: string, score: number },
  pageUrl: string,
  status: StatusListMatchesItem
}


const FixturesClubComponent = (props: FixturesClubComponentType) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      {props.fixturesData.map((itemmm: [FixturesDataType], index: number) => {
        return (
          <View style={{ padding: 16 }}>
            <Text style={style.title}>{itemmm[0].monthYearKey}</Text>
            {itemmm.map((item: FixturesDataType, i: number) => {
              return (
                <View style={style.infoContainer}>
                  <Image style={{ width: 40, height: 40 }} source={{ uri: `https://www.fotmob.com/images/team/${item.opponent.id}` }} />
                  <View style={style.right}>
                    <View style={style.info}>
                      <Text style={{ fontSize: 16 }}>{item.opponent.name}</Text>
                      <Text style={{ fontSize: 20 }}>{item.status.startDateStr}</Text>
                    </View>
                    <View style={style.info}>
                      <Text style={{ color: 'gray', fontWeight: '700' }}>{item.lnameArr[0]} {item.lnameArr[1]}</Text>
                      <Text >{item.status.started === true ? item.status.scoreStr : item.status.startTimeStr}</Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </View>
        )
      })

      }

    </View>
  );
};

FixturesClubComponent.defaultProps = {

};

export default memo(FixturesClubComponent);
const style = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,

  },
  right: {
    flex: 1,
    marginLeft: 16
  },
  infoContainer: {
    flexDirection: 'row',
    padding: 16,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 16
  }
});
