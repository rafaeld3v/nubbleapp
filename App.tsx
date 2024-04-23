import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">rafaeld3v</Text>
      <Text preset="headingSmall">rafaeld3v</Text>
      <Text preset="paragraphMedium">rafaeld3v</Text>
    </SafeAreaView>
  );
}

export default App;
