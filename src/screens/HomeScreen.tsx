import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Divider} from 'react-native-paper';
import CartIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {getCatalog} from '../api-layer/HomeNetwork';
import {noImage} from '../constants/Icons';
import {CatalogReducer, Product} from '../constants/Interface';
import {GET_CART} from '../redux/actions/catalogAction';
import {homeStyles as styles} from '../styles/homeStyles';
import {cartAddedPopup, getImageUri, getPayload, vw} from '../util/commonUtils';

export type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch();

  const {catalogList, cartList} = useSelector<CatalogReducer, any>(
    state => state.catalog,
  );

  useEffect(() => {
    const response = getCatalog(dispatch);
  }, []);

  const addToCart = (item: Product): void => {
    cartAddedPopup(item.name);
    const payload = getPayload(cartList, item);
    dispatch({
      type: GET_CART,
      payload,
    });
  };

  const renderItem: React.FC<{item: Product}> = ({item}) => {
    const {uri} = getImageUri(item.img);
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri}}
            resizeMode="contain"
            defaultSource={noImage} // Since one of the image is giving error
          />
        </View>
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={styles.itemPrice}>{item.price}$</Text>
          <TouchableOpacity
            onPress={() => addToCart(item)}
            style={styles.cartButton}>
            <CartIcon
              name="shoppingcart"
              size={18}
              color={styles.cartButtonIcon.color}
              style={styles.cartButtonIcon}
            />
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={catalogList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default HomeScreen;
