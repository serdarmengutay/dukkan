import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({ placeholder, onType, value, iconName, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon
        name={iconName}
        size={25}
        style={{
          top: 10,
        }}
      />
    </View>
  );
};

export default Input;
