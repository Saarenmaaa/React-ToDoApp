/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  GestureResponderEvent,
  TouchableHighlight,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header/Header';
import Input from './src/components/Input/Input';
import SubmitButton from './src/components/SubmitButton/SubmitButton';
import ToDoList from './src/components/ToDoList/ToDoList';

export type ToDoItem = {
  title: string,
  id: string,
  complete: boolean,
}

const ToDoItems: ToDoItem[] = []

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

// Saving and loading TodoList from local storage

// App function
function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>();
  const [todos, setTodos] = useState<ToDoItem[]>(ToDoItems);
  const [filter, setFilter] = useState<String>("All");

  const [display, setDisplay] = useState<ToDoItem[]>(todos);


  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: '#FEDBD0',
    flex: 1,
    
  };

  // Input Settings
  const inputValueChange = (inputValue: string) => {
    console.log(`input changes ${inputValue}`)
    setInputValue(inputValue);
  }

  // Submit ToDO to todos State List
  const submitToDo = (event: GestureResponderEvent) => {
    if(!inputValue || inputValue.match(/^\s*$/)) {
      console.log(`submitTodo inputValue is empty`);
      return;
    }
    const toDoItem: ToDoItem = {
      title: inputValue,
      id: todos.length.toString(),
      complete: false
    }
    const ntodos = [...todos, toDoItem];
    setTodos(ntodos);
    setInputValue('');
  }

  // Change complete status of todo Item
  const toggleCompleteToDo = (idx: string) => {
    const newList = todos.map(todo => {
      if (idx === todo.id) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    });
    setTodos(newList);
  };

  // Delete toDO item from todoList
  const deleteToDo = (idx: string) => {
    const newTodoList = todos.filter(todo => todo.id !== idx);
    setTodos(newTodoList);
  };
 

  // Set displayed list by All, Active and Complete todos when changes
  useEffect(() => {
    switch (filter) {
      case "Active":
        setDisplay(todos.filter(todo => !todo.complete));
        break;
      case "Complete":
        setDisplay(todos.filter(todo => todo.complete));
        break;
      default:
        setDisplay(todos);
    }
  }, [filter, todos]);

  // Change sectionTitle based on used Filter
  const sectionTitle = () => {
    switch (filter) {
      case "All":
        return "All";
      case "Active":
        return "Active";
      case "Complete":
        return "Completed";
      default:
        return "All";
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Header title="Things to be Done"/>
      <Section title={sectionTitle()} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View
          style={styles.viewContainer}>
          <Input
            inputValue={inputValue}
            inputValueChange={inputValueChange}
            placeholderText='What needs to be done?'
          ></Input>

          <SubmitButton submitToDo={submitToDo}></SubmitButton>

          <ToDoList 
            todos={display}
            toggleCompleteToDo={toggleCompleteToDo}
            deleteToDo={deleteToDo}
          ></ToDoList>

        </View>
      </ScrollView>
      
      <View style={styles.filterButtonContainer}>
        <TouchableHighlight 
          style={[styles.filterButtonText, filter === "All" && styles.selectedButton]}
          onPress={() => setFilter("All")}
        >
          <Text style={[filter === "All" && styles.selectedButton]}>All</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={[styles.filterButtonText, filter === "Active" && styles.selectedButton]}
          onPress={() => setFilter("Active")}
        >
          <Text style={[filter === "Active" && styles.selectedButton]}>Active</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={[styles.filterButtonText, filter === "Complete" && styles.selectedButton]}
          onPress={() => setFilter("Complete")}
        >
          <Text style={[filter === "Complete" && styles.selectedButton]}>Completed</Text> 
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 32,
    alignItems: 'center',
    paddingHorizontal: 32,
    width: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  filterButtonText: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#442C2E',
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEDBD0',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '200',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '500',
  },
  selectedButton: {
    backgroundColor: '#442C2E',
    color: 'white'
  },
});

export default App;
