import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Option } from '../../data/types';

export const getContainerStyle = (isUser: boolean): ViewStyle => ({
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  backgroundColor: isUser ? '#444444' : '#EEE',
  padding: 12,
  marginVertical: 6,
  borderRadius: 10,
  maxWidth: '80%',
  borderTopLeftRadius: isUser ? 8 : 2,
  borderTopRightRadius: isUser ? 2 : 8,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
});

export const getMessageTextStyle = (isUser: boolean, options?: Option[]): TextStyle => ({
  marginBottom: options?.length ? 10 : 0,
  fontFamily: 'OpenSans_700Bold',
  fontSize: 16,
  color: isUser ? '#fff' : '#000',
});

export const styles = StyleSheet.create({
  playerImage: {
    width: 200,
    height: 200,
  },
  optionContainer: {
    marginVertical: 4,
  },
  optionButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 20,
    minWidth: '80%',
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'OpenSans_700Bold',
  },
});