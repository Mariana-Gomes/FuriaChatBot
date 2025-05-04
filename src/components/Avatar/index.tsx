import { View, Image, ImageSourcePropType } from 'react-native';
import { styles }  from './styles';

interface AvatarProps {
  image: ImageSourcePropType;
}

export function Avatar({ image }: AvatarProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.userAvatar} source={image} />
    </View>
  );
}
