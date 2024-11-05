import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {StyleSheet, Button, Text, View , TextInput, FlatList} from 'react-native'

const Tasks = () => {
  const [task, setTask] = useState<string>(''); 
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const renderTaskItem = ({ item }: {item:string}) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item}</Text>
    </View>
  );

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  taskItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
});

export default Tasks