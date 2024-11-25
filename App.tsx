import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./app_modules/Navigator";
import * as SQLITE from "expo-sqlite";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
