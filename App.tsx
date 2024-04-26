import React from "react";
import { SafeAreaView, View } from "react-native";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";

import { Box } from "./src/components/Box/Box";
import { Text } from "./src/components/Text/Text";
import { Button } from "./src/components/Button/Button";
import { TextInput } from "./src/components/TextInput/TextInput";

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            label="Email"
            placeholder="Digite seu e-mail"
            errorMessage="Email invalido"
            BoxProps={{ mb: "s20" }}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            BoxProps={{ mb: "s10" }}
          />

          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button preset="outline" marginTop="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
