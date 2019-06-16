import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AnimatedComponent from './AnimatedComponent';

const App = () => {
  const [doAnimation, setDoAnimation] = useState(false);
  return (
    <View style={{     
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <AnimatedComponent doAnimation={doAnimation} />
      <TouchableOpacity 
        style={{ 
          margin: 20, 
          backgroundColor: `gray`,
          padding: 10,
        }} 
        onPress={() => setDoAnimation(!doAnimation)}
      >
        <Text style={{color: `white`}}>Animation</Text>
      </TouchableOpacity>
    </View>
  )
};

export default App;