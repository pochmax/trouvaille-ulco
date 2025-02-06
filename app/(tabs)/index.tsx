import { StyleSheet, Button, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useEffect } from 'react';
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TileView from '../tileView';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");
  const [tiles, setTiles] = React.useState([
    {image: 'key.png', title: 'Un', location: 'Calais', date: 'Date'},
    {image: 'key.png', title: 'deux', location: 'Lille', date: 'Date'},
    {image: 'key.png', title: 'trois', location: 'Boulogne', date: 'Date'},
    {image: 'key.png', title: 'quatre', location: 'Dunkerque', date: 'Date'},
    {image: 'key.png', title: 'cinq', location: 'Amien', date: 'Date'},
    {image: 'key.png', title: 'six', location: 'Paris', date: 'Date'},
    {image: 'key.png', title: 'sept', location: 'Bordeaux', date: 'Date'},
    {image: 'key.png', title: 'huit', location: 'Lyon', date: 'Date'},
    {image: 'key.png', title: 'neux', location: 'Marseille', date: 'Date'},
    {image: 'key.png', title: 'dix', location: 'Toulouse', date: 'Date'},
  ]);
  const [filteredTiles, setFilteredTiles] = React.useState(tiles);

  useEffect(() => {
    if (text === "") {
      setFilteredTiles(tiles);
    } else {
      setFilteredTiles(tiles.filter(tile => 
        tile.title.toLowerCase().includes(text.toLowerCase()) || 
        tile.location.toLowerCase().includes(text.toLowerCase())
      ));
    }
  }, [text, tiles]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Trouvaille</ThemedText>
          </ThemedView>
          <ThemedText style={styles.description}>Trouvaille test</ThemedText>
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
            <TextInput
              placeholder='Rechercher'
              style={styles.input}
              value={text}
              onChangeText={onChangeText}
            />
          </View>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {filteredTiles.map((tile, index) => (
              <TileView key={index} {...tile} />
            ))}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color : 'white'
  },
  scrollView: {
    padding: 16,
    display: 'flex',
    flexDirection : 'column',
    gap : 10
  },
});