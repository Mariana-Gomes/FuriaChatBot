import { SafeAreaView, StatusBar} from "react-native";

import {
  useFonts as useBebasNeue,
  BebasNeue_400Regular,
} from "@expo-google-fonts/bebas-neue";
import {
  useFonts as useOpenSans,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import Chat from "./src/screen/Chat";
import { Loading } from "./src/components/Loading";

const App = () => {
  const [bebasLoaded] = useBebasNeue({
    BebasNeue_400Regular,
  });

  const [openSansLoaded] = useOpenSans({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  const fontsLoaded = bebasLoaded && openSansLoaded;

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content" backgroundColor='#000' />
      <Chat />
    </SafeAreaView>
  );
};

export default App;
