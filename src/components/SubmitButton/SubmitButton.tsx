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

// Submit Button component settings
const SubmitButton: React.FC<Props>= ({submitToDo}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                style={styles.button}
                onPress={submitToDo}
            >
                <Text style={styles.buttonText}>
                Add To Do
                </Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'flex-end',
    },
    button: {
      height: 50,
      width: 100,
      marginBottom: 10,
      backgroundColor: '#442C2E',

      borderRadius: 3,
      borderColor: '#FEEAE6',

      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
        color: '#FEDBD0',
        fontSize: 15,
        fontWeight: "300",
    },
  });

export default SubmitButton;