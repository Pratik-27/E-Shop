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
      paddingVertical: 10,
      alignItems: 'center',
    },
    imageContainer: {
      marginRight: 10,
      backgroundColor: '#FFC0CB',
      borderRadius: 10,
      padding: 5,
    },
    image: {
      height: 1.6*vw(35),
      width: vw(35),
      borderRadius: 10,
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
    cartButton: {
      alignSelf: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    cartButtonIcon: {
      marginRight: 5,
      color: '#FF1493',
    },
    cartButtonText: {
      fontSize: 16,
      color: '#FF1493',
      marginRight: 20
    },
    divider: {
      backgroundColor: 'black',
    },
  });