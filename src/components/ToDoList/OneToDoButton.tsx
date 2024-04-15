// OneToDoButton.tsx

import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  GestureResponderEvent,
  Text,
  View,
} from 'react-native';

interface Props {
    onPress: (event: GestureResponderEvent) => void,
    complete: boolean,
    name: string
}
// Todo Done and Delete buttons
const OneToDoButton: React.FC<Props>= ({name, complete, onPress}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                style={[
                    styles.button,
                    name === 'Done' && complete ? styles.completeButton : null,
                    name === 'Delete' ? styles.deleteButton : null,
                ]}
                onPress={onPress}
            >
                <Text 
                    style={[
                        styles.buttonText,
                        complete ? styles.completeText : null,
                        name === 'Delete' ? styles.deleteButton: null]}>
                    {name}
                </Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end',
        borderColor: 'black',
    },
    button: {
      padding: 7,
      borderRadius: 4,
      marginRight: 5,
      backgroundColor: '#ff5959'
    },
    buttonText: {
        color: 'white'
    },
    completeText: {
        color: 'black',
    },
    completeButton: {
        backgroundColor: 'lightgreen',
    },
    deleteButton: {
        color: '#FEEAE6',
        backgroundColor: '#442C2E',
        fontWeight: '500'
    },
    
  });

export default OneToDoButton;