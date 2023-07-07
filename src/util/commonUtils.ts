import { Alert, Dimensions } from "react-native"
import { Product } from "../constants/Interface"

export const getImageUri = (url: string) => {
    const urlParams =  url.split('?')
    return {
        uri: urlParams[0],
        imgWidth: urlParams[1]
    }
}

// Variable Width
export const vw = (value: number) =>  Dimensions.get('screen').width * (value/100)

export const cartAddedPopup = (item: string) => {
    Alert.alert(
        'Item Added',
        `${item} is added to cart`,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
    );
}

export const getPayload = (productList: Product[], item: Product) => {
    const existingProductIndex = productList.findIndex((product) => product.id === item.id);

  if (existingProductIndex !== -1) {
    // Item already exists in the list, update the count
    const updatedProductList = [...productList];
    updatedProductList[existingProductIndex].count = (updatedProductList[existingProductIndex].count || 0) + 1;
    return updatedProductList;
  }

  // Item doesn't exist in the list, add it
  const updatedProductList = [...productList, { ...item, count: 1 }];
  return updatedProductList;
}


export const decreaseCount = (item: Product, cartList: Product[]): Product[] => {
    const { count } = item;
  
    if (count && count > 0) {
      const updatedCount = count - 1;
  
      if (updatedCount === 0) {
        // Remove the item from the cart list
        const updatedCartList = cartList.filter((cartItem) => cartItem.id !== item.id);
        return updatedCartList;
      } else {
        // Update the count of the item in the cart list
        const updatedCartList = cartList.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, count: updatedCount };
          }
          return cartItem;
        });
        return updatedCartList;
      }
    }
  
    return cartList;
  };
  

  export const increaseCount = (item: Product, cartList: Product[]): Product[] => {
    const { count } = item;
  
    const updatedCount = (count || 0) + 1;
  
    const updatedCartList = cartList.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, count: updatedCount };
      }
      return cartItem;
    });
  
    return updatedCartList;
  };

  export const calculateTotalPrice = (cartList: Product[]): number => {
    let totalPrice = 0;
    cartList.forEach((item: Product) => {
      totalPrice += item.price * (item.count || 0);
    });
    return totalPrice;
  };
  