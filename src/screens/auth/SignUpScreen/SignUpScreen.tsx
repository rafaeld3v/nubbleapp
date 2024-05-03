import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootStackParamList } from "../../../routes/Router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";
import { signUpSchema } from "./signUpSchema";

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, "SignUpScreen">;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  function submitForm(formValues: SignUpFormType) {
    console.log(formValues);
    reset({
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é só fazer login na nossa plataforma",
      icon: {
        name: "checkRound",
        color: "success",
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: "s20" }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: "s20" }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: "s48" }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
