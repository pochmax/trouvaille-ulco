import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

import Tile  from './models/tile';

export default function TileView(tile : Tile) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/key.png')} style={styles.image} />
      <View style={styles.info}>
        <ThemedText style={styles.title}>{tile.title}</ThemedText>
        <ThemedText style={styles.location}>{tile.location}</ThemedText>
        <ThemedText style={styles.date}>Date: {tile.date}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    flexDirection: 'row',
    borderColor: 'gray',
    borderRadius : '50px',
    borderWidth : 1,
    gap: '10px'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
});