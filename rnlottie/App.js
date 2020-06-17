import React from 'react';
import {SafeAreaView, View} from 'react-native';
import LottieView from 'lottie-react-native';

import like from './836-like-button.json';
// import { Container } from './styles';

const rnlottie = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView autoSize resizeMode="contain" source={like} autoPlay />
    </View>
  );
};

export default rnlottie;
