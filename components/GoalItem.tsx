import { StyleSheet, View, Text, Pressable } from "react-native"

function GoalItem({ itemData, onDeleteItem }) {
  return (
    <View style={styles.goalsContent}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => onDeleteItem(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>
          {itemData.item.text}
        </Text>
      </Pressable>
    </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsContent: {
    backgroundColor: 'purple',
    margin: 8,
    borderRadius: 6
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
})
