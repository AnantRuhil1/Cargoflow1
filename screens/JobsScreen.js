import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockJobs = [
  { id: '1', title: 'Pickup at Site A' },
  { id: '2', title: 'Dropoff at Site B' },
];

const JobsScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={mockJobs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 10, borderBottomWidth: 1 }
});

export default JobsScreen;
