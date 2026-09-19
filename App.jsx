import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const [data, setdata] = useState([]);

  return (
    <View style={styles.container}>
      <HomeScreen
        data={data}
        setdata={setdata}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});