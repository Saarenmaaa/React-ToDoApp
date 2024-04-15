// ToDoList.tsx

import React from 'react';
import {
    ScrollView,
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

// ToDolist Component maps for all todo in todos
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
    // ScrollView to display Large todolist
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {allToDos}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: "100%",
      padding: 10,
    },
  });

export default ToDoList;