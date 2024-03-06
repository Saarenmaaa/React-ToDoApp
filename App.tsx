/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  GestureResponderEvent
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  //Header,
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

const testToDoItems: ToDoItem[] = [
  {
    title: 'Do the dishes',
    id: "0",
    complete: false
  },
  {
    title: 'Empty the bin',
    id: "1",
    complete: false
  },
]

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

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>();
  const [todos, setTodos] = useState<ToDoItem[]>(testToDoItems);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const inputValueChange = (inputValue: string) => {
    console.log(`input changes ${inputValue}`)
    setInputValue(inputValue);
  }

  const submitToDo = (event: GestureResponderEvent) => {
    if(!inputValue  || inputValue.match(/^\s*$/)) {
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
    console.log(`submitToDo ${JSON.stringify(ntodos)}`);
  }

  const toggleCompleteToDo = (idx: string) => {}
  const deleteToDo = (idx: string) => {}

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Header title="Things to be Done"/>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View
          style={styles.viewContainer}>
          <Section title="List of things to Complete">
            {/* ToDo placeholder */}
          </Section>

          <Input
            inputValue={inputValue}
            inputValueChange={inputValueChange}
            placeholderText='What needs to be done?'
          >
          </Input>

          <SubmitButton submitToDo={submitToDo}></SubmitButton>
          <ToDoList 
            todos={todos}
            toggleCompleteToDo={toggleCompleteToDo}
            deleteToDo={deleteToDo}
          ></ToDoList>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 32,
    alignItems: 'center',
    paddingHorizontal: 32,
    width: '100%'
  },
  sectionContainer: {
    marginTop: 32,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',

    borderWidth: 1,
    borderColor: 'green',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
