// ToDoList.tsx

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ToDoItem } from '../../../App';

interface Props {
    todos: ToDoItem[]
}

const Header: React.FC<Props>= ({todos}) => {
    let allToDos = todos.map((todo, i) => {
        return (
            <OneToDo
                key={todo.id}
                todo={todo}
            />
        )
    });
    return (
        <View style={styles.container}>
            {allToDos}
        </View>
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