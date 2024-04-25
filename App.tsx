import React from "react";
import { SafeAreaView } from "react-native";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";

import { Text } from "./src/components/Text/Text";
import { Button } from "./src/components/Button/Button";
import { Box } from "./src/components/Box/Box";
import { Icon } from "./src/components/Icon/Icon";

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24" gap="s16">
          <Text preset="headingLarge" color="primary">
            rafaeld3v
          </Text>

          <Button title="Primary" marginBottom="s12" />
          <Button title="Primary" loading marginBottom="s12" />
          <Button title="Primary" disabled marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />

          <Box flexDirection="row" gap="s8">
            <Icon name="chevronRight" size={50} />
            <Icon name="heartFill" color="buttonPrimary" />
            <Icon name="profile" size={50} />
            <Icon name="profileFill" size={50} />
            <Icon name="heart" size={50} />
            <Icon name="bellOn" color="carrotSecondary" size={50} />
          </Box>

          <Box flexDirection="row" gap="s8">
            <Icon name="newPost" size={50} />
            <Icon name="camera" size={50} />
            <Icon name="chat" size={50} />
            <Icon name="chatOn" color="error" size={50} />
            <Icon name="flashOff" size={50} />
            <Icon name="flashOn" size={50} />
          </Box>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
