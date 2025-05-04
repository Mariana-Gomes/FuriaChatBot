import React from "react";
import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';

import { PaperPlaneRight } from "phosphor-react-native";

import { styles } from './styles';

type InputProps = TextInputProps & {
  onSendMessage: () => void;
};

export const InputMessage = ({ onSendMessage, ...rest }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.messageInput} {...rest} />
      <TouchableOpacity style={styles.sendButton} onPress={onSendMessage}>
        <PaperPlaneRight size={32} color="#919191" />
      </TouchableOpacity>
    </View>
  );
};
