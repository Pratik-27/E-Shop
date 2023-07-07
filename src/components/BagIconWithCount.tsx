import React, {FunctionComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BagIconWithCountProps {
  count: number;
  onPress: () => void;
}

const BagIconWithCount: FunctionComponent<BagIconWithCountProps> = ({
  count,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="shopping-bag" size={20} />
        {count > 0 && (
          <View
            style={{
              backgroundColor: 'red',
              borderRadius: 10,
              marginLeft: -10,
              marginTop: -10,
              paddingHorizontal: 6,
              paddingVertical: 2,
            }}>
            <Text style={{color: 'white', fontSize: 12}}>{count}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BagIconWithCount;
