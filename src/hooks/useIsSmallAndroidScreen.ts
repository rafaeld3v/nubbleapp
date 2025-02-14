import { useMemo } from "react";
import { Dimensions, Platform } from "react-native";

/**
 * Hook to detect if the device is running Android and has a small screen.
 * A small screen is considered one with a width less than 375 pixels or a pixel density (scale) of 2 or lower.
 * @returns {boolean} `true` if the device is an Android with a small screen, otherwise `false`.
 */
export function useIsSmallAndroidScreen() {
  const { width, scale } = Dimensions.get("window");

  const isSmallWidth = width < 375;
  const isLowScale = scale <= 2; // Optional, helps detect low-density displays

  const isSmallAndroidScreen = useMemo(() => {
    return Platform.OS === "android" && (isSmallWidth || isLowScale);
  }, [isLowScale, isSmallWidth]);

  return isSmallAndroidScreen;
}
