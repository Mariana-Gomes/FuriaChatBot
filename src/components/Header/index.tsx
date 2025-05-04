import { View, Text } from 'react-native';
import { styles } from './styles';

import { Avatar } from "../Avatar";

import logo from "../../assets/furia-logo.png";

export function Header() {
  return (
    <View style={styles.container}>
      <Avatar image={logo} />
      <View style={styles.chatInfoWrapper}>
        <Text style={styles.chatTitle}>CHAT FURIOSO</Text>
        <View style={styles.onlineStatusWrapper}>
          <View style={styles.onlineStatusIndicator}/>
          <Text style={styles.onlineStatusText}>Online</Text>
        </View>
      </View>
    </View>
  );
}
