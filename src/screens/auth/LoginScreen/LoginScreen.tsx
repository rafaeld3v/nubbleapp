import React from "react";
import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { RootStackParamList } from "../../../routes/Router";
import { LoginSchema, loginSchema } from "./loginSchema";

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  function submitForm({ email, password }: LoginSchema) {
    Alert.alert(`Email: ${email} ${`\n`} Senha: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate("ForgotPasswordScreen");
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: "E-mail é obrigatorio!",
        }}
        render={({ field, fieldState }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Email"
            placeholder="Digite seu e-mail"
            boxProps={{ mb: "s20" }}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Senha obrigatorio!",
        }}
        render={({ field, fieldState }) => (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{ mb: "s10" }}
          />
        )}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />

      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
