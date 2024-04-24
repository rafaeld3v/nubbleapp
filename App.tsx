import React from "react";
import { SafeAreaView } from "react-native";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";

import { Text } from "./src/components/Text/Text";
import { Button } from "./src/components/Button/Button";
import { Box } from "./src/components/Box/Box";

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24" gap="s16">
          <Text preset="headingLarge" color="carrotSecondary">
            rafaeld3v
          </Text>

          <Button title="Primary" />
          <Button disabled title="Primary" />
          <Button loading title="Primary" />
          <Button disabled loading title="Primary" />
          <Button preset="outline" title="Outline" />
          <Button disabled preset="outline" title="Lading" />
          <Button disabled loading preset="outline" title="Lading" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
