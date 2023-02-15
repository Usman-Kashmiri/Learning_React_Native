import { StyleSheet } from "react-native";
const Mystyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    heading: {
      fontSize: 25,
      color: '#222',
      fontWeight: 'bold'
    },
    btn: {
      marginVertical: 8
    },
    inputField: {
      borderRadius: 6,
      width: 200,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: '#333',
      paddingVertical: 4,
      paddingHorizontal: 10
    }
  });

  export default Mystyles