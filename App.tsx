import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Cards from './app/Components/Cards';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Cards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
