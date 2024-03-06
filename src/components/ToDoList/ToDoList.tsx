// ToDoList.tsx

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ToDoItem } from '../../../App';
import OneToDo from './OneToDo';

interface Props {
    todos: ToDoItem[]
    toggleCompleteToDo: (idx: string) => void;
    deleteToDo: (idx: string) => void;
}

const ToDoList: React.FC<Props>= ({todos, toggleCompleteToDo, deleteToDo}) => {
    let allToDos = todos.map((todo, i) => {
        return (
            <OneToDo
                key={todo.id}
                todoitem={todo}
                toggleCompleteToDo={toggleCompleteToDo}
                deleteToDo={deleteToDo}
            />
        )
    });
    return (
        <View style={styles.container}>{allToDos}</View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: "100%",
      padding: 20,

      borderWidth: 1,
      borderColor: 'black',
    },
  });

export default ToDoList;