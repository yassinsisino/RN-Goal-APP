import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [courseGoals, setCourseGoals] = useState<{ text: string, id: string }[]>([])
  const [modalIsVisible, setModalVisible] = useState<boolean>(false)

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function endAddGoalHandler() {
    setModalVisible(false)
  }

  function goalAddHandler(enteredText: string) {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals, { text: enteredText, id: Math.random().toString() }]
    )
    endAddGoalHandler()
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCoursGoals) => {
      return currentCoursGoals.filter(goal => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add new Goal'
          onPress={startAddGoalHandler}
          color={'purple'}
        />
        <GoalInput
          onAddGoal={goalAddHandler}
          visible={modalIsVisible}
          closeModalHandler={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  },
});
