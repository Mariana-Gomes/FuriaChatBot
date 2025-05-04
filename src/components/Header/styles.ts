import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 'auto',
    height: 80,
    alignItems: 'center',
    backgroundColor: '#000',
    paddingLeft: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  chatInfoWrapper: {
    marginLeft: 16,
  },
  chatTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 30,
    color: '#fff',
  },
  onlineStatusWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  onlineStatusIndicator: {
    width: 5,
    height: 5,
    backgroundColor: '#00ff9d',
    borderRadius: 20,
  },
  onlineStatusText: {
    color: '#fff',
    marginLeft: 3,
  },
});