import { FlatList } from "react-native";
import { SafeAreaView } from 'react-native';
import { styles } from './styles';

import { MessageBubble } from "../MessageBubble";
import { ChatMessage } from "../../screen/Chat";
import { Option } from "../../data/types";
import { useRef } from "react";

type MessageListProps = {
  messages: ChatMessage[];
  handleOptionSelect: (selectedOption: Option, correctAnswer: string) => void;
};

export function MessageList({
  messages,
  handleOptionSelect,
}: MessageListProps) {
  const flatListRef = useRef<FlatList>(null);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        ref={flatListRef}
        data={messages}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <MessageBubble message={item} onOptionSelect={handleOptionSelect} />
        )}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-end",
          paddingVertical: 20,
        }}
        onContentSizeChange={() => {
          setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
          }, 100);
        }}
      />
    </SafeAreaView>
  );
}
