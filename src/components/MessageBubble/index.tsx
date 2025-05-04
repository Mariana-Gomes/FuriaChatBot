import React from "react";
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { styles, getContainerStyle, getMessageTextStyle } from './styles';

import { ChatMessage } from "../../screen/Chat";
import { Option } from "../../data/types";

type MessageBubbleProps = {
  message: ChatMessage;
  onOptionSelect: (selectedOption: Option, correctAnswer: string) => void;
};

export function MessageBubble({ message, onOptionSelect }: MessageBubbleProps) {
  const hasImage = !!message?.image;

  const isUser = message.isUser;

  return (
    <View style={getContainerStyle(isUser)}>
      {hasImage && <Image  source={{ uri: message.image }} style={styles.playerImage} />}
      <Text style={getMessageTextStyle(isUser, message.options)}>
        {message.text}
      </Text>

      {message?.options &&
        message.options.map((option, idx) => (
          <View style={styles.optionContainer} key={idx}>
            <TouchableOpacity  
              style={styles.optionButton}
              onPress={() =>
                onOptionSelect(option, message?.correctAnswer as string)
              }
            >
              <Text style={styles.optionText}>{option?.text}</Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
}
