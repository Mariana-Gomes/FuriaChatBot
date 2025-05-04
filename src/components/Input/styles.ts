import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 10,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    maxHeight: 60
  },
  messageInput: {
    flex: 1,
    height: 70,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#000',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'OpenSans_400Regular',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sendButton: {
    paddingRight: 15,
  },
});
