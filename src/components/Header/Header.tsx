// Header.tsx

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {
    title: string;
}
// Header Component of ToDoApp
const Header: React.FC<Props>= ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      marginTop: 32,
      paddingVertical: 20,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 40,
      color: '#212427',
      fontWeight: '200',
    },
  });

export default Header;