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

interface TableClubComponentType {
  tableHeader: Array<string>,
  tableData: Array<ListTableItemType>,
  otherLeague: Array<OtherLeagueType>,
  mainLeagueName: string,
  otherLeagueName?: string,
  onClickClub : (id : string,name : string) => void
}
interface OtherLeagueType {
  leagueId: number,
  leagueName: string,
  table: Array<ListTableItemType>
}



const TableClubComponent = (props: TableClubComponentType) => {
  console.log("otherLeague", props.otherLeague)

  function _onClickClub(pageUrl ?: string) {
    console.log("pageUrl",pageUrl)
    if (pageUrl !== undefined) {
      var first = pageUrl.slice(7)
      var index = first.indexOf("/")
      var id = first.slice(0, index)
      var second = first.slice(index, first.length)
      var name = second.slice(10, first.length)
      props.onClickClub(id,name)
    }
    
  }
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
      {props.otherLeague.map((item: OtherLeagueType, index: number) => {
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