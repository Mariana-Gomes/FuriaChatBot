import React, { useState, useEffect, useRef, useCallback } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ImageBackground } from "react-native";
// import { Background } from "./styles";
import { styles } from './styles';

import { InputMessage } from "../components/Input";
import { Header } from "../components/Header";

import { allMessages } from "../data";
import { MessageKey } from "../constants";
import { delay } from "../utils/delay";

import wallpaper from "../assets/wallpaper.jpg";
import { Message, Option } from "../data/types";
import { MessageList } from "../components/MessageList";
import { findOptionFromText } from "../utils/findOptionFromText";

const TOTAL_QUIZ_QUESTIONS = 5;

export type ChatMessage = Message & {
  isUser: boolean;
};

export default function ChatScreen() {
  const countRightAnswers = useRef(0);
  const [inputMessage, setInputMessage] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageKey, setMessageKey] = useState<MessageKey>(MessageKey.Start);
  const message = allMessages[messageKey];

  useEffect(() => {
    sendMessage(message);
  }, [messageKey]);

  const onSendCustomMessage = () => {
    if (inputMessage.trim() === "") return;

    const matchedOption = findOptionFromText(inputMessage, message.options);

    sendMessage({ text: inputMessage }, true);
    setInputMessage("");
    Keyboard.dismiss();

    if (matchedOption) {
      if (message?.correctAnswer) {
        handleOptionSelect(matchedOption, message.correctAnswer, true);
        return;
      }
      setMessageKey(matchedOption.next);
    } else {
      delay(() => handleCustomMessage(inputMessage), 500);
    }
  };

  const handleCustomMessage = (customMessage: string) => {
    sendMessage({ text: `Eu não entendo o que "${customMessage}" significa!` });
    delay(() => sendMessage(message), 800);
  };

  const sendMessage = (message: Message, isUser = false) => {
    setMessages((prev) => [
      ...prev,
      {
        isUser,
        ...message,
      },
    ]);

    if (!isUser && !message?.options && message?.next)
      setMessageKey(message.next);
  };

  const handleOptionSelect = useCallback(
    (selectedOption: Option, correctAnswer: string, isCustomAnswer = false) => {
      const isQuiz = !!correctAnswer;

      if (!isCustomAnswer) sendMessage(selectedOption, true);

      if (isQuiz) {
        if (selectedOption.text === correctAnswer) {
          countRightAnswers.current = countRightAnswers.current + 1;
          sendMessage({ text: "✅ Resposta correta!" });
        } else {
          sendMessage({ text: `❌ Errado. A certa era: ${correctAnswer}` });
        }

        const shouldShowQuizResult = selectedOption.next === MessageKey.QuizEnd;
        if (shouldShowQuizResult) {
          sendMessage({
            text: `🎉 Fim do quiz, GG!\nVocê acertou ${countRightAnswers.current}/${TOTAL_QUIZ_QUESTIONS}`,
          });
          countRightAnswers.current = 0;
        }
      }
      delay(() => setMessageKey(selectedOption.next), 500);
    },
    []
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ImageBackground style={styles.background} source={wallpaper}>
        <Header />
        <MessageList
          messages={messages}
          handleOptionSelect={handleOptionSelect}
        />
        <InputMessage
          placeholder="Mensagem"
          placeholderTextColor="#919191"
          onChangeText={setInputMessage}
          value={inputMessage}
          onSendMessage={onSendCustomMessage}
          onSubmitEditing={onSendCustomMessage}
          // style={{ height: 50 }}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
