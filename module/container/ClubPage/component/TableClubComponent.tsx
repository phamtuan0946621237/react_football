import React, { memo } from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { ListTableItem } from '../../../component';
import { ListTableItemType, OtherLeagueType, TableClubComponentType } from '../../../type';

const TableClubComponent = (props: TableClubComponentType) => {
  // action
  function _onClickClub(pageUrl ?: string) {
    if (pageUrl !== undefined) {
      var first = pageUrl.slice(7)
      var index = first.indexOf("/")
      var id = first.slice(0, index)
      var second = first.slice(index, first.length)
      var name = second.slice(10, first.length)
      props.onClickClub(id,name)
    } 
  }

  // main
  return (
    <View style={style.container}>
      <Text style={style.titleLeague}>{props.mainLeagueName}</Text>
      <ListTableItem key={"header"} name={props.tableHeader[1]} stt={props.tableHeader[0]} played={props.tableHeader[2]} wins={props.tableHeader[3]} draws={props.tableHeader[4]} losses={props.tableHeader[5]} goalConDiff={props.tableHeader[6]} pts={props.tableHeader[7]} />
      {props.tableData.map((item: ListTableItemType, index: number) => {
        return (
          <ListTableItem onClick={() => _onClickClub(item.pageUrl)} key={index} isShowIcon id={item.id} name={item.name} stt={index + 1} played={item.played} wins={item.wins} draws={item.draws} losses={item.losses} goalConDiff={item.goalConDiff} pts={item.pts} />
        )
      })}
      {props.otherLeagueName &&
        <Text style={style.titleLeague}>{props.otherLeagueName}</Text>
      }
      {props.otherLeague && props.otherLeague.map((item: OtherLeagueType, index: number) => {
        return (
          <View key={index}>
            <Text style={{ margin: 16 }}>{item.leagueName}</Text>
            <ListTableItem key={"header_other"} name={props.tableHeader[1]} stt={props.tableHeader[0]} played={props.tableHeader[2]} wins={props.tableHeader[3]} draws={props.tableHeader[4]} losses={props.tableHeader[5]} goalConDiff={props.tableHeader[6]} pts={props.tableHeader[7]} />
            {item.table.map((item: ListTableItemType, index: number) => {
              return (
                <ListTableItem onClick={() => _onClickClub(item.pageUrl)} key={index} isShowIcon id={item.id} name={item.name} stt={index + 1} played={item.played} wins={item.wins} draws={item.draws} losses={item.losses} goalConDiff={item.goalConDiff} pts={item.pts} />
              )
            })}
          </View>
        )
      })}
    </View>
  );
};

TableClubComponent.defaultProps = {

};

export default memo(TableClubComponent);
const style = StyleSheet.create({
  titleLeague: {
    margin: 16,
    fontWeight: '600',
    fontSize: 15
  },
  container: {
    backgroundColor: 'white'
  }

});
