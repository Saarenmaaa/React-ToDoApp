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
      backgroundColor: '#f5f5D5'
    },
    headerText: {
      fontSize: 20,
      color: '#212427',
      fontWeight: '600',
    },
  });

export default Header;