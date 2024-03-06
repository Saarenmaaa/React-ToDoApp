// SubmitButton.tsx

import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  GestureResponderEvent,
  Text,
  View,
} from 'react-native';

interface Props {
    submitToDo: (event: GestureResponderEvent) => void,
}

const SubmitButton: React.FC<Props>= ({submitToDo}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                style={styles.button}
                onPress={submitToDo}
            >
                <Text style={styles.buttonText}>
                Add Item
                </Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      //marginLeft: 20,
      //marginRight: 20,
      //width: "100%",

      //borderWidth: 1,
      //borderColor: 'green',
    },
    button: {
      height: 50,
      paddingLeft: 20,
      paddingRight: 20,
      width: 200,
      marginTop: 20,
      backgroundColor: '#f5f5D5',

      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',

      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
    },
  });

export default SubmitButton;