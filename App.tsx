import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-Italic'}}>
        rafaeld3v
      </Text>
      <Text preset="headingSmall" style={{fontFamily: 'Satoshi-Black'}}>
        rafaeld3v
      </Text>
      <Text preset="paragraphMedium" style={{fontFamily: 'Satoshi-Regular'}}>
        rafaeld3v
      </Text>
    </SafeAreaView>
  );
}

export default App;
