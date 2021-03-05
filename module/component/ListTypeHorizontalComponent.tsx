import React, { memo ,useRef,useState,useEffect} from 'react';
import {Image,StyleSheet, Text,TouchableOpacity, View,FlatList as FlatListBase} from 'react-native';

interface MatchesComponentType {
    data : Array<string>,
    onClick ?: (index : number) => void
}

const ListTypeHorizontalComponent = (props: MatchesComponentType) => {
  const listCategory = useRef<FlatListBase>(null)

  const [selectedIndexType, setSelectedIndexType] = useState(0)

  function _selectedType(index: number) {
    setSelectedIndexType(index)
    if (props.onClick) props.onClick(index)
}
useEffect(() => {
  try {
      listCategory?.current?.scrollToIndex({ index: selectedIndexType, animated: true })
    } catch (error) {

    }
},[selectedIndexType])

  return (
    <FlatListBase 
                horizontal
                ref={listCategory}
                data={props.data}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // initialScrollIndex={indexCategory}
                keyExtractor={(item, index) => `--match-detail-${index}`}
                renderItem={({ item, index }: { item: any, index: number }) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => _selectedType(index)} style={{ paddingVertical: 16, paddingHorizontal: 24, borderBottomWidth: selectedIndexType === index ? 1 : 0, borderColor: selectedIndexType === index ? 'rgba(124,141,163,1)' : 'black' }}>
                        <Text style={{ color: selectedIndexType === index ? 'rgba(124,141,163,1)' : 'black' }}>{item.toUpperCase()}</Text>
                    </TouchableOpacity>
                    )
                  }}

            />
  );
};

ListTypeHorizontalComponent.defaultProps = {

};

export default memo(ListTypeHorizontalComponent);
const styles = StyleSheet.create({
  
});
