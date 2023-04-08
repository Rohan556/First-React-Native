import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState([])
  const [enteredTask, setEnteredtask] = useState("")

  const handleTaskInput = (enteredText) => {
   setEnteredtask(enteredText.nativeEvent.text);
  }

  const handleAddTask = () => {
    let tasksTemp = tasks
    tasksTemp.push(enteredTask)
    setTasks(tasksTemp)
    setEnteredtask("")
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput placeholder='Your coarse goal' style={styles.textInput} onChange={handleTaskInput} value={enteredTask}/>
      <Button title='ADD GOAL' onPress={handleAddTask}/>
     </View>
     <View style={styles.info}>
      <FlatList
      alwaysBounceVertical={false}
        data={tasks}
        renderItem={(itemData) => {
          return (
            <View style={styles.taskView}>
              <Text key={itemData.item} style={styles.displayText}>
                {itemData.index+1}.  {itemData.item}
              </Text>
            </View>
          )
        }}
      />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    height: '100%'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 15,
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    width: '80%',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50
  }, 
  info: {
    flex: 10
  },
  displayText: {
    fontSize: 25,
    fontWeight: 400,
    marginVertical: 10,
    paddingHorizontal: 3
  },
  taskView: {
    backgroundColor: 'violet',
    marginVertical: 7,
    borderRadius: 10,
    paddingHorizontal: 10
  }
});


