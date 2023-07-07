import { StyleSheet } from "react-native";
import { vw } from "../util/commonUtils";

export const cartStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'flex-end',
      backgroundColor: 'pink', 
    },
    contentContainer: {
      flexGrow: 1,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'beige', 
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    totalPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black', 
    },
    emptyText: {
        fontSize: 16,
        color: 'black'
    },
    proceedButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    proceedButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemContainer: {
      flexDirection: 'row',
      paddingVertical: 5,
    },
    image: {
      height: 1.6*vw(30),
      width: vw(30),
      backgroundColor: '#FFC0CB',
    },
    itemDetailsContainer: {
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'flex-start',
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: '500',
      color: 'purple',
      marginVertical: 15
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: '600',
        color: 'green', 
    },
    countContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0.2,
      alignSelf: 'flex-end'
    },
    countButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: 'lightgray',
      borderRadius: 5,
      marginHorizontal: 5,
    },
    countText: {
      color: 'black', 
    },
    divider: {
      backgroundColor: 'black',
    },
  });
  