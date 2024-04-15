// OneToDo.tsx

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ToDoItem } from '../../../App';
import OneToDoButton from './OneToDoButton';

interface Props {
  todoitem: ToDoItem;
  toggleCompleteToDo: (idx: string) => void;
  deleteToDo: (idx: string) => void;
}
// OneTodo Component Holds all in TodoItem
const OneToDo: React.FC<Props>= ({todoitem, toggleCompleteToDo, deleteToDo}) => {
    return (
        <View style={styles.todoContainer}>
          <Text style={styles.todoText}>{todoitem.title}</Text>
          <View style={styles.buttons}>
            <OneToDoButton
              name='Done'
              complete={todoitem.complete}
              onPress={() => toggleCompleteToDo(todoitem.id)}
              />
            <OneToDoButton
              name='Delete'
              complete={todoitem.complete}
              onPress={() => deleteToDo(todoitem.id)}
              />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todoContainer: {
      marginLeft: 10,
      marginRight: 10,
      marginVertical: 2,
      borderRadius: 5,
      borderColor: 'black',
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      width: "100%",
      backgroundColor: '#FEEAE6'

    },
    todoText: {
      fontSize: 14,
    },
    buttons: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }
  });

export default OneToDo;