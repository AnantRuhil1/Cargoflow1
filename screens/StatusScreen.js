import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

const StatusScreen = () => {
  const [notes, setNotes] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Start Load" onPress={() => alert('Load Started')} />
      <Button title="Complete Load" onPress={() => alert('Load Completed')} />
      <TextInput
        placeholder="Notes"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
        value={notes}
        onChangeText={setNotes}
      />
    </View>
  );
};

export default StatusScreen;
