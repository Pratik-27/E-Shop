import { StyleSheet } from "react-native";
import { vw } from "../util/commonUtils";

export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingHorizontal: 5,
      backgroundColor: 'pink',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    itemContainer: {
      flexDirection: 'row',
      paddingVertical: 5,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#AD5784',
      marginVertical: 2,
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRadius: 10,
      elevation: 5,
    },
    imageContainer: {
      marginRight: 10,
      backgroundColor: '#FFC0CB',
      borderRadius: 10,
      padding: 5,
      paddingVertical: 0
    },
    image: {
      height: 1.6*vw(35),
      width: vw(35),
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: '#9B4A6F',
      backgroundColor: 'white'
    },
    itemDetailsContainer: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: '500',
      color: 'purple',
      marginBottom: 5,
    },
    itemPrice: {
      fontSize: 18,
      fontWeight: '600',
      color: 'green',
    },
    detailContainer: {
      flex: 0.8,
      justifyContent: 'center'
    },
    cartButton: {
      alignSelf: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#764F00',
      borderStartWidth: 2,
      borderTopWidth: 2,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 20,
    },
    cartButtonIcon: {
      marginRight: 5,
      color: '#FF1493',
    },
    cartButtonText: {
      fontSize: 16,
      color: '#FF1493'
    },
    divider: {
      backgroundColor: 'black',
    },
  });