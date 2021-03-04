import React, { memo } from 'react';
import {StyleSheet, Text,View} from 'react-native';
import ListTransfersItem from '../../../component/ListTransfersItem';
import { TransferType } from '../../../type';

interface TransfersClubComponentType {
  transferData: [TransferType][]
  idclub : any,
  onClickTransfer ?: (id : number) => void
}

const TransfersClubComponent = (props: TransfersClubComponentType) => {
  //action 
  function onClickTransfer(id : number) {
    if (props.onClickTransfer) props.onClickTransfer(id)
  }

  // main
  return (
    <View style={style.container}>
      {props.transferData.map((items: [TransferType], i: number) => {
        return (
          <View key={i}>
            <Text style={style.title}>{i === 0 ? "Player In" : i === 1 ? "Players Out" : "Contract Extension"}</Text>
            {items.map((item: TransferType, index) => {
              return (
                <ListTransfersItem
                  key={index}
                  marketValue={item.marketValue}
                  contract= {i !== 0 && i !== 1 ? item.toDate: `${item.fromDate} - ${item.toDate}`}
                  titleContract={item.transferType}
                  fee={ item.fee && item.fee.value ? item.fee.value : item.fee}
                  club={ i === 0 ? item.fromClub : i === 1 ? item.toClub : item.fromClub}
                  idClub={i === 0 ? item.fromClubId : i === 1 ? item.toClubId : item.fromClubId}
                  fromTO={i === 0 ? "From" : i === 1 ? "To" : ""}
                  namePlayer={item.name}
                  position={item.position}
                  idPlayer={item.playerId}
                  time={item.transferDate}
                  title = {i !== 0 && i !== 1 ? "contract" : ""}
                  onClick={() => onClickTransfer(item.playerId)}
                />
              )
            })}

          </View>
        )
      })}

    </View>
  );
};

TransfersClubComponent.defaultProps = {

};

export default memo(TransfersClubComponent);
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16
    // marginBottom : 16
  }
});
