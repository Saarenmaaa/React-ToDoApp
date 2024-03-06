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

const OneToDoButton: React.FC<Props>= ({name, complete, onPress}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                style={styles.button}
                onPress={onPress}
            >
                <Text 
                    style={[
                        styles.buttonText,
                        complete ? styles.complete : null,
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
        borderWidth: 1,
        borderColor: 'black',
    },
    button: {
      padding: 7,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'black',
      marginRight: 5,
    },
    buttonText: {
        color: '#666666'
    },
    complete: {
        color: 'green'
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    },
    
  });

export default OneToDoButton;