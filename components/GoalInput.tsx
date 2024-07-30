import { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native'

function GoalInput({ onAddGoal, visible, closeModalHandler }) {

  const [enteredText, setEnteredText] = useState('')

  function goalInputHandler(inputText) {
    setEnteredText(inputText)
  }
  function goalAddHandler() {
    onAddGoal(enteredText)
    setEnteredText('')
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder={'Your course Goal'}
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={'Cancel'}
              color={'#f31282'}
              onPress={closeModalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={'Add Goal'}
              color={'#b180f0'}
              onPress={goalAddHandler}
              disabled={enteredText ? false : true}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '90%',
    padding: 16,
    borderRadius: 8,

  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})