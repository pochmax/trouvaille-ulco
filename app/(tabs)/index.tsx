import { StyleSheet, Button, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Trouvaille</ThemedText>
          </ThemedView>
          <ThemedText style={styles.description}>Trouvaille test</ThemedText>
          <TextInput placeholder='IIII' style={styles.input} value={text} onChangeText={onChangeText}/>
          <Button title="Submit" onPress={() => console.log(text)}/>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  description : {
    fontSize: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'black',
  },
});
