/**
 * @format
 */

import "react-native";
import React from "react";

// Note: import explicitly to use the types shipped with jest.
import { it } from "@jest/globals";
import renderer from "react-test-renderer";

import App from "../App";

it("renders correctly", () => {
  renderer.create(<App />);
});
