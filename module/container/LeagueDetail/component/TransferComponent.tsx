import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import ListTransfersItem from '../../../component/ListTransfersItem';
import { TransferType } from '../../../type';

interface TransferComponentType {
  data: Array<TransferType>
  onClickTransfer ?:( id : number) => void
}
const TransferComponent = (props: TransferComponentType) => {
  // action 
  function onClick(id : number) {
    if (props.onClickTransfer) props.onClickTransfer(id)
  }

  // layout
  return (
    <View style={style.container}>
      {props.data && props.data.map((item: TransferType, index: number) => {
        return (
          <ListTransfersItem
            onClick = {() => onClick(item.playerId)}
            isLeague
            key={index}
            marketValue={item.marketValue}
            contract={"contract"}
            titleContract={item.transferType}
            fee={typeof (item.fee) === "string" ? item.fee : ""}
            club={"club"}
            idClub={1}
            fromTO={"fromTO"}
            namePlayer={item.name}
            position={item.position}
            idPlayer={item.playerId}
            time={item.transferDate}
            title={"title"}
            fromClub={item.fromClub}
            fromClubId={item.fromClubId}
            toClub={item.toClub}
            toClubId={item.toClubId}
          />
        )
      })}
    </View>
  );
};

TransferComponent.defaultProps = {

};

export default memo(TransferComponent);
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  }
});
