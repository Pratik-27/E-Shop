import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {noImage} from '../constants/Icons';
import {CatalogReducer, Product} from '../constants/Interface';
import {GET_CART} from '../redux/actions/catalogAction';
import {cartStyles as styles} from '../styles/cartStyles';
import {
  decreaseCount,
  getImageUri,
  increaseCount,
  vw,
} from '../util/commonUtils';

const CartScreen: React.FC = () => {
  const dispatch = useDispatch();

  const {cartList} = useSelector<CatalogReducer, any>(state => state.catalog);

  const addToCart = (item: Product): void => {
    Alert.alert(
      'Item Added',
      `${item.name} is added to cart`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  const increaseItemCount = (item: Product) => {
    const payload = increaseCount(item, cartList);
    dispatch({
      type: GET_CART,
      payload,
    });
  };

  const decreaseItemCount = (item: Product) => {
    const payload = decreaseCount(item, cartList);
    dispatch({
      type: GET_CART,
      payload,
    });
  };

  const renderItem: React.FC<{item: Product}> = ({item}) => {
    const {uri} = getImageUri(item.img);
    const {count = 0} = item;
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{uri}}
          resizeMode="contain"
          alt="No Image"
          defaultSource={noImage} // Since one of the image is giving error
        />
        <View style={styles.itemDetailsContainer}>
          <View style={{flex: 0.5}}>
            <Text style={styles.itemName} ellipsizeMode="tail">
              {item.name}
            </Text>
            <Text style={styles.itemPrice}>{item.price}$</Text>
          </View>
          <View style={styles.countContainer}>
            <TouchableOpacity
              onPress={() => {
                decreaseItemCount(item);
              }}
              style={styles.countButton}>
              <Text style={styles.countText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                increaseItemCount(item);
              }}
              style={styles.countButton}>
              <Text style={styles.countText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  };

  const calculateTotalPrice = (): number => {
    let totalPrice = 0;
    cartList.forEach((item: Product) => {
      totalPrice += item.price * (item.count || 0);
    });
    return totalPrice;
  };

  const renderFooter = () => {
    const totalPrice = calculateTotalPrice();

    return (
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>
          Total Price: {totalPrice.toFixed(2)}$
        </Text>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => {
            // Handle Proceed to Pay button press event
          }}>
          <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Item added !</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.contentContainer}
      />
      {cartList.length > 0 && renderFooter()}
    </View>
  );
};

export default CartScreen;
