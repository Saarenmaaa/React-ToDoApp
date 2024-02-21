// Input.tsx

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

interface Props {
    inputValue : string,
    inputValueChange: (text: string) => void,
    placeholderText: string,
}

const Input: React.FC<Props>= ({inputValue, inputValueChange, placeholderText}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                value={inputValue}
                style={styles.input}
                placeholder={placeholderText}
                onChangeText={inputValueChange}
            >
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      marginLeft: 20,
      marginRight: 20,
      width: "100%",

      borderWidth: 1,
      borderColor: 'green',
    },
    input: {
      height: 60,
      paddingLeft: 10,
      paddingRight: 10,
      width: "100%",
    },
  });

export default Input;