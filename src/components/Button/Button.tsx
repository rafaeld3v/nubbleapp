import React from "react";
import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";
import { buttonPresets } from "./buttonPresets";

export type ButtonPreset = "primary" | "outline";

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  disabled,
  preset = "primary",
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];

  return (
    <TouchableOpacityBox
      height={50}
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="s20"
      borderRadius="s16"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
